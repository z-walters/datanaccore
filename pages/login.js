import { Field, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Box,
  Flex,
  VStack,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
// import styles from "../styles/LoginForm.module.css";
import InputError from "../components/InputError";
import useValidationSchema from "../hooks/useValidationSchema";
import useAuth from "../hooks/useAuth";

function Login() {
  const { loginSchema } = useValidationSchema();
  const { login } = useAuth();
  return (
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box bg="gray.300" p={6} w="lg">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={login}
            validateOnBlur={false}
            validateOnChange={false}
            validateOnMount={false}
          >
            {({
              isSubmitting,
              errors,
              values,
              handleSubmit,
              handleBlur,
              handleChange,
            }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={6} align="flex-start">
                  <FormControl>
                    <FormLabel html="email">Email</FormLabel>
                    <Field
                      id="email"
                      as={Input}
                      name="email"
                      type="email"
                      variant="filled"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email}
                      placeholder="Email"
                    ></Field>
                    <InputError>{errors?.email}</InputError>
                  </FormControl>

                  <FormControl>
                    <FormLabel html="password">Password</FormLabel>
                    <Field
                      id="password"
                      as={Input}
                      name="password"
                      type="password"
                      variant="filled"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.password}
                      placeholder="Password"
                    ></Field>
                    <InputError>{errors?.password}</InputError>
                  </FormControl>
                </VStack>
                <Button
                  type="submit"
                  colorScheme="gray"
                  width="full"
                  marginTop={12}
                  isSubmitting={isSubmitting}
                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}

export default Login;
