import React from "react";
import styled from "@emotion/styled";
import { Type } from "@soroha/components/styles/fonts";
import { colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
  isPC?: boolean;
};

const LogoType: React.FC<Props> = ({ className, isPC }) => {
  return <StyledType isPC={isPC}>soroha</StyledType>;
};

const StyledType = styled(Type)<{ isPC?: boolean }>`
  color: ${props => (props.isPC ? colors.whiteBrown : colors.textDarkBrown)};
  margin: auto 0px;
`;

export default LogoType;
