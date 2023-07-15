import React from 'react';
import { Stack, Image, Text } from '@chakra-ui/react';

const PeanutComponent = ({ image, title }) => {
	return (
		<Stack align='center' gap='0.99em'>
			<Image h='7.34em' src={image} />
			<Text fontSize='1.25em' color='secundario' as='b'>
				{title}
			</Text>
		</Stack>
	);
};

export default PeanutComponent;
