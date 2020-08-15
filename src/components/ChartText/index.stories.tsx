import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import ChartText from ".";
export default () => {
  storiesOf("atoms/ChartText", module).add("default", () => (
    <ChartText text="前回精算日以降の支出" calculatedValue={5000} />
  ));
};
