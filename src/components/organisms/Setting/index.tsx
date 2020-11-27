import React from "react";
import { default as RawSetting } from "@soroha/components/molecules/Setting";

export type Props = {
  className?: string;
};

const Setting: React.FC<Props> = ({ className }) => {
  return <RawSetting />;
};

export default Setting;
