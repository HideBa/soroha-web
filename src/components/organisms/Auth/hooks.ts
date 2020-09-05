import {
  PASSWORD_MIN_LENGTH,
  SIGN_UP_URL,
} from "@soroha/components/organisms/Auth/config";
import { FormValues } from "./types";
import { useCallback } from "react";

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

  const signIn = useCallback(async (values: FormValues) => {
    const url = "http://localhost:4000/api/v1/signup";
    console.log("---", values);
    console.log();
    console.log("url ---", SIGN_UP_URL);
    console.log("url-----------", url);
    const res = fetch(SIGN_UP_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(values),
    })
      .then(res => {
        console.log(res.json);
      })
      .catch(error => console.log("error---", error));
    // const res = await fetch("http://localhost:4000/api/v1");
    // console.log("---res---", res.json);
  }, []);
  return [validate, signIn];
};
