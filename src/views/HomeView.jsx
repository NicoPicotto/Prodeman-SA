import React, { useState, useEffect } from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Header from '../components/Home/Header/Header';
import Novedades from '../components/Home/Novedades/Novedades';
import Produccion from '../components/Home/Produccion/Produccion';
import Consumo from '../components/Home/Consumo/Consumo';

const HomeView = () => {

	return (
		<Stack w="100%">
			<Header />
			<Novedades />
			<Produccion />
			<Consumo />
		</Stack>
	);
};

export default HomeView;
