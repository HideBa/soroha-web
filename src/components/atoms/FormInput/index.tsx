import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
  placeHolder?: string;
  text?: string;
  setText?: (text: string) => void;
};

const FormInput: React.FC<Props> = ({
  className,
  placeHolder,
  text,
  setText,
}) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setText && setText(value);
  };

  //TODO: must implement validation for input later
  return (
    <StyledInput
      placeholder={placeHolder && placeHolder}
      value={text}
      onChange={handleTextChange}
    ></StyledInput>
  );
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
