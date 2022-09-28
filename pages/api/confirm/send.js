import {
  CognitoIdentityProviderClient,
  ResendConfirmationCodeCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const { COGNITO_REGION, COGNITO_CLIENT_APP_ID } = process.env;

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send();
  }

  const params = {
    ClientId: COGNITO_CLIENT_APP_ID,
    Username: req.body.email,
  };

  const cognitoClient = new CognitoIdentityProviderClient({
    region: COGNITO_REGION,
  });

  const resendConfirmationCodeCommand = new ResendConfirmationCodeCommand(
    params
  );

  try {
    const response = await cognitoClient.send(resendConfirmationCodeCommand);
    console.log(response);
    return res.status(response["$metadata"].httpStatusCode).send();
  } catch (err) {
    console.log(err);
    return res
      .status(err["$metadata"].httpStatusCode)
      .json({ message: err.to_string() });
  }
};

export default handler;
