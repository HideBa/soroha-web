import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import FormInput from ".";

export default () => {
  storiesOf("atoms/FormInput", module).add("default", () => (
    <FormInput placeHolder="test dkjaflktest" />
  ));
};
