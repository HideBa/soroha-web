import { FormValues } from "./types";

const PASSWORD_MIN_LENGTH = 8;

export default () => {
  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (values.username === "") {
      errors.username = "* username is required";
    }
    if (values.password.length < PASSWORD_MIN_LENGTH) {
      errors.password = "* password length is too short";
    }
    return errors;
  };

  return { validate };
};
