import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { userState } from "@soroha/recoil/atoms";
import { currentUser } from "@soroha/recoil/selectors";
import { useRecoilState, useRecoilValue } from "recoil";
import { LinkType } from "../../atoms/NavLink";

export default () => {
  const isPC = useIsPC();
  const [user, setUser] = useRecoilState(userState);
  const isSignedIn = !!user.userName;
  const signOut = () => setUser({ userName: "", teamId: "" });
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
