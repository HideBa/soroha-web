import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Form from ".";

export default () => {
  storiesOf("organisms/Form", module).add("default", () => (
    <Form />
  ));
};
