export interface AppMenuItem {
	label: string;
	icon?: string;
	class?: string;
	path?: string;
	url?: string;
	target?: string;
	disabled?: boolean;
	visible?: boolean;
	routerLink?: string[];
	items?: AppMenuItem[];
}
