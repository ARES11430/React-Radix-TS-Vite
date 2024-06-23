import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import useThemeStore, {
	AccentColor,
	accentColors,
	GrayColor,
	grayColors
} from '../stores/themeStore';
import { Text, Switch, Flex, Button, Popover, Select } from '@radix-ui/themes';

const ThemeSettings = () => {
	const darkMode = useThemeStore((state) => state.darkMode);
	const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

	const panelBackground = useThemeStore((state) => state.panelBackground);
	const setPanelBackground = useThemeStore((state) => state.setPanelBackground);

	const accentColor: AccentColor = useThemeStore((state) => state.accentColor);
	const setAccentColor = useThemeStore((state) => state.setAccentColor);

	const grayColor: GrayColor = useThemeStore((state) => state.grayColor);
	const setGrayColor = useThemeStore((state) => state.setGrayColor);

	return (
		<Flex align='center' gap='2'>
			<Popover.Root>
				<Popover.Trigger>
					<Button variant='soft'>
						<MixerHorizontalIcon width='16' height='16' />
					</Button>
				</Popover.Trigger>
				<Popover.Content>
					<Flex direction='column' gap='4'>
						<Text size='3' weight='bold'>
							Theme Settings
						</Text>
						<Flex gap='2' align='center' justify='between'>
							<Text size='2' weight='bold'>
								{darkMode ? 'Dark Mode' : 'light Mode'}
							</Text>
							<Switch
								defaultChecked
								radius='full'
								checked={darkMode}
								onCheckedChange={toggleDarkMode}
							/>
						</Flex>
						<Flex gap='2' align='center' justify='between'>
							<Text size='2' weight='bold'>
								{panelBackground ? 'Solid' : 'Translucent'}
							</Text>
							<Switch
								defaultChecked
								radius='full'
								checked={panelBackground}
								onCheckedChange={setPanelBackground}
							/>
						</Flex>
						<Flex direction='column' gap='1'>
							<Text size='2' weight='bold'>
								Accent Color
							</Text>
							<Select.Root
								onValueChange={(value: AccentColor) => setAccentColor(value)}
								defaultValue={accentColor}
							>
								<Select.Trigger />
								<Select.Content>
									<Select.Group>
										{accentColors.map((ac, index) => (
											<Select.Item key={index} value={ac}>
												<Flex align='center' gap='2'>
													<div
														style={{
															...colorStyles[ac],
															width: 16,
															height: 16,
															borderRadius: '50%'
														}}
													/>
													{ac}
												</Flex>
											</Select.Item>
										))}
									</Select.Group>
								</Select.Content>
							</Select.Root>
						</Flex>
						<Flex direction='column' gap='1'>
							<Text size='2' weight='bold'>
								Gray Color
							</Text>
							<Select.Root
								onValueChange={(value: GrayColor) => setGrayColor(value)}
								defaultValue={grayColor}
							>
								<Select.Trigger />
								<Select.Content>
									<Select.Group>
										{grayColors.map((gc, index) => (
											<Select.Item key={index} value={gc}>
												<Flex align='center' gap='2'>
													<div
														style={{
															...grayStyles[gc],
															width: 16,
															height: 16,
															borderRadius: '50%'
														}}
													/>
													{gc}
												</Flex>
											</Select.Item>
										))}
									</Select.Group>
								</Select.Content>
							</Select.Root>
						</Flex>
					</Flex>
				</Popover.Content>
			</Popover.Root>
		</Flex>
	);
};

const colorStyles: Record<string, React.CSSProperties> = {
	gray: { backgroundColor: '#838383' },
	gold: { backgroundColor: '#8C7A5E' },
	bronze: { backgroundColor: '#957468' },
	brown: { backgroundColor: '#A07553' },
	yellow: { backgroundColor: '#FFDC00' },
	amber: { backgroundColor: '#FFBA18' },
	orange: { backgroundColor: '#EF5F00' },
	tomato: { backgroundColor: '#DD4425' },
	red: { backgroundColor: '#DC3E42' },
	ruby: { backgroundColor: '#DC3B5D' },
	crimson: { backgroundColor: '#DF3478' },
	pink: { backgroundColor: '#CF3897' },
	plum: { backgroundColor: '#A144AF' },
	purple: { backgroundColor: '#8347B9' },
	violet: { backgroundColor: '#654DC4' },
	iris: { backgroundColor: '#5151CD' },
	indigo: { backgroundColor: '#3358D4' },
	blue: { backgroundColor: '#0588F0' },
	cyan: { backgroundColor: '#0797B9' },
	teal: { backgroundColor: '#0D9B8A' },
	jade: { backgroundColor: '#26997B' },
	green: { backgroundColor: '#2B9A66' },
	grass: { backgroundColor: '#3E9B4F' },
	lime: { backgroundColor: '#B0E64C' },
	mint: { backgroundColor: '#7DE0CB' },
	sky: { backgroundColor: '#74DAF8' }
};

const grayStyles: Record<string, React.CSSProperties> = {
	gray: { backgroundColor: '#202020' },
	mauve: { backgroundColor: '#211F26' },
	auto: { backgroundColor: '#211F26' },
	slate: { backgroundColor: '#211F26' },
	sage: { backgroundColor: '#1A211E' },
	olive: { backgroundColor: '#1D211C' },
	sand: { backgroundColor: '#21201C' }
};

export default ThemeSettings;
