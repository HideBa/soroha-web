import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Signin from ".";
export default () => {
  storiesOf("organisms/Signin", module).add("default", () => <Signin />);
};
