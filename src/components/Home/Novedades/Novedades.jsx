import React, { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { Stack, Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react';
import Titles from '../../Titles/Titles';
import PrimaryButton from '../../Buttons/PrimaryButton';

const Novedades = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const { loading, error, data } = useFetch(
		'http://localhost:1337/api/noticias?populate=*'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;
	const absoluteUrl = 'http://localhost:1337';

	console.log(
		data.data[0].attributes.imagen.data.attributes.formats.thumbnail.url
	);

	return (
		<Stack w='100%' paddingBlock='7.5rem' align='center'>
			<Stack w='90%' maxW='1400px'>
				<Titles
					title='NOVEDADES'
					subtitle='Las noticias más recientes del rubro y nuestra empresa.'
				/>
				{data && (
					<Stack paddingTop='2.938rem'>
						<Grid
							h='34.375rem'
							templateRows='repeat(2, 1fr)'
							templateColumns={isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'}
							gap={6}
						>
							<GridItem colSpan={1} rowSpan={2}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${
										absoluteUrl +
										data.data[0].attributes.imagen.data.attributes.formats
											.thumbnail.url
									})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
									bgRepeat='no-repeat'
									bgSize='cover'
									bgPos='center'
									justify='flex-end'
									boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
								>
									<Text
										as='b'
										color='white'
										fontSize='1.25em'
										lineHeight={1.1}
										marginBottom='0.52em'
									>
										{data.data[0].attributes.titulo}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
							<GridItem colSpan={1} rowSpan={2}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${
										absoluteUrl +
										data.data[1].attributes.imagen.data.attributes.formats
											.thumbnail.url
									})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
									bgRepeat='no-repeat'
									bgSize='cover'
									bgPos='center'
									justify='flex-end'
									boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
								>
									<Text
										as='b'
										color='white'
										fontSize='1.25em'
										lineHeight={1.1}
										marginBottom='0.52em'
									>
										{data.data[1].attributes.titulo}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
							<GridItem colSpan={1} display={isMobile && 'none'}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${
										absoluteUrl +
										data.data[2].attributes.imagen.data.attributes.formats
											.thumbnail.url
									})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
									bgRepeat='no-repeat'
									bgSize='cover'
									bgPos='top'
									justify='flex-end'
									boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
								>
									<Text
										as='b'
										color='white'
										fontSize='1.25em'
										lineHeight={1.1}
										marginBottom='0.52em'
									>
										{data.data[2].attributes.titulo}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
							<GridItem colSpan={1} display={isMobile && 'none'}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${
										absoluteUrl +
										data.data[3].attributes.imagen.data.attributes.formats
											.thumbnail.url
									})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
									bgRepeat='no-repeat'
									bgSize='cover'
									bgPos='center'
									justify='flex-end'
									boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
								>
									<Text
										as='b'
										color='white'
										fontSize='1.25em'
										lineHeight={1.1}
										marginBottom='0.52em'
									>
										{data.data[3].attributes.titulo}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
						</Grid>
					</Stack>
				)}
			</Stack>
		</Stack>
	);
};

export default Novedades;
