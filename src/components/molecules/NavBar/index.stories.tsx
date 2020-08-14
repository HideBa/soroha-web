import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import NavBar from ".";
import { LinkType } from "@soroha/components/atoms/NavLink";

const links: LinkType[] = [
  {
    linkTo: "/",
    type: "icon",
    icon: "user",
  },
  {
    linkTo: "/",
    type: "icon",
    icon: "home",
  },
];

export default () => {
  storiesOf("molecules/NavBar", module).add("default", () => (
    <NavBar links={links} />
  ));
};
