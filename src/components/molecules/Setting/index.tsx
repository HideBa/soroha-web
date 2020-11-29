import styled from "@emotion/styled";
import Accordion from "@soroha/components/atoms/Accordion";
import Loading from "@soroha/components/atoms/Loading";
import React from "react";
import Team from "./Team";

export type Props = {
  className?: string;
  loading?: boolean;
  onTeamCreate?: (teamName: string) => void;
};

const Setting: React.FC<Props> = ({ className, onTeamCreate, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <Wrapper className={className}>
      <Accordion title="Account">設定項目</Accordion>
      <Accordion title="Team">
        <Team onTeamCreate={onTeamCreate} />
      </Accordion>
      <Accordion title="sample" disabled>
        チーム設定
      </Accordion>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Setting;
