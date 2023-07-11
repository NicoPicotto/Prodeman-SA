import React from 'react';
import { Stack, Heading, Text, Image } from '@chakra-ui/react';
import salado from '../../../assets/Salado-sin-piel.png';

const Header = () => {
	return (
		<Stack
			h='44.27em'
			w='100%'
			paddingInline='6.25em'
			bgImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(90deg, rgba(130, 17, 11, 0.53) 0%, rgba(0, 0, 0, 0.20) 100%), url('src/assets/peanut.webp')`}
			bgBlendMode='multiply'
			bgSize='cover'
			direction='row'
			align='center'
			justify='space-between'
		>
			<Stack maxW='30.99em' color='white' gap='1.46em'>
				<Text fontSize='3.65em' lineHeight='101%'>
					MANÍ ARGENTINO CON CALIDAD DE <Text as='b'>EXPORTACIÓN</Text>
				</Text>
				<Text fontSize='1.56em' lineHeight='119.1%'>
					En <Text as='b'>Prodeman</Text> trabajan más de 600 personas,
					dedicadas a llevar a cabo cada etapa productiva y de comercialización
					del maní.
				</Text>
			</Stack>
			<Stack>
				<Image w='25.26em' src={salado} />
			</Stack>
		</Stack>
	);
};

export default Header;
