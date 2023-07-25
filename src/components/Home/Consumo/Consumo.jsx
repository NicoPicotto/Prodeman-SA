import React from 'react';
import { Stack, Heading, Text, Image } from '@chakra-ui/react';
import Titles from '../../Titles/Titles';
import PrimaryButtonXL from '../../Buttons/PrimaryButtonXL';
import InfiniteCarousel from './Carousel';
import marcaBlanca from '../../../assets/marcablanca_1.png';

const Consumo = () => {
	return (
		<Stack
			w='100%'
			paddingBlock='10rem'
			background='linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 24%, rgba(240,228,212,1) 25%, rgba(240,228,212,1) 65%, rgba(255,255,255,1) 66%, rgba(255,255,255,1) 100%);'
			align='center'
		>
			<Stack w='90%' maxW='1400px'>
				<Titles title='CONSUMO MASIVO' />
				<Stack
					direction='row'
					justify='space-between'
					align='center'
					paddingTop='4.125rem'
					marginBottom="10rem"
				>
					<Stack>
						<InfiniteCarousel />
					</Stack>
					<Stack maxW='34.375rem' align='center'>
						<Heading fontSize='2.25rem' color='secundario'>
							MANÍ KING
						</Heading>
						<Text
							as='p'
							fontSize='1.5rem'
							textAlign='center'
							color='negro'
							marginBottom='1.813rem'
						>
							Nuestra línea de productos creada para el mercado interno y con
							los estándares de calidad de un producto de exportación. Su
							constante crecimiento nos lleva a conquistar el mercado
							internacional con su sabor.
						</Text>
						<PrimaryButtonXL text='¡Conocé más sobre Maní King!' />
					</Stack>
				</Stack>
				<Stack
					direction='row'
					justify='space-between'
					align='center'
					paddingTop='4.125rem'
				>
					<Stack maxW='34.375rem' align='center'>
						<Heading fontSize='2.25rem' color='secundario'>
							MARCA BLANCA
						</Heading>
						<Text
							as='p'
							fontSize='1.5rem'
							textAlign='center'
							color='negro'
							marginBottom='1.51em'
						>
							Escuchamos a nuestros clientes y les brindamos la opción de vender
							la calidad de nuestros productos con su propia marca. Para ello,
							tenemos un equipo altamente calificado en el desarrollo de
							packaging, adecuando el producto a cada necesidad.
						</Text>
						<PrimaryButtonXL text='¡Conocé más!' />
					</Stack>
					<Stack>
						<Image
							filter='drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));'
							w='49.58em'
							src={marcaBlanca}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Consumo;
