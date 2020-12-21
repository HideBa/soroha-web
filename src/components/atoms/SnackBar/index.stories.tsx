import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import InfoBar from ".";

export default () => {
  storiesOf("atoms/InforBar", module).add("default", () => <InfoBar />);
};
