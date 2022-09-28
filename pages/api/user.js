import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

const handler = async (req, res) => {
  // if (req.method !== "GET") {
  //   return res.status(405).send();
  // }

  try {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Not logged in" });
    }
    return res.json({ message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Error" });
  }
};

export default handler;
