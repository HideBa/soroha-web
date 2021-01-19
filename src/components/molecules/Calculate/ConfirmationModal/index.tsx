import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import React from "react";
import Modal from "@soroha/components/atoms/Modal";
import { colors, metrics } from "@soroha/components/styles";

export type Props = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  closable?: boolean;
  onCalculate?: () => void;
};

const ConfirmationModal: React.FC<Props> = ({
  className,
  onClose,
  open,
  closable,
  onCalculate,
}) => {
  return (
    <Modal
      onClose={onClose}
      open={open}
      closable={closable}
      className={className}
    >
      <Container>
        <NotificationText>
          一度精算をするとやり直しは出ません。 よろしいですか？
        </NotificationText>
        <ButtonContainer>
          <CancelButton onClick={onClose}>キャンセル</CancelButton>
          <ProceedButton onClick={onCalculate}>精算する</ProceedButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  max-width: 300px;
`;

const NotificationText = styled.div`
  color: ${colors.textDarkBrown};
  padding: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CancelButton = styled(Button)`
  background-color: ${colors.whiteBrown};
  &:hover {
    background-color: ${colors.gray};
  }
  color: ${colors.deepGreen};
  border: solid 2px ${colors.deepGreen};
  width: 100px;
  height: 40px;
  margin: 10px;
  border-radius: ${metrics.borderRadius.button}px;
`;

const ProceedButton = styled(Button)`
  background-color: ${colors.lightGreen};
  &:hover {
    background-color: ${colors.deepGreen};
  }
  color: ${colors.white};
  width: 100px;
  height: 40px;
  margin: 10px;
  border-radius: ${metrics.borderRadius.button}px;
`;

export default ConfirmationModal;
