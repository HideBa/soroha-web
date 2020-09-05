import React from "react";
import styled from "@emotion/styled";
import { colors, metrics, fonts } from "@soroha/components/styles";

export type Props = {
  className?: string;
  onClick?: () => void;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

const FormSubmit: React.FC<Props> = ({
  className,
  onClick,
  text,
  type,
  disabled,
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${colors.lightGreen};
  padding: ${metrics.padding.buttonMediumFlat};
  border-radius: ${metrics.borderRadius.button}px;
  width: 100%;
  margin: ${metrics.margin.inputSubmit};
  @media screen and (max-width: ${metrics.breakPoint.tabletOrSP}px) {
    margin: ${metrics.margin.inputSubmitSP};
  }
`;

const StyledText = styled(fonts.styles.FormSubmit)`
  color: ${colors.whiteBrown};
  text-align: center;
`;

export default FormSubmit;
