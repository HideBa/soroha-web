import React from "react";
import styled from "@emotion/styled";
import { Type } from "@soroha/components/styles/fonts";
import { colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
};

const LogoType: React.FC<Props> = ({ className }) => {
  return <StyledType>soroha</StyledType>;
};

const StyledType = styled(Type)`
  color: ${colors.whiteBrown};
  margin: auto 0px;
`;

export default LogoType;
