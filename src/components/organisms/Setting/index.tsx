import React from "react";
import { default as RawSetting } from "@soroha/components/molecules/Setting";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};

const Setting: React.FC<Props> = ({ className }) => {
  const { loading, createTeam, teams, fetchTeams } = useHooks();

  return (
    <RawSetting
      loading={loading}
      onTeamCreate={createTeam}
      teams={teams}
      onGetTeams={fetchTeams}
    />
  );
};

export default Setting;
