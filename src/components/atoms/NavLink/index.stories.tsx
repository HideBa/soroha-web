import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Link, { LinkType } from ".";

const link: LinkType = {
  linkTo: "/",
  type: "text",
  text: "mypage",
};
export default () => {
  storiesOf("atoms/Link", module).add("default", () => <Link link={link} />);
};
