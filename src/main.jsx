import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './theme/index.js';
import { Layout, Navbar } from './components';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />

    <ChakraProvider theme={theme}>
      <Navbar />
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
