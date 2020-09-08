import {
  PASSWORD_MIN_LENGTH,
  SIGN_UP_URL,
  SIGN_IN_URL,
} from "@soroha/components/organisms/Auth/config";
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

  const signUpIn = async (
    values: FormValues,
    signType: "SignUp" | "SignIn",
  ) => {
    const data = {
      user: values,
    };
    const res = await fetch(signType === "SignUp" ? SIGN_UP_URL : SIGN_IN_URL, {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then(res => {
        if (res.ok) {
          const resJSON = res.json();
          return resJSON;
        } else {
          throw new Error("failure to fetch");
        }
      })
      .catch(err => {
        console.log("an error occured: ", err);
      });
    return res;
  };

  return { validate, signUpIn };
};
