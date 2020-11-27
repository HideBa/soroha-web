import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { LinkType } from "../../atoms/NavLink";
import useAuth from "@soroha/components/Auth";
import { useSetRecoilState } from "recoil";
import { isExpenseModalOpen } from "@soroha/recoil/atoms";
import { colors } from "@soroha/components/styles";

export default () => {
  const isPC = useIsPC();
  const { signOut, isSignedIn } = useAuth();
  const setIsModalOpen = useSetRecoilState(isExpenseModalOpen);
  const openModal = () => setIsModalOpen(true);

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
  return { links, openModal };
};
