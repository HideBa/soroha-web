import styled from "@emotion/styled";
import { colors, metrics, zIndexes } from "@soroha/components/styles";
import React from "react";
import Icon from "../icons";

export type Props = {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  closable?: boolean;
};

const Modal: React.FC<Props> = ({
  className,
  children,
  open,
  onClose,
  closable = true,
}) => {
  return (
    <ModalWrapper isModalOpen={open} className={className}>
      <ModalBg onClick={() => closable && onClose && onClose()} />
      <ModalPopup>
        {children}
        {closable && (
          <StyledIcon
            icon="close"
            size={30}
            onClick={onClose}
            color={colors.textDarkBrown}
          />
        )}
      </ModalPopup>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div<{ isModalOpen?: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isModalOpen ? "block" : "none")};
  z-index: ${zIndexes.fullScreenModal};
`;

const ModalBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${colors.textDarkBrown};
  opacity: ${metrics.opacity.modalBg}%;
`;

const ModalPopup = styled.div`
  background-color: ${colors.orangeBrown};
  padding: ${metrics.padding.formWrapper};
  width: calc(100% - 80px);
  margin: ${metrics.margin.formBody};
  border-radius: ${metrics.borderRadius.container}px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: ${metrics.breakPoint.tabletOrSP}px) {
    margin: 0px;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default Modal;
