import {ChakraProvider} from '@chakra-ui/react';
import Layout from '../components/Layout';
import '../styles/global.css';
import {createContext} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();


/**
 * return page to be rendered
 * @param   {object} Component  Active page
 * @param   {object} pageProps  Last Name of the User
 * @return  {object}            App to be rendered
 */
function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>

      <Layout>
        <div style={{display: 'none'}}>🕴️</div>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.string,
  pageProps: PropTypes.string,
};

// Uncomment this for blocking data on every single page
// This will remove rendering optimizations and make all pages SSR
//
// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
