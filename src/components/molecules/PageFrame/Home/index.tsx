import styled from "@emotion/styled";
import { metrics } from "@soroha/components/styles";
import React from "react";

export type Props = {
  className?: string;
  header?: React.ReactNode;
  bodyLeft?: React.ReactNode;
  bodyRight?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

const Home: React.FC<Props> = ({
  className,
  header,
  bodyLeft,
  bodyRight,
  footer,
  children,
}) => {
  return (
    <Wrapper>
      {header}
      <Body>
        {bodyLeft}
        {bodyRight}
      </Body>
      {footer}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: ${metrics.breakPoint.tabletOrSP}px) {
    flex-direction: column;
    align-items: center;
    padding: ${metrics.padding.body};
  }
`;

export default Home;
