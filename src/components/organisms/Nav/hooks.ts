import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { LinkType } from "../../atoms/NavLink";
import useAuth from "@soroha/components/Auth";

export default () => {
  const isPC = useIsPC();
  const { signOut, isSignedIn } = useAuth();

  const links: LinkType[] = isPC
    ? isSignedIn
      ? [
          {
            linkTo: "/",
            type: "text",
            text: "SignOut",
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
  return { links };
};
