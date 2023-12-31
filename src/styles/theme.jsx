import { extendTheme } from '@chakra-ui/react';

const colors = {
	primario: '#a17424',
	secundario: '#631009',
	terciario: '#B91E13',
	negro: '#323232',
	fondo: '#F5F5F5',
};


const fonts = {
	body: `'Poppins', sans-serif`,
	heading: `'Poppins', sans-serif`,
};

const styles = {
	global: {
		'html': {
			bgColor: '#F5F5F5',
			fontSize: "12px",
		},
	},
};

const theme = extendTheme({ colors, fonts, styles });

export default theme;