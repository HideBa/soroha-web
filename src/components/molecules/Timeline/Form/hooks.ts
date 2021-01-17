import FormValues from "./index";
import useValidate from "@soroha/components/UtilFunctions/use-form-validate";

export default () => {
  const { validate } = useValidate();
  return { validate };
};
