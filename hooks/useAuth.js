import {useRouter} from 'next/router';
// import {setCookie, deleteCookie} from 'cookies-next';

const API_GATEWAY_URL ='https://14hezdbl8h.execute-api.us-east-2.amazonaws.com';

const useAuth = () => {
  const router = useRouter();

  const login = (vals, {setSubmitting}) => {
    fetch(API_GATEWAY_URL + '/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(vals),
    })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // setCookie("RefreshToken", JSON.stringify(data.RefreshToken), {
          //   sameSite: "strict",
          //   httpOnly: true,
          // });
          // setCookie("AcessToken", JSON.stringify(data.AccessToken), {
          //   sameSite: "strict",
          //   httpOnly: true,
          // });
          // setCookie("IdToken", JSON.stringify(data.IdToken), {
          //   sameSite: "strict",
          //   httpOnly: true,
          // });
          router.push('/profile');
        })
        .catch(async (err) => {
          const responseData = err;
          if (responseData?.message?.includes('UserNotConfirmedException:')) {
            await fetch('/api/confirm/send', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({email: vals.email}),
            });
            await router.push(
                {
                  pathname: '/confirm',
                  query: {email: vals.email},
                },
                '/confirm',
            );
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
  };

  // TODO refactor this to GET

  const logout = (vals) => {
    fetch(API_GATEWAY_URL + '/api/auth/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(vals),
    })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return;
        })
        .then(() => {
        // deleteCookie("RefreshToken", { sameSite: "strict", httpOnly: true });
        // deleteCookie("AccessToken", { sameSite: "strict", httpOnly: true });
        // deleteCookie("IdToken", { sameSite: "strict", httpOnly: true });
          router.push('/');
          return true;
        })
        .catch((err) => {
          router.push('/login');
          return false;
        })
        .finally(() => {
        // return true;
        });
  };

  // TODO refactor this to GET

  const verify = async (vals) => {
    fetch(API_GATEWAY_URL + '/api/auth/verify', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(vals),
    })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return;
        })
        .then((data) => {
        // localStorage.setItem("AccessToken", data.AccessToken);
        // localStorage.setItem("IdToken", data.IdToken);
        // localStorage.setItem("RefreshToken", data.RefreshToken);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          return true;
        });
  };

  return {
    login,
    logout,
    verify,
  };
};

export default useAuth;
