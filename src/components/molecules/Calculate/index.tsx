import React from "react";
import styled from "@emotion/styled";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import { metrics, colors } from "@soroha/components/styles";

export type Props = {
  onClick?: () => void;
};

const CalculateSubmit: React.FC<Props> = ({ onClick }) => {
  return (
    <SubmitButton
      text="精算する"
      className="calculate-submit"
      onClick={onClick}
    />
  );
};

const SubmitButton = styled(FormSubmit)`
  padding: ${metrics.padding.buttonMedium};
  background-color: ${colors.deepGreen};
  max-width: 300px;
`;

export default CalculateSubmit;
