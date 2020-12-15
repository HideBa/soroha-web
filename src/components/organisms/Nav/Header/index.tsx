import React from "react";
import Header from "@soroha/components/molecules/Header";
import styled from "@emotion/styled";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import useHooks from "../hooks";

export type Props = {
  // links?: LinkType[];
};

const NavBar: React.FC<Props> = () => {
  const { links, teamName, userName, teams, switchTeam } = useHooks();
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
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
export default NavBar;
