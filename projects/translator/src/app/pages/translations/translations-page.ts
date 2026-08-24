import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';

/**
 * A translation source language ("en") is an array of source-text strings,
 * each string doubling as the translation *key* used by `TranslateService`
 * (see `src/app/**` calls like `translateService.translate('Settings')`).
 * Every other language file (e.g. "ua") is a same-length array, positionally
 * aligned to the default language's array — index N in `ua.json` is the
 * translation of index N in `en.json`. There is no dictionary/object form in
 * this repo's actual `src/i18n/*.json` files.
 */
interface TranslationRow {
	index: number;
	key: string; // the default-language (en) source text — also the lookup key
	values: Record<string, string>; // languageCode -> text, always includes 'en'
	missing: string[]; // language codes where this index doesn't exist in that file
	untranslated: string[]; // language codes where the value still equals the en source text
}

/** Matches `src/environments/environment.prod.ts` (`defaultLanguageCode` + `languages`). */
const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = [
	{ code: 'en', name: 'English' },
	{ code: 'ua', name: 'Ukrainian' },
];

@Component({
	selector: 'tr-translations-page',
	imports: [FormsModule, TableModule, TagModule, ButtonModule, InputTextModule, ToggleSwitchModule],
	templateUrl: './translations-page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationsPage {
	private readonly http = inject(HttpClient);

	protected readonly languages = LANGUAGES;
	protected readonly otherLanguages = LANGUAGES.filter((lang) => lang.code !== DEFAULT_LANGUAGE);

	protected readonly loading = signal(true);
	protected readonly loadError = signal<string | undefined>(undefined);
	protected readonly rows = signal<TranslationRow[]>([]);
	protected readonly filterText = signal('');
	protected readonly onlyIssues = signal(false);
	protected readonly dirty = signal(false);

	constructor() {
		this.load();
	}

	private async load(): Promise<void> {
		this.loading.set(true);
		this.loadError.set(undefined);
		try {
			const byLanguage: Record<string, string[]> = {};
			for (const lang of this.languages) {
				byLanguage[lang.code] = await this.http.get<string[]>(`/i18n/${lang.code}.json`).toPromise() as string[];
			}
			const defaultArray = byLanguage[DEFAULT_LANGUAGE] ?? [];
			const rows: TranslationRow[] = defaultArray.map((key, index) => {
				const values: Record<string, string> = { [DEFAULT_LANGUAGE]: key };
				const missing: string[] = [];
				const untranslated: string[] = [];
				for (const lang of this.otherLanguages) {
					const arr = byLanguage[lang.code] ?? [];
					if (index >= arr.length) {
						missing.push(lang.code);
						values[lang.code] = '';
					} else {
						values[lang.code] = arr[index];
						if (arr[index] === key) untranslated.push(lang.code);
					}
				}
				return { index, key, values, missing, untranslated };
			});
			this.rows.set(rows);
		} catch (err) {
			this.loadError.set(
				'Could not load /i18n/en.json and /i18n/ua.json. Make sure `ng serve translator` (or the ' +
					'build) can see the root src/i18n/*.json files — see projects/translator/angular.json ' +
					'asset config.',
			);
			console.error(err);
		} finally {
			this.loading.set(false);
		}
	}

	protected filteredRows(): TranslationRow[] {
		const term = this.filterText().trim().toLowerCase();
		const onlyIssues = this.onlyIssues();
		return this.rows().filter((row) => {
			if (onlyIssues && row.missing.length === 0 && row.untranslated.length === 0) return false;
			if (!term) return true;
			return (
				row.key.toLowerCase().includes(term) ||
				Object.values(row.values).some((value) => value.toLowerCase().includes(term))
			);
		});
	}

	protected setValue(row: TranslationRow, langCode: string, value: string): void {
		this.rows.update((rows) =>
			rows.map((candidate) => {
				if (candidate.index !== row.index) return candidate;
				const values = { ...candidate.values, [langCode]: value };
				const untranslated = this.otherLanguages
					.map((lang) => lang.code)
					.filter((code) => values[code] === values[DEFAULT_LANGUAGE]);
				const missing = candidate.missing.filter((code) => code !== langCode);
				return { ...candidate, values, untranslated, missing };
			}),
		);
		this.dirty.set(true);
	}

	protected issueCount(): number {
		return this.rows().filter((row) => row.missing.length > 0 || row.untranslated.length > 0).length;
	}

	/**
	 * v1 scope: this is a static Angular SPA with no backend, so it can't write
	 * to `src/i18n/*.json` directly from the browser. Instead — mirroring
	 * uikit's "Download Config" pattern — this downloads the edited array for
	 * one language as JSON; the developer replaces the matching file under
	 * `src/i18n/` with it. Not in scope for v1: adding brand-new languages,
	 * machine translation, pluralization tooling.
	 */
	protected downloadLanguage(langCode: string): void {
		const rows = this.rows();
		const array = rows.map((row) => row.values[langCode] ?? '');
		const json = JSON.stringify(array, null, 2);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${langCode}.json`;
		link.click();
		URL.revokeObjectURL(url);
	}
}
