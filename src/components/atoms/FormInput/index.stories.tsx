import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Component from ".";

export default () => {
  storiesOf("atom", module).add("default", () => <Component />);
};
