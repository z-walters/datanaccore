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
 * return confirmation page
 * @return  {object}            confirmation page
 */
function Confirm() {
  const {confirm} = useRegister();
  const {confirmSchema} = useValidationSchema();

  return (
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box bg="gray.300" p={6} w="lg">
          <Formik
            initialValues={{
              email: '',
              confrimation_code: '',
              // username: username,
            }}
            validatioSchema={confirmSchema}
            onSubmit={confirm}
            validateOnBlur={false}
            validateOnChange={false}
            validateOnMount={false}
          >
            {({
              isSubmitting,
              errors,
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              handleMount,
            }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={6} align="flex-start">
                  <FormControl>
                    <FormLabel html="confirmation-code">
                      Confirmation Code
                    </FormLabel>
                    <Field
                      id="confirmation_code"
                      as={Input}
                      name="confirmation_code"
                      type="text"
                      variant="filled"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.confirmation_code}
                      placeholder="Enter Code Here"
                    ></Field>
                    <InputError>{errors?.confrimation_code}</InputError>
                  </FormControl>
                  <FormControl>
                    <FormLabel html="email">Email</FormLabel>
                    <Field
                      id="email"
                      as={Input}
                      name="email"
                      type="text"
                      variant="filled"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.email}
                      placeholder="Enter Code Here"
                    ></Field>
                    <InputError>{errors?.email}</InputError>
                  </FormControl>
                </VStack>
                <Button
                  type="submit"
                  colorScheme="gray"
                  width="full"
                  marginTop={12}
                  isSubmitting={isSubmitting}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}

export default Confirm;
