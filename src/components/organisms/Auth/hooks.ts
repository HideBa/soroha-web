import { PASSWORD_MIN_LENGTH } from "@soroha/components/organisms/Auth/config";

export type ValidationType = "username" | "password" | "submit";

export default () => {
  const validateForm = (validateType: ValidationType, validateText: string) => {
    if (validateType == "password") {
      if (validateText.length < PASSWORD_MIN_LENGTH) {
        return "the length of password must be more than 8 characters";
      }
    }
  };
  return [validateForm];
};
