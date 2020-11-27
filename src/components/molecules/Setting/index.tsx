import styled from "@emotion/styled";
import Accordion from "@soroha/components/atoms/Accordion";
import React from "react";

export type Props = {
  className?: string;
};

const Setting: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper>
      <Accordion title="Account">設定項目</Accordion>
      <Accordion title="Team">チーム設定</Accordion>
      <Accordion title="sample" disabled>
        チーム設定
      </Accordion>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Setting;
