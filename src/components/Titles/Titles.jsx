import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const Titles = ({ title, subtitle, color }) => {
	return (
		<Stack
			color={color ? color : "secundario"}
			borderLeft='0.75rem solid #B91E13'
			paddingLeft='1.25rem'
		>
			<Heading lineHeight='101.1%' fontSize='3.125rem'>
				{title}
			</Heading>
			<Text lineHeight='101.1%' fontSize='1.5rem'>
				{subtitle}
			</Text>
		</Stack>
	);
};

export default Titles;
