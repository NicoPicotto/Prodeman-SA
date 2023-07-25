import React from 'react';
import { Stack, Image, Text } from '@chakra-ui/react';

const PeanutComponent = ({ image, title }) => {
	return (
		<Stack align='center' gap='0.99em'>
			<Image h='8.813rem' src={image} />
			<Text fontSize='1.5rem' color='secundario' as='b'>
				{title}
			</Text>
		</Stack>
	);
};

export default PeanutComponent;
