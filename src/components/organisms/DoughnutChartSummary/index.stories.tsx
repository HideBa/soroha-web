import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import DoughnutChartSummary from ".";
export default () => {
  storiesOf("organisms/DoughnutChartSummary", module).add("default", () => (
    <DoughnutChartSummary />
  ));
};
