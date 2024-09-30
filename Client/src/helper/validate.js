import { toast } from "react-hot-toast";

const emailValidate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export const checkoutDetailsValidate = async (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = toast.error("Enter your Name ...!");
  } else if (!values.company) {
    errors.company = toast.error("Enter your Company Name ...!");
  } else if (!values.email) {
    errors.email = toast.error("Enter your Email ...!");
  } else if (!values.phone) {
    errors.phone = toast.error("Enter your Phone Number ...!");
  } else if (!values.state) {
    errors.state = toast.error("Enter your State ...!");
  } else if (!values.address) {
    errors.address = toast.error("Enter your Address ...!");
  } else if (!values.city) {
    errors.city = toast.error("Enter your City ...!");
  } else if (!values.postalCode) {
    errors.postalCode = toast.error("Enter your Postal Code ...!");
  } else if (values.email) {
    const emailErrors = emailValidate({ email: values.email });
    if (emailErrors.email) {
      errors.email = toast.error(emailErrors.email);
    }
  }

  return errors;
};
