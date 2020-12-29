import React from "react";
import Header from "@soroha/components/molecules/Header";
import styled from "@emotion/styled";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import useHooks from "../hooks";

export type Props = {
  // links?: LinkType[];
  userName?: string;
  teamName?: string;
};

const NavBar: React.FC<Props> = ({ userName, teamName }) => {
  const {
    links,
    // teamName,
    // userName,
    teams,
    switchTeam,
    notification,
    onNotify,
    closeNotification,
  } = useHooks(teamName);
  const isPC = useIsPC();
  return (
    <Wrapper className="header-wrapper">
      <Header
        links={links}
        isPC={isPC}
        userName={userName}
        teamName={teamName}
        teams={teams}
        switchTeam={switchTeam}
        notification={notification}
        onNotificationClose={closeNotification}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
export default NavBar;
