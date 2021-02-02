import styled from "@emotion/styled";
import Accordion from "@soroha/components/atoms/Accordion";
import Loading from "@soroha/components/atoms/Loading";
import React from "react";
import Team from "./Team";
import Users from "./User";

export type Props = {
  className?: string;
  loading?: boolean;
  onTeamCreate?: (teamName: string) => void;
  teams?: string[];
  onGetTeams?: () => void;
  users?: string[];
  onAddUserOnTeam?: (username: string) => void;
};

const Setting: React.FC<Props> = ({
  className,
  onTeamCreate,
  loading,
  teams,
  onGetTeams,
  users,
  onAddUserOnTeam,
}) => {
  return loading ? (
    <Loading />
  ) : (
    <Wrapper className={className}>
      <Accordion title="Account">設定項目</Accordion>
      <Accordion title="Team">
        <Team
          onTeamCreate={onTeamCreate}
          teams={teams}
          onGetTeams={onGetTeams}
        />
      </Accordion>
      <Accordion title="Users">
        <Users users={users} onAddUserOnTeam={onAddUserOnTeam} />
      </Accordion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

export default Setting;
