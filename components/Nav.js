import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import router, {useRouter} from 'next/router';
import {Link as ChakraLink} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types';


const HighlightedLink = ({page}) => {
  // const useRouter = useRouter();
  const href = '/' + (page == 'home' ? '' : page);
  const isActive = useRouter.asPath === href;

  return (
    <Link href={href} router={router} passHref>
      <ChakraLink
        className={`${styles.link} ${isActive ? styles.highlightedLink : ''}`}
      >
        {page.replace('-', ' ')}
      </ChakraLink>
    </Link>
  );
};

const loggedOutPageRoutes = [
  'home',
  'about',
  'blog',
  'contact-us',
  'login',
  'register',
];


const loggedInPageRoutes = [
  'home',
  'about',
  'blog',
  'contact-us',
  'logout',
  'profile',
];

const Nav = () => {
  // if (localStorage.getItem("AccessToken")) {
  //   const page_routes = logged_in_page_routes;
  // }
  const [token, setToken] = useState(null);

  useEffect(() => {
    // const logged_out_page_routes = [
    //   "home",
    //   "about",
    //   "blog",
    //   "contact-us",
    //   "login",
    //   "register",
    // ];

    // const logged_in_page_routes = [
    //   "home",
    //   "about",
    //   "blog",
    //   "contact-us",
    //   "logout",
    //   "profile",
    // ];
    setToken(localStorage.getItem('AccessToken'));
    // console.log(token);

    // if (token) {
    //   setPageRoutes(logged_in_page_routes);
    // } else {
    //   setPageRoutes(logged_out_page_routes);
    // }
  }, [token]);

  // if (pageRoutes === []) {
  //   return <Spinner></Spinner>;
  // }

  return (
    <nav>
      {token ?
        loggedInPageRoutes.map((page, i) => {
          return <HighlightedLink key={'nav-' + i} page={page} />;
        }) :
        loggedOutPageRoutes.map((page, i) => {
          return <HighlightedLink key={'nav-' + i} page={page} />;
        })}
    </nav>
  );
};

HighlightedLink.propTypes = {
  page: PropTypes.string,
};


export default Nav;
