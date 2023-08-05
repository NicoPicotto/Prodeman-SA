import React from 'react';
import { Stack, Image, Text, Heading, useMediaQuery } from '@chakra-ui/react';
import fondoPattern from '../../../assets/fondopattern.png';
import Titles from '../../Titles/Titles';
import planta from '../../../assets/planta.jpeg';
import dibujomano from '../../../assets/dibujo-medio-ambiente.png';
import PrimaryButtonXL from '../../Buttons/PrimaryButtonXL';

const Sustentabilidad = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			w='100%'
			paddingTop={isMobile ? '10rem' : '12.5rem'}
			paddingBottom={isMobile ? '10rem' : '17.5rem'}
			background={`linear-gradient(rgba(255,255,255, 0.95), rgba(255,255,255, 0.95)), url(${fondoPattern})`}
			bgSize='23rem'
			direction='column'
			align='center'
			position='relative'
		>
			<Image
				src={dibujomano}
				position='absolute'
				w='31.25rem'
				right='15rem'
				bottom='0'
				display={isMobile && 'none'}
			/>
			<Stack w='90%' maxW='1400px' gap='4rem'>
				<Titles title='SUSTENTABILIDAD' />
				<Stack
					direction={isMobile ? 'column' : 'row'}
					justify='space-between'
					align='center'
				>
					<Image
						w='50rem'
						borderRadius='20px 20px 0 20px'
						src={planta}
						filter='drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.25));'
						marginBottom={isMobile && '2em'}
					/>
					<Stack maxW='40rem' align='center'>
						<Heading fontSize='2.25rem' color='secundario' textAlign='center'>
							Planta de Energía para Biomasa de Cáscara de Maní Dedicada
						</Heading>
						<Text
							as='p'
							fontSize='1.5rem'
							textAlign='center'
							color='negro'
							marginBottom='1.813rem'
						>
							Prodeman es una empresa que actúa con una miradasustentable y
							responsable con el entorno en el que está inmerso.
						</Text>
						<PrimaryButtonXL text='¡Conocé nuestra propuesta!' />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Sustentabilidad;
