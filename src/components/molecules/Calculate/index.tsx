import React, { useState } from "react";
import styled from "@emotion/styled";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import { metrics, colors } from "@soroha/components/styles";
import ConfirmationModal from "./ConfirmationModal";

export type Props = {
  onCalculate?: () => void;
};

const CalculateSubmit: React.FC<Props> = ({ onCalculate }) => {
  const [modalOpen, openModal] = useState(false);

  const handleCloseModal = () => openModal(false);

  const handleOpenModal = () => {
    openModal(true);
  };

  const handleCalculate = () => console.log("calculate");

  return (
    <>
      <SubmitButton
        text="精算する"
        className="calculate-submit"
        onClick={handleOpenModal}
      />
      <ConfirmationModal
        open={modalOpen}
        onClose={handleCloseModal}
        closable
        onCalculate={handleCalculate}
      />
    </>
  );
};

const SubmitButton = styled(FormSubmit)`
  margin: ${metrics.margin.buttonMedium};
  padding: ${metrics.padding.buttonMedium};
  background-color: ${colors.deepGreen};
  max-width: 300px;
  :hover {
    background-color: ${colors.extraDeepGreen};
  }
`;

export default CalculateSubmit;
