import { ME_URL } from "@soroha/entryPoint";
import { userState } from "@soroha/recoil/atoms";
import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";

export default () => {
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  const signOut = () => {
    setUser({ userName: "", teamId: "" });
    localStorage.removeItem("token");
  };

  const fetchMe = async () => {
    const beforeURL = window.location.pathname;
    const url = ME_URL;
    const token = localStorage.getItem("token");
    const res = await fetch(url, {
      method: "get",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `${token}`,
      },
    });
    if (res.ok) {
      const resJSON = await res.json();
      await localStorage.setItem("token", resJSON.user.token);
      await setUser(oldV => ({
        ...oldV,
        userName: resJSON.user.username,
      }));
      history.push(beforeURL.includes("sign") ? "/" : beforeURL);
    }
  };

  const isSignedIn = !!user.userName;

  useLayoutEffect(() => {
    !isSignedIn && fetchMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    signOut,
    isSignedIn,
    fetchMe,
  };
};
