import Nav from "./Nav";
import Head from "next/head";

const Layout = ({ children }) => {
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
        {/* <link rel="icon" type="image/ico" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/ico" sizes="16x16" href="/images/favicon-16x16.png"/> */}
      </Head>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
