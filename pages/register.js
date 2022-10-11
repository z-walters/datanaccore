import {Field, Formik} from 'formik';
import {
  FormControl,
  FormLabel,
  Box,
  Flex,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import InputError from '../components/InputError';
import useValidationSchema from '../hooks/useValidationSchema';
import useRegister from '../hooks/useRegister';
import React from 'react';


/**
 * return register page
 * @return  {object}            registration page
 */
function Register() {
  const {registerSchema} = useValidationSchema();
  const {register} = useRegister();
  return (
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box bg="gray.300" p={6} w="lg">
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirm_password: '',
            }}
            validationSchema={registerSchema}
            onSubmit={register}
            validateOnMount={false}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({
              isSubmitting,
              errors,
              values,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      id="email"
                      as={Input}
                      name="email"
                      type="text"
                      variant="filled"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email}
                      placeholder="Email"
                    ></Field>
                    <InputError>{errors?.email}</InputError>
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
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

                  <FormControl>
                    <FormLabel htmlFor="confirm_password">
                      Confirm Password
                    </FormLabel>
                    <Field
                      id="confirm_password"
                      as={Input}
                      name="confirm_password"
                      type="password"
                      variant="filled"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.confirm_password}
                      placeholder="Confirm Password"
                    ></Field>
                    <InputError>{errors?.confirm_password}</InputError>
                  </FormControl>
                </VStack>
                <Button
                  type="submit"
                  colorScheme="gray"
                  width="full"
                  marginTop={12}
                  isSubmitting={isSubmitting}
                >
                  Register
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}

export default Register;
