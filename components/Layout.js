import Nav from './Nav';
import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';


const Layout = ({children}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/ico"
          sizes="64x64"
          href="/images/favicon.ico"
        />
      </Head>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
