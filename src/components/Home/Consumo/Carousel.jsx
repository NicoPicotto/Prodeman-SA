import React, { useState, useEffect } from 'react';
import { Stack, Image, useMediaQuery, Flex, Button } from '@chakra-ui/react';
import { BsCaretRightFill } from 'react-icons/bs';
import naranja from '../../../assets/3manikingnaraja.png';
import rojo from '../../../assets/3manikingrojo.png';
import verde from '../../../assets/3manikingverde.png';
import violeta from '../../../assets/5manikingvioleta.png';
import rojo2 from '../../../assets/6manikingrojo2.png';
import verde2 from '../../../assets/4manikingverde2.png';

const InfiniteCarousel = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const images = [naranja, rojo, verde, violeta, rojo2, verde2];
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		const nextIndex = (startIndex + 1) % images.length;
		setStartIndex(nextIndex);
	};

	const getDisplayImages = () => {
		let endIndex = startIndex + 3;
		if (endIndex > images.length) {
			return images
				.slice(startIndex)
				.concat(images.slice(0, endIndex - images.length));
		}
		return images.slice(startIndex, endIndex);
	};

	return (
		<Flex direction='row' gap='1.188rem' width={isMobile && '100%'}>
			<Stack direction='row' gap='1.188rem'>
				{getDisplayImages().map((image, index) => (
					<Image
						key={index}
						filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
						h={isMobile ? '15em' : '32rem'}
						src={image}
					/>
				))}
				<Stack justify='center'>
					<Button
						onClick={handleNext}
						ml={2}
						color='secundario'
						bgColor='transparent'
						p={0}
						transition='0.1s ease-in'
						_hover={{ bgColor: 'transparent', marginLeft: 3 }}
					>
						<BsCaretRightFill fontSize='4em' />
					</Button>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default InfiniteCarousel;
