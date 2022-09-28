import { Spinner, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function User() {
  const { data: session } = useSession();
  const router = useRouter();
  // const [content, setContent] = useState(null);

  useEffect(() => {
    if (!session) {
      router.push("/login");
      return;
    }

    fetch;
  });

  if (session) {
    return (
      <>
        <Text variant="h1">User Page</Text>
      </>
    );
  }

  return (
    <>
      <Spinner />
    </>
  );
}

export default User;
