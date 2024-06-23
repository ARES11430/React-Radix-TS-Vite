// stores/themeStore.ts
import { create } from 'zustand';

export const accentColors = [
	'gray',
	'gold',
	'bronze',
	'brown',
	'yellow',
	'amber',
	'orange',
	'tomato',
	'red',
	'ruby',
	'crimson',
	'pink',
	'plum',
	'purple',
	'violet',
	'iris',
	'indigo',
	'blue',
	'cyan',
	'teal',
	'jade',
	'green',
	'grass',
	'lime',
	'mint',
	'sky'
] as const;

export const grayColors = ['gray', 'mauve', 'auto', 'slate', 'sage', 'olive', 'sand'] as const;

export type AccentColor = (typeof accentColors)[number];

export type GrayColor = (typeof grayColors)[number];

interface ThemeState {
	darkMode: boolean;
	panelBackground: boolean; // * true is solid
	accentColor: AccentColor;
	grayColor: GrayColor;
	toggleDarkMode: () => void;
	setPanelBackground: () => void;
	setAccentColor: (color: AccentColor) => void;
	setGrayColor: (color: GrayColor) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
	darkMode: localStorage.getItem('darkMode') === 'true' || true,
	panelBackground: localStorage.getItem('panelBackground') === 'true' || true,
	accentColor: (localStorage.getItem('accentColor') as AccentColor) || 'cyan',
	grayColor: (localStorage.getItem('grayColor') as GrayColor) || 'mauve',
	toggleDarkMode: () =>
		set((state) => {
			const newDarkMode = !state.darkMode;
			localStorage.setItem('darkMode', String(newDarkMode));
			return { ...state, darkMode: newDarkMode };
		}),
	setPanelBackground: () =>
		set((state) => {
			const newPanelBG = !state.panelBackground;
			localStorage.setItem('panelBackground', String(newPanelBG));
			return { ...state, panelBackground: newPanelBG };
		}),
	setAccentColor: (color: AccentColor) => {
		localStorage.setItem('accentColor', color);
		set({ accentColor: color });
	},
	setGrayColor: (color: GrayColor) => {
		localStorage.setItem('grayColor', color);
		set({ grayColor: color });
	}
}));

export default useThemeStore;
