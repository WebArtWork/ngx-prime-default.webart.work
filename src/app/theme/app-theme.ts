import { definePreset } from '@wawjs/css-prime-themes';
import Aura from '@wawjs/css-prime-themes/aura';

const AppPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '{amber.50}',
			100: '{amber.100}',
			200: '{amber.200}',
			300: '{amber.300}',
			400: '{amber.400}',
			500: '{amber.500}',
			600: '{amber.600}',
			700: '{amber.700}',
			800: '{amber.800}',
			900: '{amber.900}',
			950: '{amber.950}',
		},
	},
});

export default {
	preset: AppPreset,
	options: {
		darkModeSelector: '[data-mode="dark"]',
	},
};
