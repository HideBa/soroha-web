import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import CalculateSubmit from ".";
export default () => {
  storiesOf("molecules/CalculateSubmit", module).add("default", () => (
    <CalculateSubmit />
  ));
};
