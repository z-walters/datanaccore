import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import { Auth } from "aws-amplify";

const { COGNITO_REGION, COGNITO_APP_CLIENT_ID } = process.env;

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send();
  }
  const params = {
    password: req.body.password,
    username: req.body.email,
    attributes: {
      email: req.body.email,
    },
  };

  const auth = await Auth.signUp(params);

  const cognitoClient = new CognitoIdentityProviderClient({
    region: COGNITO_REGION,
  });

  const signUpCommand = SignUpCommand(params);

  try {
    const response = await cognitoClient.send(SignUpCommand);
    return res.status(response["$metadata"].httpStatusCode).send();
  } catch (err) {
    console.log(err);
    return res
      .status(err["$metadata"].httpStatusCode)
      .json({ message: err.to_string() });
  }
};

export default handler;
