import React from 'react';
import { Button } from '@chakra-ui/react';

const PrimaryButton = ({ text, link, pad }) => {
	return (
		<Button
			bgColor='terciario'
			color='white'
			w='fit-content'
			to={link}
			border='1px solid #B91E13'
			fontSize='1.04em'
			boxShadow='0px 2px 2px 0px rgba(0, 0, 0, 0.25);'
			paddingInline='1.3em'
			paddingBlock='0.42em'
			borderRadius='full'
			fontWeight='700'
			_hover={{ bgColor: 'white', color: 'terciario', boxShadow: 'none' }}
		>
			{text}
		</Button>
	);
};

export default PrimaryButton;
