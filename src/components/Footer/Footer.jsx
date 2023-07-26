import React from 'react';
import { Stack, Heading, Text, Link, Icon } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Stack
			w='100%'
			align='center'
			bgColor='fondo'
			paddingTop='3.75rem'
			paddingBottom='2.5rem'
		>
			<Stack w='90%' maxW='1400px'>
				<Stack direction='row' justify='space-between'>
					<Stack w='15rem' gap='1rem'>
						<Heading as='h4' fontSize='1.25rem' color='negro'>
							Contacto
						</Heading>
						<Heading as='h5' fontSize='1rem' color='negro'>
							Administración central y planta +54 358 4933500
						</Heading>
						<Text color='negro'>
							Ventasexpo@prodeman.com.ar. Ruta Nacional Nº 158 Km 230 ½ General
							Cabrera – Córdoba Argentina – X5809AHP.
						</Text>
					</Stack>
					<Stack w='15rem' gap='1rem'>
						<Heading as='h4' fontSize='1.25rem' color='negro'>
							¿Reclamos?
						</Heading>
						<Heading as='h5' fontSize='1rem' color='negro'>
							Canal de denuncias
						</Heading>
						<Text>
							Brindamos un espacio confidencial para que puedas manifestar
							cualquier irregularidad.
						</Text>
						<Link>
							<Text as='b' color='negro'>
								Hacer denuncia
							</Text>
						</Link>
					</Stack>
					<Stack w='15rem' gap='1rem'>
						<Heading as='h4' fontSize='1.25rem' color='negro'>
							Tu opinión importa
						</Heading>
						<Heading as='h5' fontSize='1rem' color='negro'>
							Canal de denuncias
						</Heading>
						<Text>
							Escuchamos tu opinión para poder mejorar. Conocer tu grado de
							satisfacción es muy importante para nosotros.
						</Text>
						<Link>
							<Text as='b' color='negro'>
								Hacer encuesta
							</Text>
						</Link>
					</Stack>
					<Stack w='15rem' gap='1rem'>
						<Heading as='h4' fontSize='1.25rem' color='negro'>
							Privacidad de datos
						</Heading>
						<Heading as='h5' fontSize='1rem' color='negro'>
							Canal de denuncias
						</Heading>
						<Text>
							La privacidad es importante para nosotros y estamos comprometidos
							con la seguridad de su información.
						</Text>
						<Link>
							<Text as='b' color='negro'>
								Conocé nuestra política
							</Text>
						</Link>
					</Stack>
					<Stack w='15rem' gap='1rem'>
						<Icon />
					</Stack>
				</Stack>
				<Stack></Stack>
			</Stack>
		</Stack>
	);
};

export default Footer;
