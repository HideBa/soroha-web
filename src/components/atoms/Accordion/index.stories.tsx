import React from "react";
import { storiesOf } from "@storybook/react";

import Component from ".";
import styled from "@emotion/styled";

const content = {
  title: "test",
  content: "this is the contents of the test",
};
export default () => {
  storiesOf("atoms/Accordion", module).add("default", () => (
    <Component {...content}>
      <Sample>this is the contents </Sample>
    </Component>
  ));
};

const Sample = styled.div``;
