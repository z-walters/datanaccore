import {Spinner} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth';
import React from 'react';

/**
 * return logut action
 * @return  {object}            loading spinner
 */
function Logout() {
  const [loggedOut, setLoggedOut] = useState(false);
  const {logout} = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('RefreshToken');
    setLoggedOut(logout({token: token}));
  }, [loggedOut, router, logout]);

  // router.push("/");
  return <Spinner> </Spinner>;
}

export default Logout;
