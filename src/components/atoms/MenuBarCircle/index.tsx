import React from "react";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";
import Icon from "../icons";

export type Props = {
  className?: string;
  onClick?: () => void;
};

const MenuBarCircle: React.FC<Props> = ({ className, onClick }) => {
  return (
    <CircleWrapper>
      <PenIconWrapper onClick={onClick}>
        <Icon icon="pen" size={35} color={colors.whiteBrown} />
      </PenIconWrapper>
    </CircleWrapper>
  );
};

const CircleWrapper = styled.div`
  padding: ${metrics.padding.circleWrapper};
  background-color: ${colors.lightGreen};
  border-radius: ${metrics.borderRadius.circle}%;
  width: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
`;

const PenIconWrapper = styled.div`
  border-radius: ${metrics.borderRadius.circle}%;
  background-color: ${colors.textDarkBrown};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MenuBarCircle;
