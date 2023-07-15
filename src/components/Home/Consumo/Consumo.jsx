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
			paddingInline='15em'
			paddingBlock='6.25em'
			background='linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 24%, rgba(240,228,212,1) 25%, rgba(240,228,212,1) 65%, rgba(255,255,255,1) 66%, rgba(255,255,255,1) 100%);'
		>
			<Titles title='CONSUMO MASIVO' />
			<Stack
				direction='row'
				justify='space-between'
				align='center'
				paddingTop='3.44em'
			>
				<Stack>
					<InfiniteCarousel />
				</Stack>
				<Stack maxW='31.25em' align='center'>
					<Heading fontSize='1.88em' color='secundario'>
						MANÍ KING
					</Heading>
					<Text
						as='p'
						fontSize='1.25em'
						textAlign='center'
						color='negro'
						marginBottom='1.51em'
					>
						Nuestra línea de productos creada para el mercado interno y con los
						estándares de calidad de un producto de exportación. Su constante
						crecimiento nos lleva a conquistar el mercado internacional con su
						sabor.
					</Text>
					<PrimaryButtonXL text='¡Conocé más sobre Maní King!' />
				</Stack>
			</Stack>
			<Stack
				direction='row'
				justify='space-between'
				align='center'
				paddingBlock='8.33em'
			>
				<Stack maxW='31.25em' align='center'>
					<Heading fontSize='1.88em' color='secundario'>
						MARCA BLANCA
					</Heading>
					<Text
						as='p'
						fontSize='1.25em'
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
					<Image filter="drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));" w='49.58em' src={marcaBlanca} />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Consumo;
