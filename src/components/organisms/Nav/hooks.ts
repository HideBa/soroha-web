import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { LinkType } from "../../atoms/NavLink";
import useAuth from "@soroha/components/Auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isExpenseModalOpen,
  notificationState,
  userState,
} from "@soroha/recoil/atoms";
import useTeam from "@soroha/components/UtilFunctions/use-team";
import { Notification } from "@soroha/components/molecules/Header";
import { useEffect } from "react";

export default (teamNameFromURL?: string) => {
  const isPC = useIsPC();
  const { signOut, isSignedIn } = useAuth();
  const { teams, switchTeam } = useTeam();
  const setIsModalOpen = useSetRecoilState(isExpenseModalOpen);
  const openModal = () => setIsModalOpen(true);
  const [userLocalState, setUserLocalState] = useRecoilState(userState);
  const [notification, setNotification] = useRecoilState(notificationState);
  const onNotify = (notification: Notification) => {
    setNotification(notification);
  };

  // teamNameFromURL &&
  //   setUserLocalState({
  //     userName: userLocalState.userName,
  //     teamId: teamNameFromURL,
  //   });

  const closeNotification = () => setNotification(undefined);

  useEffect(() => {
    if (!teamNameFromURL) return;
    setUserLocalState((oldState) => ({ ...oldState, teamId: teamNameFromURL }));
  }, [setUserLocalState, teamNameFromURL]);

  console.log("local state----", userLocalState);
  const links: LinkType[] = isPC
    ? isSignedIn
      ? [
          {
            linkTo: `settings/${userLocalState.userName}`,
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
        {
          linkTo: `settings/${userLocalState.userName}`,
          type: "icon",
          icon: "user",
        },
        {
          linkTo: userLocalState.teamId ? `/${userLocalState.teamId}` : "/",
          type: "icon",
          icon: "home",
        },
        { linkTo: "/", type: "icon", icon: "menu" },
      ];

  // const userName = userLocalState.userName;
  // const teamName = teamNameFromURL ?? userLocalState.teamId;
  return {
    links,
    openModal,
    // userName,
    // teamName,
    teams,
    switchTeam,
    notification,
    onNotify,
    closeNotification,
  };
};
