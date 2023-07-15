import React from 'react';
import { Stack, Image, Text } from '@chakra-ui/react';
import naranja from '../../../assets/3manikingnaraja.png';
import rojo from '../../../assets/3manikingrojo.png';
import verde from '../../../assets/3manikingverde.png';

const InfiniteCarousel = () => {
	return (
		<Stack direction='row' gap='0.99em'>
			<Image
				w='17.24em'
				filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
				h='33.07em'
				src={naranja}
			/>
			<Image
				w='17.24em'
				filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
				h='33.07em'
				src={rojo}
			/>
			<Image
				w='17.24em'
				filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
				h='33.07em'
				src={verde}
			/>
		</Stack>
	);
};

export default InfiniteCarousel;
