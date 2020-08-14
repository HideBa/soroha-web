import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Icon from ".";

export default () => {
  storiesOf("atoms/Icons", module).add("user", () => (
    <Icon icon={"user"} size={50} color="green" />
  ));
};
