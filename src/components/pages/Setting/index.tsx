import React from "react";
import Setting from "@soroha/components/organisms/Setting";
import MoleculeSettingPage from "@soroha/components/molecules/PageFrame/Setting";
import NavBar from "@soroha/components/organisms/Nav/Header";
import MenuBar from "@soroha/components/organisms/Nav/MenuBar";
import { match } from "react-router";

export type Props = {
  className?: string;
  path?: string;
  userName?: string;
  match?: match;
};

const SettingPage: React.FC<Props> = ({ className, match }) => {
  console.log("match", match);
  return (
    <MoleculeSettingPage
      header={<NavBar />}
      body={<Setting />}
      bottom={<MenuBar />}
    />
  );
};

export default SettingPage;
