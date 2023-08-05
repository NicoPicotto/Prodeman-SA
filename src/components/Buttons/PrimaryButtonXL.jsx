import React from 'react';
import { Button, useMediaQuery } from '@chakra-ui/react';

const PrimaryButtonXL = ({ text, link }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Button
			bgColor='terciario'
			color='white'
			w='fit-content'
			to={link}
			border='1px solid #B91E13'
			fontSize={isMobile ? '1.5rem' : '1.875rem'}
			boxShadow='0px 2px 2px 0px rgba(0, 0, 0, 0.25);'
			padding={isMobile ? "1.5rem 3rem" : "2rem 4rem"}
			borderRadius='full'
			fontWeight='700'
			_hover={{ bgColor: 'white', color: 'terciario', boxShadow: 'none' }}
		>
			{text}
		</Button>
	);
};

export default PrimaryButtonXL;