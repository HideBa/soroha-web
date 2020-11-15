import styled from "@emotion/styled";
import React from "react";

export type Props = {
  className?: string;
};

const Loading: React.FC<Props> = ({ className }) => {
  return <Wrapper>loading</Wrapper>;
};

const Wrapper = styled.div`
  background-color: red;
`;

export default Loading;
