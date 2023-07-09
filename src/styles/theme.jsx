import { extendTheme } from '@chakra-ui/react';

const colors = {
	primario: '#a17424',
	secundario: '#631009',
	negro: '#0D0D0D',
	fondo: '#ffffffc4',
};

const fonts = {
	body: `'Poppins', sans-serif`,
	heading: `'Poppins', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
