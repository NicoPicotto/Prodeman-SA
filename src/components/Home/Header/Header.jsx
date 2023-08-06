import React from 'react';
import { Stack, useMediaQuery, Text, Image } from '@chakra-ui/react';
import salado from '../../../assets/Salado-sin-piel.png';
import fondo from '../../../assets/peanut.webp';
import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack
			h={isMobile ? 'auto' : '53.125rem'}
			bgImage={isMobile ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(90deg, rgba(130, 17, 11, 0.53) 0%, rgba(0, 0, 0, 0.20) 100%), url(${fondo})` : `linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(90deg, rgba(130, 17, 11, 0.53) 0%, rgba(0, 0, 0, 0.20) 100%), url(${fondo})`}
			bgBlendMode='multiply'
			bgSize='cover'
			align='center'
			justify='center'
		>
			<Stack
				maxW={isMobile ? '90%' : '1400px'}
				w={isMobile ? '100%' : '90%'}
				direction='row'
				align='center'
				justify={isMobile ? 'center' : 'space-between'}
				paddingBlock={isMobile && '4em'}
			>
				<Stack
					maxW={isMobile ? '90%' : '33.688rem'}
					color='white'
					gap='1.75rem'
				>
					<Text
						fontSize={isMobile ? '3rem' : "4rem"}
						lineHeight='101%'
						textAlign={isMobile && 'center'}
					>
						<Trans i18nKey='header.title'>
							MANÍ ARGENTINO CON CALIDAD DE <Text as='b'>EXPORTACIÓN</Text>
						</Trans>
					</Text>
					<Text
						fontSize={isMobile ? '1.5em' : '1.875rem'}
						lineHeight='119.1%'
						textAlign={isMobile && 'center'}
					>
						<Trans i18nKey='header.subtitle'>
							En <Text as='b'>Prodeman</Text> trabajan más de 600 personas,
							dedicadas a llevar a cabo cada etapa productiva y de
							comercialización del maní.
						</Trans>
					</Text>
				</Stack>
				<Stack display={isMobile && 'none'}>
					<Image w='28.625rem' src={salado} />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Header;
