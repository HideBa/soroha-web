import React from "react";
import styled from "@emotion/styled";
import { colors, metrics, fonts } from "../../styles";

export type Props = {
  className?: string;
  onClick?: () => void;
};

const FormSubmit: React.FC<Props> = ({ className, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledText>送信</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${colors.lightGreen};
  padding: ${metrics.padding.buttonMediumFlat};
  border-radius: ${metrics.borderRadius.button}px;
`;

const StyledText = styled(fonts.styles.FormSubmit)`
  color: ${colors.textWhiteBrown};
  text-align: center;
`;

export default FormSubmit;
