import React from 'react';
import { Stack, Text, Heading } from '@chakra-ui/react';
import Titles from '../../Titles/Titles';
import PrimaryButtonXL from '../../Buttons/PrimaryButtonXL';
import fondoCampo2 from '../../../assets/fondoCampo.jpeg';

const Origen = () => {
	return (
		<Stack
			h='fit-content'
			w='100%'
			paddingTop='12.5rem'
			paddingBottom='17.5rem'
			background={`linear-gradient(180deg, rgba(0, 0, 0, 0.50) 64.99%, rgba(0, 0, 0, 0.19) 100%), url(${fondoCampo2}), lightgray 50% / cover no-repeat`}
			direction='column'
			align='center'
			bgSize="cover"
		>
			<Stack w='90%' maxW='1400px' align='center' gap='1.8rem'>
				<Titles title='NUESTRO ORIGEN EN TODO EL MUNDO' color='white' />
				<Heading fontSize='2rem' color='white' marginTop="1.8rem">
					COMIENZA A CULTIVAR MANÍ
				</Heading>
				<Text
					as='p'
					fontSize='1.8rem'
					color='white'
					maxW='50rem'
					textAlign='center'
				>
					Tenemos todas las opciones para el éxito de tu inicio en el cultivo,
					también le alquilamos el campo.{' '}
				</Text>
				<PrimaryButtonXL text='¡Conocé nuestra propuesta!' />
			</Stack>
		</Stack>
	);
};

export default Origen;
