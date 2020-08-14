import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Header from ".";

export default () => {
  storiesOf("molecules/Header", module).add("default", () => <Header />);
};
