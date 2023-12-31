import React from 'react';
import {
	Stack,
	Heading,
	Text,
	Link,
	Image,
	useMediaQuery,
} from '@chakra-ui/react';
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoLinkedin,
	BiLogoTwitter,
	BiLogoYoutube,
	BiLogoTiktok,
} from 'react-icons/bi';
import footerLogos1 from '../../assets/Footer/logosFooter1.png';
import footerLogos2 from '../../assets/Footer/logosFooter2.png';
import pdmLogo from '../../assets/Footer/prodemanlogo.png';

const Footer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<>
			<Stack
				w='100%'
				align='center'
				bgColor='fondo'
				paddingTop='3.75rem'
				paddingBottom='2.5rem'
			>
				<Stack w='90%' maxW='1400px'>
					<Stack
						direction={isMobile ? 'column' : 'row'}
						justify='space-between'
					>
						<Stack
							w={isMobile ? '100%' : '15rem'}
							marginBottom={isMobile && '1em'}
							gap='1rem'
						>
							<Heading as='h4' fontSize={isMobile ? '1.6rem' : '1.25rem'} color='negro'>
								Contacto
							</Heading>
							<Heading as='h5' fontSize={isMobile ? '1.2rem' : '1rem'} color='negro'>
								Administración central y planta +54 358 4933500
							</Heading>
							<Text color='negro'>
								Ventasexpo@prodeman.com.ar. Ruta Nacional Nº 158 Km 230 ½
								General Cabrera – Córdoba Argentina – X5809AHP.
							</Text>
						</Stack>
						<Stack
							w={isMobile ? '100%' : '15rem'}
							marginBottom={isMobile && '1em'}
							gap='1rem'
						>
							<Heading as='h4' fontSize={isMobile ? '1.6rem' : '1.25rem'}  color='negro'>
								¿Reclamos?
							</Heading>
							<Heading as='h5' fontSize={isMobile ? '1.2rem' : '1rem'} color='negro'>
								Canal de denuncias
							</Heading>
							<Text>
								Brindamos un espacio confidencial para que puedas manifestar
								cualquier irregularidad.
							</Text>
							<Link>
								<Text as='b' color='negro' fontSize={isMobile && "1.2rem"}>
									Hacer denuncia
								</Text>
							</Link>
						</Stack>
						<Stack
							w={isMobile ? '100%' : '15rem'}
							marginBottom={isMobile && '1em'}
							gap='1rem'
						>
							<Heading as='h4' fontSize={isMobile ? '1.6rem' : '1.25rem'}  color='negro'>
								Tu opinión importa
							</Heading>
							<Heading as='h5' fontSize={isMobile ? '1.2rem' : '1rem'} color='negro'>
								Canal de denuncias
							</Heading>
							<Text>
								Escuchamos tu opinión para poder mejorar. Conocer tu grado de
								satisfacción es muy importante para nosotros.
							</Text>
							<Link>
								<Text as='b' color='negro' fontSize={isMobile && "1.2rem"}>
									Hacer encuesta
								</Text>
							</Link>
						</Stack>
						<Stack
							w={isMobile ? '100%' : '15rem'}
							marginBottom={isMobile && '1em'}
							gap='1rem'
						>
							<Heading as='h4' fontSize={isMobile ? '1.6rem' : '1.25rem'}  color='negro'>
								Privacidad de datos
							</Heading>
							<Heading as='h5' fontSize={isMobile ? '1.2rem' : '1rem'} color='negro'>
								Canal de denuncias
							</Heading>
							<Text>
								La privacidad es importante para nosotros y estamos
								comprometidos con la seguridad de su información.
							</Text>
							<Link>
								<Text as='b' color='negro' fontSize={isMobile && "1.2rem"}>
									Conocé nuestra política
								</Text>
							</Link>
						</Stack>
						<Stack
							w={isMobile ? '100%' : '15rem'}
							gap='2rem'
							justify={isMobile ? 'center' : 'flex-end'}
							direction={isMobile ? 'row' : 'column'}
						>
							<Stack direction='row' gap='1.7rem'>
								<Stack
									border='1px solid #28292B'
									w='3rem'
									h='3rem'
									borderRadius='full'
									padding='2px'
									align='center'
									justify='center'
								>
									<BiLogoFacebook fontSize='1.6rem' />
								</Stack>
								<Stack
									border='1px solid #28292B'
									w='3rem'
									h='3rem'
									borderRadius='full'
									padding='2px'
									align='center'
									justify='center'
								>
									<BiLogoInstagram fontSize='1.6rem' />
								</Stack>
								<Stack
									border='1px solid #28292B'
									borderRadius='full'
									padding='2px'
									align='center'
									justify='center'
									w='3rem'
									h='3rem'
								>
									<BiLogoLinkedin fontSize='1.3rem' />
								</Stack>
							</Stack>
							<Stack direction='row' gap='1.7rem'>
								<Stack
									border='1px solid #28292B'
									w='3rem'
									h='3rem'
									borderRadius='full'
									padding='2px'
									align='center'
									justify='center'
								>
									<BiLogoTwitter fontSize='1.6rem' />
								</Stack>
								<Stack
									border='1px solid #28292B'
									w='3rem'
									h='3rem'
									borderRadius='full'
									padding='2px'
									align='center'
									justify='center'
								>
									<BiLogoYoutube fontSize='1.6rem' />
								</Stack>
								<Stack
									border='1px solid #28292B'
									w='3rem'
									h='3rem'
									borderRadius='full'
									padding='2px'
									align='center'
									justify='center'
								>
									<BiLogoTiktok fontSize='1.6rem' />
								</Stack>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<Stack
				w='100%'
				align='center'
				bgColor='white'
				paddingTop='1.25rem'
				paddingBottom='1.25rem'
			>
				<Stack
					w='90%'
					maxW='1400px'
					direction={isMobile ? 'column' : 'row'}
					justify='space-between'
					align='center'
				>
					<Image src={footerLogos1} objectFit='contain' h='3.3rem' marginBottom={isMobile && "1em"} />
					<Image src={footerLogos2} objectFit='contain' h='3.3rem' marginBottom={isMobile && "1em"}/>
					<Image src={pdmLogo} objectFit='contain' h='3.3rem' marginBottom={isMobile && "1em"}/>
					<Text color='negro' fontSize='1rem'>
						© 2023 Todos los derechos reservados
					</Text>
				</Stack>
			</Stack>
		</>
	);
};

export default Footer;
