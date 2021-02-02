import React from "react";
import { default as RawSetting } from "@soroha/components/molecules/Setting";
import useHooks from "./hooks";
import useTeam from "@soroha/components/UtilFunctions/use-team";

export type Props = {
  className?: string;
};

const Setting: React.FC<Props> = ({ className }) => {
  const { loading: teamLoading, createTeam, teams, fetchTeams } = useTeam();
  const { loading: userLoading, users } = useHooks();
  const loading = teamLoading || userLoading;
  return (
    <RawSetting
      loading={loading}
      onTeamCreate={createTeam}
      teams={teams}
      onGetTeams={fetchTeams}
      users={users}
    />
  );
};

export default Setting;
