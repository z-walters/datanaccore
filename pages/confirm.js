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
import styles from "../styles/ConfirmForm.module.css";
import InputError from "../components/InputError";
import useValidationSchema from "../hooks/useValidationSchema";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import useRegister from "../hooks/useRegister";

function Confirm() {
  const router = useRouter();
  const { username } = router.query;
  const { confirm } = useRegister();
  const { confirmSchema } = useValidationSchema();

  return (
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box bg="gray.300" p={6} w="lg">
          <Formik
            initialValues={{
              username: username,
              code: "",
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
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}

export default Confirm;
