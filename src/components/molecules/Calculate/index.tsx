import React from "react";
import styled from "@emotion/styled";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import { metrics, colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
  onClick?: () => void;
};

const CalculateSubmit: React.FC<Props> = ({ className, onClick }) => {
  return <SubmitButton text="精算する" />;
};

const SubmitButton = styled(FormSubmit)`
  padding: ${metrics.padding.buttonMedium};
  background-color: ${colors.deepGreen};
`;

export default CalculateSubmit;
