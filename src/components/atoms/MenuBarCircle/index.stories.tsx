import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import MenuBarCircle from ".";
export default () => {
  storiesOf("atoms/MenuBarCircle", module).add("default", () => (
    <MenuBarCircle />
  ));
};
