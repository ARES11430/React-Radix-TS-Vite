import { Flex, Text } from '@radix-ui/themes';
import ThemeSettings from './components/ThemeSettings';

const NavBar = () => {
	return (
		<nav className='p-4 shadow-lg border-b'>
			<Flex justify='between' align='center' className='mx-2'>
				<Text size='4' weight='bold'>
					My App
				</Text>
				<ThemeSettings />
			</Flex>
		</nav>
	);
};

export default NavBar;
