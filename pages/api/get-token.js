import { getToken } from "next-auth/jwt";

const handler = async (req, res) => {
  const token = await getToken({ req });
  if (!token) {
    res.status(401);
  }

  console.log("JWT: ", JSON.stringify(token, null, 2));

  res.end();
};

export default handler;
