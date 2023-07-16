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
import idioma4 from '../../assets/idioma4.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const { t, i18n } = useTranslation();

	return (
		<Stack gap='0'>
			<Stack
				bgColor='secundario'
				w='100%'
				paddingInline='15em'
				paddingBlock='0.63em'
				direction='row'
				justify='flex-end'
				align='center'
				gap='1.25em'
			>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='1.3em' h='1.3em' src={linkedin} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='1.3em' h='1.3em' src={facebook} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='1.3em' h='1.3em' src={instagram} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='1.3em' h='1.3em' src={twitter} />
				</Link>
				<Link as={ReachLink} to='/' color='white'>
					<Image w='1.3em' h='1.3em' src={youtube} />
				</Link>
				<PrimaryButton text={t('navbar.agendar')} />
			</Stack>
			<Stack
				bgColor='white'
				w='100%'
				align='center'
				direction='row'
				justify='space-between'
				paddingInline='15em'
			>
				<Stack>
					<Image w='12.76em' src={logo} />
				</Stack>
				<Stack direction='row' align='center' gap='3.85em'>
					<Stack direction='row' gap='1.56em'>
						<Link
							as={ReachLink}
							to='/'
							color='#646464'
							fontSize='0.94em'
							fontWeight='600'
						>
							{t('navbar.productos')}
						</Link>
						<Link
							as={ReachLink}
							to='/'
							fontSize='0.94em'
							color='#646464'
							fontWeight='600'
						>
							{t('navbar.sustentabilidad')}
						</Link>
						<Link
							as={ReachLink}
							to='/'
							fontSize='0.94em'
							color='#646464'
							fontWeight='600'
						>
							{t('navbar.sobreProdeman')}
						</Link>
						<Link
							as={ReachLink}
							to='/'
							fontSize='0.94em'
							color='#646464'
							fontWeight='600'
						>
							{t('navbar.trabaja')}
						</Link>
						<Link
							as={ReachLink}
							to='/'
							fontSize='0.94em'
							color='#646464'
							fontWeight='600'
						>
							{t('navbar.educacion')}
						</Link>
					</Stack>
					<Stack>
						<Stack direction='row'>
							<Image
								cursor='pointer'
								src={idioma1}
								w='1.82em'
								onClick={() => i18n.changeLanguage('en')}
							/>
							<Image
								cursor='pointer'
								src={idioma2}
								w='1.82em'
								onClick={() => i18n.changeLanguage('pr')}
							/>
							<Image
								cursor='pointer'
								src={idioma3}
								w='1.82em'
								onClick={() => i18n.changeLanguage('zh')}
							/>
							<Image
								cursor='pointer'
								src={idioma4}
								w='1.82em'
								onClick={() => i18n.changeLanguage('es')}
							/>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Navbar;
