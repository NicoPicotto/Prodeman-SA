import React from 'react';
import { Stack, Image } from '@chakra-ui/react';
import fondoPattern from '../../../assets/fondopattern.png';
import Titles from '../../Titles/Titles';
import planta from '../../../assets/planta.jpeg';

const Sustentabilidad = () => {
	return (
		<Stack
			w='100%'
			paddingTop='12.5rem'
			paddingBottom='17.5rem'
			background={`linear-gradient(rgba(255,255,255, 0.95), rgba(255,255,255, 0.95)), url(${fondoPattern})`}


            bgSize="23rem"
			direction='column'
			align='center'
		>
			<Stack w='90%' maxW='1400px' align='center' gap='4rem'>
				<Titles title='SUSTENTABILIDAD' />
				<Stack direction='row'>
					<Image
						w='53rem'
						borderRadius='20px 20px 0 20px'
						src={planta}
						filter='drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.25));'
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Sustentabilidad;
