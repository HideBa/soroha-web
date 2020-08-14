import React from "react";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
  placeHolder?: string;
};

const FormInput: React.FC<Props> = ({ className, placeHolder }) => {
  //TODO: must implement validation for input later
  return <StyledInput placeholder={placeHolder && placeHolder}></StyledInput>;
};

const StyledInput = styled.input`
  padding: ${metrics.padding.inputMedium};
  margin: ${metrics.margin.inputMedium};
  background-color: ${colors.whiteBrown};
  color: ${colors.textDarkBrown};
  border-radius: ${metrics.borderRadius.input}px;
  ::placeholder {
    color: ${colors.gray};
  }
`;

export default FormInput;
