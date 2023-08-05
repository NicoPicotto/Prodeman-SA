import React from 'react';
import { Stack, Image, Text, useMediaQuery } from '@chakra-ui/react';

const PeanutComponent = ({ image, title }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			align='center'
			gap='0.99em'
		>
			<Image
				h={isMobile ? '5.813rem' : '8.813rem'}
				src={image}
				objectFit='cover'
			/>
			<Text fontSize='1.5rem' color='secundario' as='b' textAlign='center'>
				{title}
			</Text>
		</Stack>
	);
};

export default PeanutComponent;
