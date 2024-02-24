import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .required("Email is Reqquired")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
  // gender: yup.string().required().oneOf(['male']),
});

export default registerSchema;
