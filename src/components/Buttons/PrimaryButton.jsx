import React from 'react';
import { Button } from '@chakra-ui/react';

const PrimaryButton = ({ text, link }) => {
	return (
		<Button
			bgColor='terciario'
			color='white'
			to={link}
			fontSize='1em'
			paddingInline='25px'
			paddingBlock='8px'
			borderRadius='20px'
			fontWeight='700'
			_hover={{ bgColor: "#a31a10" }}
		>
			{text}
		</Button>
	);
};

export default PrimaryButton;
