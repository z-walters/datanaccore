import * as yup from "yup";

const useValidationSchema = () => {
  return {
    registerSchema: yup.object().shape({
      email: yup.string().email().required("Enter a valid email address"),
      password: yup.string().required("Enter password"),
      confirm_password: yup
        .string()
        .required("Confirm password")
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),

    loginSchema: yup.object().shape({
      email: yup.string().email().required("Email required for login"),
      password: yup.string().required("Password required for login"),
    }),
  };
};

export default useValidationSchema;
