import React from 'react';
import { Stack, Image, Text } from '@chakra-ui/react';
import PrimaryButtonXL from '../../Buttons/PrimaryButtonXL';
import Titles from '../../Titles/Titles';
import fondoGranel from '../../../assets/fondogranel.jpeg';
import paises from '../../../assets/paisesexport.png';
import PeanutComponent from './PeanutComponent';
import crudocp from '../../../assets/crudocp.png';
import blanched from '../../../assets/crudo.png';
import frito from '../../../assets/frito.png';
import saborizado from '../../../assets/saborizado.png';
import tostado from '../../../assets/tostado.png';
import garrapi from '../../../assets/garrapi.png';
import pasta from '../../../assets/pasta.png';
import dibujomano from '../../../assets/dibujo-medio-ambiente.png';
import dibujomani from '../../../assets/dibujo-mani.png';

const Produccion = () => {
	return (
		<Stack
			h='63.5rem'
			w='100%'
			paddingBlock='7.5rem'
			background={`linear-gradient(0deg, rgba(240, 228, 212, 0.88) 0%, rgba(240, 228, 212, 0.88) 100%), url(${fondoGranel}), lightgray 50% / cover no-repeat;`}
			direction='column'
			position='relative'
			align="center"
		>
			<Stack w="90%" maxW="1400px">
				<Image
					src={dibujomano}
					position='absolute'
					w='31.25rem'
					right='5.063rem'
					top='-7rem'
				/>
				<Image
					src={dibujomani}
					position='absolute'
					w='22rem'
					left='10rem'
					bottom='-9em'
				/>
				<Stack gap='1.625rem' marginBottom='4.875rem'>
					<Titles
						title='PRODUCCIÓN A GRANEL'
						subtitle='Exportamos a más de 40 países'
					/>
					<Image src={paises} w='35.875rem' />
				</Stack>
				<Stack direction='column' align='center' marginBottom='2.45em'>
					<Stack direction='row' gap='2.55em'>
						<PeanutComponent title='Crudo' image={crudocp} />
						<PeanutComponent title='Blancheado' image={blanched} />
						<PeanutComponent title='Maní Frito' image={frito} />
					</Stack>
					<Stack direction='row' gap='2.55em'>
						<PeanutComponent title='Maní Saborizado' image={saborizado} />
						<PeanutComponent title='Maní Tostado' image={tostado} />
						<PeanutComponent title='Garrapiñada' image={garrapi} />
						<PeanutComponent title='Pasta y Manteca' image={pasta} />
					</Stack>
				</Stack>
				<Stack align='center'>
					<PrimaryButtonXL text='¡Conocer Más!' />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Produccion;
