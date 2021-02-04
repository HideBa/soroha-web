import { userState } from "@soroha/recoil/atoms";
import { ChangeEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";

type Props = {
  createTeam?: (teamName: string) => void;
  getTeams?: () => void;
};

export default ({ createTeam, getTeams }: Props) => {
  const [isClosableBoxVisible, toggleClosableBox] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [localUserState, setLocalUserState] = useRecoilState(userState);
  const currentTeam = localUserState.teamId;
  const histroy = useHistory();

  useEffect(() => {
    let unmounted = false;
    !unmounted && getTeams?.();
    return () => {
      unmounted = true;
    };
  }, []);

  const handleTeamNameChange = (teamName: string) => {
    setTeamName(teamName);
  };

  const handleTeamCreate = () => createTeam && createTeam(teamName);

  const switchTeam = (teamName: string) => {
    setLocalUserState((old) => {
      return {
        ...old,
        teamId: teamName,
      };
    });
    histroy.push(teamName);
  };

  return {
    isClosableBoxVisible,
    toggleClosableBox,
    teamName,
    handleTeamNameChange,
    handleTeamCreate,
    switchTeam,
    currentTeam,
  };
};
