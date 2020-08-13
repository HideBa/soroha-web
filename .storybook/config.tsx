import React from "react";
import { configure, addDecorator } from "@storybook/react";

import GlobalStyles from "../src/style";

const req = require.context("../src", true, /\.?stories\.tsx?$/);

addDecorator(stroyFn => (
  <>
    {stroyFn()}
    <GlobalStyles />
  </>
));

configure(() => {
  req.keys().forEach(filename => req(filename).default());
}, module);
