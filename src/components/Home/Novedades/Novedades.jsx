import React, { useState, useEffect } from 'react';
import { Stack, Grid, GridItem, Text } from '@chakra-ui/react';
import Titles from '../../Titles/Titles';
import PrimaryButton from '../../Buttons/PrimaryButton';

const Novedades = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				const lastFourItems = data.slice(-4);
				setData(lastFourItems);
			})
			.catch((error) => {
				console.error('There was an error!', error);
			});
	}, []);

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
							templateColumns='repeat(3, 1fr)'
							gap={6}
						>
							<GridItem colSpan={1} rowSpan={2}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${data[0].thumbnailUrl})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
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
										{data[0].title}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
							<GridItem colSpan={1} rowSpan={2}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${data[1].thumbnailUrl})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
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
										{data[1].title}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
							<GridItem colSpan={1}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${data[2].thumbnailUrl})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
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
										{data[2].title}
									</Text>
									<PrimaryButton text='¡Ver más!' />
								</Stack>
							</GridItem>
							<GridItem colSpan={1}>
								<Stack
									bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.64%, rgba(114, 73, 14, 0.75) 100%), url(${data[3].thumbnailUrl})`}
									bgBlendMode='multiply'
									height='100%'
									borderRadius='20px 20px 0 20px'
									p='2.08em'
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
										{data[3].title}
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
