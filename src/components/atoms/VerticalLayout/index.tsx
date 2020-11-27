import styled from "@emotion/styled";
import React from "react";

export type Props = {
  className?: string;
};

const VerticalLayout: React.FC<Props> = ({ className }) => {
  return <Wrapper className={className}></Wrapper>;
};

const Wrapper = styled.div``;

export default VerticalLayout;
