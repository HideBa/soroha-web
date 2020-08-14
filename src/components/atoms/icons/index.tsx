import React from "react";
import { FaUser } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
  icon?: Icons;
  size?: string | number;
  alt?: string;
  color?: string;
  wrapperColor?: string;
  onClick?: () => void;
};

const icons = {
  user: FaUser,
  menu: RiMenuLine,
  home: TiHome,
  pen: FaPen,
};

export type Icons = keyof typeof icons;

const Icon: React.FC<Props> = ({
  className,
  icon,
  size,
  alt,
  color,
  wrapperColor,
  onClick,
}) => {
  if (!icon) return null;
  const IconComponent = icons[icon as Icons];
  if (IconComponent) {
    return (
      <IconWrapper onClick={onClick} color={wrapperColor}>
        <IconComponent size={size} color={color} />
      </IconWrapper>
    );
  }
  return <div className={className}></div>;
};

const IconWrapper = styled.div<{ color?: string }>`
  background-color: ${props => (props.color ? props.color : "")};
`;

export default Icon;
