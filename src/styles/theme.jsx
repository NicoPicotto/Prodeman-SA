import { extendTheme } from '@chakra-ui/react';

const colors = {
	primario: '#a17424',
	secundario: '#631009',
	terciario: "#B91E13",
	negro: '#0D0D0D',
	fondo: '#F5F5F5',
};

const fonts = {
	body: `'Poppins', sans-serif`,
	heading: `'Poppins', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
