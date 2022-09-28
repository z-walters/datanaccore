import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();

  const login = (vals, { setSubmitting }) => {
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vals),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch(async (err) => {
        const responseData = await err.json();
        if (responseData?.message?.includes("UserNotConfirmedException:")) {
          await fetch("/api/confirm/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: vals.email }),
          });
          await router.push(
            {
              pathname: "/confirm",
              query: { email: vals.email },
            },
            "/confirm"
          );
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return {
    login,
  };
};

export default useAuth;
