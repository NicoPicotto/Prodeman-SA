import React from 'react';
import { Stack, Text, Image, useMediaQuery } from '@chakra-ui/react';
import fondoCrudo from '../../../assets/aboutfondo.jpeg';
import Titles from '../../Titles/Titles';
import PrimaryButtonXL from '../../Buttons/PrimaryButtonXL';
import maniizq from '../../../assets/dibujomani2.png';
import manider from '../../../assets/dibujomani3.png';

const SobreProdeman = () => {

	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			h={isMobile ? "auto" : '54rem'}
			w='100%'
			paddingTop={isMobile ? '10rem' : '12.5rem'}
			paddingBottom={isMobile ? '10rem' : '17.5rem'}
			background={isMobile ? `linear-gradient(0deg, rgba(20, 20, 20, 0.75) 0%, rgba(20, 20, 20, 0.75) 100%), url(${fondoCrudo}), lightgray 50% / cover no-repeat` : `linear-gradient(0deg, rgba(50, 50, 50, 0.75) 0%, rgba(50, 50, 50, 0.75) 100%), url(${fondoCrudo}), lightgray 50% / cover no-repeat`}
			direction='column'
			position='relative'
			align='center'
			bgSize={isMobile ? 'cover' : '100%'}
			bgAttachment='fixed'
			
		>
			<Stack w='90%' maxW='1400px' align='center' gap='1.8rem'>
				<Image
					src={manider}
					position='absolute'
					w='16.5rem'
					right='12.8rem'
					top='9.5rem'
					zIndex={2}
					display={isMobile && "none"}
				/>
				<Image
					src={maniizq}
					position='absolute'
					w='27rem'
					left='10.6rem'
					bottom='-11rem'
					zIndex={2}
					display={isMobile && "none"}
				/>
				<Titles title='SOBRE PRODEMAN' color='white' />
				<Text
					as='p'
					fontSize='1.8rem'
					color='white'
					maxW='42.5rem'
					textAlign='center'
				>
					Nuestra línea de productos creada para el mercado interno y con los
					estándares de calidad de un producto de exportación. Su constante
					crecimiento nos lleva a conquistar el mercado internacional con su
					sabor.{' '}
				</Text>
				<PrimaryButtonXL text='¡Conocé más sobre nosotros!' />
			</Stack>
		</Stack>
	);
};

export default SobreProdeman;
