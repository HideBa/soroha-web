import { CALCULATE } from "@soroha/entryPoint";
import { notificationState, userState } from "@soroha/recoil/atoms";
import { useCallback, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default () => {
  const userLocalState = useRecoilValue(userState);
  const setNotification = useSetRecoilState(notificationState);
  const [loading, setLoading] = useState(false);

  const calculate = useCallback(async () => {
    console.log("called");
    setLoading(true);
    if (!userLocalState.teamId) return;
    const token = localStorage.getItem("token");
    await fetch(CALCULATE(userLocalState.teamId), {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          setNotification({ type: "notice", message: "精算が完了しました" });
          return;
        }
        setNotification({ type: "alert", message: "精算に失敗しました。" });
      })
      .catch((err) => {
        console.error("failure to calculate", err);
      });
    //IDEA: redirect to summary page to show calculated result user
    setLoading(false);
  }, [setNotification, userLocalState.teamId]);

  return { calculate, loading };
};
