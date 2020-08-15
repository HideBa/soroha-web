import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Signup from ".";
export default () => {
  storiesOf("organisms/Signup", module).add("default", () => <Signup />);
};
