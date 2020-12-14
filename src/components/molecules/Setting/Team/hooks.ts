import { userState } from "@soroha/recoil/atoms";
import { ChangeEvent, useEffect, useState } from "react";
import { FaOldRepublic } from "react-icons/fa";
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

  useEffect(() => {
    getTeams?.();
  }, []);

  const handleTeamNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.currentTarget.value);
  };

  const handleTeamCreate = () => createTeam && createTeam(teamName);

  const switchTeam = (teamName: string) => {
    setLocalUserState((old) => {
      return {
        ...old,
        teamId: teamName,
      };
    });
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
