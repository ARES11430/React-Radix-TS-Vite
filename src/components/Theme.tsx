import { PropsWithChildren } from 'react';
import { Theme as ThemeComponent } from '@radix-ui/themes';
import useThemeStore from '../stores/themeStore';

const Theme = ({ children }: PropsWithChildren) => {
	const darkMode = useThemeStore((state) => state.darkMode);
	const accentColor = useThemeStore((state) => state.accentColor);
	const grayColor = useThemeStore((state) => state.grayColor);
	const panelBackground = useThemeStore((state) => state.panelBackground);

	const themeMode = darkMode ? 'dark' : 'light';
	const backGroundMode = panelBackground ? 'solid' : 'translucent';

	return (
		<ThemeComponent
			appearance={themeMode}
			accentColor={accentColor}
			grayColor={grayColor}
			panelBackground={backGroundMode}
			radius='small'
		>
			{children}
		</ThemeComponent>
	);
};

export default Theme;
