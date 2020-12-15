import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { LinkType } from "../../atoms/NavLink";
import useAuth from "@soroha/components/Auth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isExpenseModalOpen, userState } from "@soroha/recoil/atoms";
import { colors } from "@soroha/components/styles";
import useTeam from "@soroha/components/UtilFunctions/use-team";

export default () => {
  const isPC = useIsPC();
  const { signOut, isSignedIn } = useAuth();
  const { teams, switchTeam } = useTeam();
  const setIsModalOpen = useSetRecoilState(isExpenseModalOpen);
  const openModal = () => setIsModalOpen(true);
  const userLocalState = useRecoilValue(userState);

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
        { linkTo: "/", type: "icon", icon: "user" },
        { linkTo: "/", type: "icon", icon: "home" },
        { linkTo: "/", type: "icon", icon: "menu" },
      ];

  const userName = userLocalState.userName;
  const teamName = userLocalState.teamId;
  return { links, openModal, userName, teamName, teams, switchTeam };
};
