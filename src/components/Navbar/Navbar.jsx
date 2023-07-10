import React from 'react';
import { Stack, Link, Image } from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import PrimaryButton from '../Buttons/PrimaryButton';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import logo from '../../assets/logo.png';
import idioma1 from '../../assets/idioma1.png';
import idioma2 from '../../assets/idioma2.png';
import idioma3 from '../../assets/idioma3.png';

const Navbar = () => {
	return (
		<Stack>
			<Stack
				bgColor='secundario'
				w='100%'
				paddingInline='120px'
				paddingBlock='12px'
				direction='row'
				justify='flex-end'
				align='center'
				gap='24px'
			>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='25px' src={linkedin} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='25px' src={facebook} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='25px' src={instagram} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='25px' src={twitter} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='25px' src={youtube} />
				</Link>
				<PrimaryButton text='Agendar reunión' />
			</Stack>
			<Stack
				bgColor='white'
				w='100%'
				align='center'
				direction='row'
				justify='space-between'
				paddingInline='120px'
			>
				<Stack>
					<Image src={logo} />
				</Stack>
				<Stack direction='row' align='center' gap='20px'>
					<Link as={ReachLink} to='/' color='#646464' fontWeight='600'>
						Productos
					</Link>
					<Link as={ReachLink} to='/' color='#646464' fontWeight='600'>
						Sustentabilidad
					</Link>
					<Link as={ReachLink} to='/' color='#646464' fontWeight='600'>
						Sobre Prodeman
					</Link>
					<Link as={ReachLink} to='/' color='#646464' fontWeight='600'>
						Trabajá con Nosotros
					</Link>
					<Link as={ReachLink} to='/' color='#646464' fontWeight='600'>
						Educación
					</Link>
					<Stack direction="row">
						<Image src={idioma1} h='35px' />
						<Image src={idioma2} h='35px' />
						<Image src={idioma3} h='35px' />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Navbar;
