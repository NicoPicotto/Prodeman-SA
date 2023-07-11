import React, { useState, useEffect } from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Header from '../components/Home/Header/Header';
import Novedades from '../components/Home/Novedades/Novedades';

const HomeView = () => {

	return (
		<Stack>
			<Header />
			<Novedades />
		</Stack>
	);
};

export default HomeView;
