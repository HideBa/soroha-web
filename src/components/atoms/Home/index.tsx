import styled from "@emotion/styled";
import { metrics } from "@soroha/components/styles";
import React from "react";

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Home: React.FC<Props> = ({ className, children }) => {
  return <Body>{children}</Body>;
};

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
