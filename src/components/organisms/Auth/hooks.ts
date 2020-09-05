import { PASSWORD_MIN_LENGTH } from "@soroha/components/organisms/Auth/config";
import { FormValues } from "./types";

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
  return [validate];
};
