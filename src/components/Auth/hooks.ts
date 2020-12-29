import { ME_URL } from "@soroha/entryPoint";
import { notificationState, userState } from "@soroha/recoil/atoms";
import { useCallback, useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";

export default () => {
  const [user, setUser] = useRecoilState(userState);
  const setNotification = useSetRecoilState(notificationState);
  const history = useHistory();

  const signOut = useCallback(() => {
    try {
      setUser({ userName: "", teamId: "" });
      localStorage.removeItem("token");
      setNotification({ type: "notice", message: "ログアウトしました" });
    } catch {
      setNotification({ type: "alert", message: "エラーが発生しました" });
    }
  }, [setNotification, setUser]);

  const fetchMe = useCallback(async () => {
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
      await setUser((oldV) => ({
        ...oldV,
        userName: resJSON.user.username,
        teamId: resJSON.user.username,
      }));
      history.push(
        beforeURL.includes("sign") ? `/${resJSON.user.username}` : beforeURL,
      );
    }
  }, [history, setUser]);

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
