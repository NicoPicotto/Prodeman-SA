import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/contacto' element={<ContactView />} />
				</Routes>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
