import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { LinkType } from "../../atoms/NavLink";
import useAuth from "@soroha/components/Auth";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isExpenseModalOpen,
  notificationState,
  userState,
} from "@soroha/recoil/atoms";
import useTeam from "@soroha/components/UtilFunctions/use-team";
import { useEffect, useState } from "react";
import { Notification } from "@soroha/components/molecules/Header";

export default () => {
  const isPC = useIsPC();
  const { signOut, isSignedIn } = useAuth();
  const { teams, switchTeam } = useTeam();
  const setIsModalOpen = useSetRecoilState(isExpenseModalOpen);
  const openModal = () => setIsModalOpen(true);
  const userLocalState = useRecoilValue(userState);
  const [notification, setNotification] = useRecoilState(notificationState);

  const onNotify = (notification: Notification) => {
    setNotification(notification);
  };

  const closeNotification = () => setNotification(undefined);

  const links: LinkType[] = isPC
    ? isSignedIn
      ? [
          {
            linkTo: "/settings",
            type: "both",
            text: "Setting",
            icon: "setting",
            color: undefined,
          },
          {
            linkTo: "/",
            type: "both",
            text: "SignOut",
            icon: "signOut",
            onClick: signOut,
          },
        ]
      : [
          { linkTo: "/signin", type: "text", text: "SignIn" },
          { linkTo: "/signup", type: "text", text: "SignUp" },
        ]
    : [
        { linkTo: "/settings", type: "icon", icon: "user" },
        { linkTo: "/", type: "icon", icon: "home" },
        { linkTo: "/", type: "icon", icon: "menu" },
      ];

  const userName = userLocalState.userName;
  const teamName = userLocalState.teamId;
  return {
    links,
    openModal,
    userName,
    teamName,
    teams,
    switchTeam,
    notification,
    onNotify,
    closeNotification,
  };
};
