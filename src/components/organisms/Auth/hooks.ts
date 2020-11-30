import { Sign } from "@soroha/components/molecules/Auth/Sign";
import { SIGN_UP_URL, SIGN_IN_URL } from "@soroha/entryPoint";
import { FormValues } from "../../molecules/Auth/Sign/types";
import { User as UserType, userState } from "@soroha/recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useHistory } from "react-router";
import { useState } from "react";

type SignType = Sign;
export default (mode: SignType, setErr: (err: string | undefined) => void) => {
  const [loading, setLoading] = useState(false);
  const setUser = useSetRecoilState<UserType>(userState);
  const history = useHistory();
  const signUpIn = async (values: FormValues) => {
    setLoading(() => true);
    const data = {
      user: values,
    };
    await fetch(mode === "signup" ? SIGN_UP_URL : SIGN_IN_URL, {
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
      .then(async res => {
        if (res.ok) {
          const resJSON = await res.json();
          await localStorage.setItem("token", resJSON.user.token);
          await setUser(oldValue => ({
            ...oldValue,
            userName: resJSON.user.username,
            teamId: resJSON.user.username,
          }));
          history.push("/");
          setErr(undefined);
          setLoading(false);
        } else {
          setErr("username or login password is incorrect");
          setLoading(false);
        }
      })
      .catch(err => {
        console.log("an error occured: ", err);
      });
  };

  return { signUpIn, loading };
};
