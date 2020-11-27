import React from "react";
import Setting from "@soroha/components/organisms/Setting";

export type Props = {
  className?: string;
};

const SettingPage: React.FC<Props> = ({ className }) => {
  return <Setting />;
};

export default SettingPage;
