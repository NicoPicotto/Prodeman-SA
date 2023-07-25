import React, { useState, useEffect } from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import Header from '../components/Home/Header/Header';
import Novedades from '../components/Home/Novedades/Novedades';
import Produccion from '../components/Home/Produccion/Produccion';
import Consumo from '../components/Home/Consumo/Consumo';
import SobreProdeman from '../components/Home/SobreProdeman/SobreProdeman';
import Sustentabilidad from '../components/Home/Sustentabilidad/Sustentabilidad';

const HomeView = () => {

	return (
		<Stack w="100%" gap="0">
			<Header />
			<Novedades />
			<Produccion />
			<Consumo />
			<SobreProdeman />
			<Sustentabilidad />
		</Stack>
	);
};

export default HomeView;
