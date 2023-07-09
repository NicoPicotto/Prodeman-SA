import React from 'react';
import { Stack, Link } from '@chakra-ui/react';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
	return (
		<Stack bgColor='primario' w='100%' p='1em' direction='row'>
			<Link as={ReachLink} to='/' color='white'>
				Link 1
			</Link>
			<Link as={ReachLink} to='/contacto' color='white'>
				Link 1
			</Link>
			<Link as={ReachLink} color='white'>
				Link 1
			</Link>
		</Stack>
	);
};

export default Navbar;
