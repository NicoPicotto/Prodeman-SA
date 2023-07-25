import React from 'react';
import { Stack, Heading, Text, Image } from '@chakra-ui/react';
import salado from '../../../assets/Salado-sin-piel.png';
import fondo from '../../../assets/peanut.webp';
import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();

	return (
		<Stack
			h='53.125rem'
			bgImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(90deg, rgba(130, 17, 11, 0.53) 0%, rgba(0, 0, 0, 0.20) 100%), url(${fondo})`}
			bgBlendMode='multiply'
			bgSize='cover'
			align='center'
			justify="center"
		>
			<Stack
				maxW='1400px'
				w='90%'
				direction='row'
				align='center'
				justify='space-between'
			>
				<Stack maxW='33.688rem' color='white' gap='1.75rem'>
					<Text fontSize='4rem' lineHeight='101%'>
						<Trans i18nKey='header.title'>
							MANÍ ARGENTINO CON CALIDAD DE <Text as='b'>EXPORTACIÓN</Text>
						</Trans>
					</Text>
					<Text fontSize='1.875rem' lineHeight='119.1%'>
						<Trans i18nKey='header.subtitle'>
							En <Text as='b'>Prodeman</Text> trabajan más de 600 personas,
							dedicadas a llevar a cabo cada etapa productiva y de
							comercialización del maní.
						</Trans>
					</Text>
				</Stack>
				<Stack>
					<Image w='28.625rem' src={salado} />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Header;
