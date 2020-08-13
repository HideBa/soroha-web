import React from "react";
import styled from "@emotion/styled";
import { metrics, colors } from "../../styles";

export type Props = {
  className?: string;
  placeHolder?: string;
};

const FormInput: React.FC<Props> = ({ className, placeHolder }) => {
  return <StyledInput placeholder={placeHolder && placeHolder}></StyledInput>;
};

const StyledInput = styled.input`
  padding: ${metrics.padding.inputMedium};
  background-color: ${colors.whiteBrown};
  color: ${colors.textDarkBrown};
  border-radius: ${metrics.borderRadius.input}px;
  ::placeholder {
    color: ${colors.gray};
  }
`;

export default FormInput;
