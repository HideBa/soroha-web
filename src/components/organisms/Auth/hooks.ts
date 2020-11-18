import { Sign } from "@soroha/components/molecules/Auth/Sign";
import { SIGN_UP_URL, SIGN_IN_URL } from "@soroha/entryPoint";
import { FormValues } from "../../molecules/Auth/Sign/types";
import { User as UserType, userState } from "@soroha/recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useHistory } from "react-router";

type SignType = Sign;
export default (mode: SignType) => {
  const setUser = useSetRecoilState<UserType>(userState);
  // const user = useRecoilValue(currentUser);
  const history = useHistory();
  const signUpIn = async (values: FormValues) => {
    const data = {
      user: values,
    };
    const res = await fetch(mode === "signup" ? SIGN_UP_URL : SIGN_IN_URL, {
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
          console.log("toke", resJSON.user);
          await localStorage.setItem("token", resJSON.user.token);
          await setUser(oldValue => ({
            ...oldValue,
            userName: resJSON.user.username,
          }));
          history.push("/");
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

  return { signUpIn };
};
