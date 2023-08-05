import React from 'react';
import { Stack, Image, useMediaQuery } from '@chakra-ui/react';
import naranja from '../../../assets/3manikingnaraja.png';
import rojo from '../../../assets/3manikingrojo.png';
import verde from '../../../assets/3manikingverde.png';

const InfiniteCarousel = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack direction='row' gap='1.188rem' width={isMobile && "100%"}>
			<Image
				filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
				h={isMobile ? "15em" : '32rem'}
				src={naranja}
			/>
			<Image
				filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
				h={isMobile ? "15em" : '32rem'}
				src={rojo}
			/>
			<Image
				filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
				h={isMobile ? "15em" : '32rem'}
				src={verde}
			/>
		</Stack>
	);
};

export default InfiniteCarousel;
