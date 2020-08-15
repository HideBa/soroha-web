import { LinkType } from "../../atoms/NavLink";

const getLinks = (isPC: boolean): LinkType[] => {
  const links: LinkType[] = isPC
    ? [
        { linkTo: "/", type: "text", text: "Login" },
        { linkTo: "/", type: "text", text: "SignUp" },
      ]
    : [
        { linkTo: "/", type: "icon", icon: "user" },
        { linkTo: "/", type: "icon", icon: "home" },
        { linkTo: "/", type: "icon", icon: "menu" },
      ];
  return links;
};

export default getLinks;
