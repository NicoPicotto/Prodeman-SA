import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const Titles = ({ title, subtitle }) => {
	return (
		<Stack
			color='secundario'
			borderLeft='0.63em solid #B91E13'
			paddingLeft='1.04em'
		>
			<Heading lineHeight='101.1%' fontSize='2.6em'>
				{title}
			</Heading>
			<Text lineHeight='101.1%' fontSize='1.25em'>
				{subtitle}
			</Text>
		</Stack>
	);
};

export default Titles;
