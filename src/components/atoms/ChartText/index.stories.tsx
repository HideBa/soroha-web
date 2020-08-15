import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import ChartText from ".";

const data = {
  text: "前回精算日以降の支出",
  calculatedValue: 5000,
};
export default () => {
  storiesOf("atoms/ChartText", module).add("default", () => (
    <ChartText chartTextData={data} />
  ));
};
