import React from 'react';
import { Button } from '@chakra-ui/react';

const PrimaryButton = ({ text, link }) => {
	return (
		<Button
			bgColor='terciario'
			color='white'
			w="fit-content"
			to={link}
			fontSize='1.04em'
			paddingInline='1.3em'
			paddingBlock='0.42em'
			borderRadius='full'
			fontWeight='700'
			_hover={{ bgColor: '#a31a10' }}
		>
			{text}
		</Button>
	);
};

export default PrimaryButton;
