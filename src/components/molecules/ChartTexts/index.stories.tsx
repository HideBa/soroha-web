import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import ChartTexts, { PrimarySubChartData } from ".";

const data: PrimarySubChartData = {
  primary: {
    text: "前回精算日以降の支出",
    calculatedValue: 20000,
  },
  sub: {
    text: "一人当たり",
    calculatedValue: 1000,
  },
};
export default () => {
  storiesOf("molecules/ChartTexts", module).add("default", () => (
    <ChartTexts primarySubChartData={data} />
  ));
};
