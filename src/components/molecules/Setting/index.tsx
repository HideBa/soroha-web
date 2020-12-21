import styled from "@emotion/styled";
import Accordion from "@soroha/components/atoms/Accordion";
import Loading from "@soroha/components/atoms/Loading";
import React from "react";
import Team from "./Team";

export type Props = {
  className?: string;
  loading?: boolean;
  onTeamCreate?: (teamName: string) => void;
  teams?: string[];
  onGetTeams?: () => void;
};

const Setting: React.FC<Props> = ({
  className,
  onTeamCreate,
  loading,
  teams,
  onGetTeams,
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
      <Accordion title="sample" disabled>
        チーム設定
      </Accordion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

export default Setting;
