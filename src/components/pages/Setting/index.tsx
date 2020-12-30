import React from "react";
import Setting from "@soroha/components/organisms/Setting";
import MoleculeSettingPage from "@soroha/components/molecules/PageFrame/Setting";
import NavBar from "@soroha/components/organisms/Nav/Header";
import MenuBar from "@soroha/components/organisms/Nav/MenuBar";
import { match } from "react-router";
import AuthenticationRequiredPage from "../AuthenticationRequiredPage";

type SettingsMatch = {
  teamName?: string;
};
export type Props = {
  className?: string;
  path?: string;
  userName?: string;
  match?: match<SettingsMatch>;
};

const SettingPage: React.FC<Props> = ({ className, match }) => {
  const teamName = match?.params.teamName;
  return (
    <AuthenticationRequiredPage>
      <MoleculeSettingPage
        className={className}
        header={<NavBar teamName={teamName} />}
        body={<Setting />}
        bottom={<MenuBar />}
      />
    </AuthenticationRequiredPage>
  );
};

export default SettingPage;
