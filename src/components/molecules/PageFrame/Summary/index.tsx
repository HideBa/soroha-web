import styled from "@emotion/styled";
import React from "react";

export type Props = {
  className?: string;
  header?: React.ReactNode;
  timeline?: React.ReactNode;
  chart?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: React.ReactNode;
};

const SummaryPage: React.FC<Props> = ({
  className,
  header,
  children,
  timeline,
  chart,
  bottom,
}) => {
  return (
    <Wrapper>
      {header}
      <UpperWrapper>
        <Left>{timeline}</Left>
        <Right>{chart}</Right>
      </UpperWrapper>
      <Content>{children}</Content>
      {bottom}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperWrapper = styled.div`
  display: flex;
`;

const Right = styled.div``;

const Left = styled.div``;

const Content = styled.div``;

export default SummaryPage;
