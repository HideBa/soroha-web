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
import { Notification } from "@soroha/components/molecules/Header";

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

  console.log(userLocalState);
  // teamNameFromURL &&
  //   setUserLocalState({
  //     userName: userLocalState.userName,
  //     teamId: teamNameFromURL,
  //   });

  const closeNotification = () => setNotification(undefined);

  const links: LinkType[] = isPC
    ? isSignedIn
      ? [
          {
            linkTo: `${userLocalState.userName}/settings`,
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
          linkTo: `${userLocalState.userName}/settings`,
          type: "icon",
          icon: "user",
        },
        {
          linkTo: `/${userLocalState.teamId ?? userLocalState.userName}`,
          type: "icon",
          icon: "home",
        },
        { linkTo: "/", type: "icon", icon: "menu" },
      ];

  const userName = userLocalState.userName;
  const teamName = teamNameFromURL ?? userLocalState.teamId;
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
