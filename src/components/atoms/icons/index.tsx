import React from "react";
import { FaUser } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

export type Props = {
  className?: string;
  icon?: Icons;
  size?: string | number;
  alt?: string;
  color?: string;
  onClick?: () => void;
};

const icons = {
  user: FaUser,
  menu: RiMenuLine,
  home: TiHome,
  pen: FaPen,
  close: RiCloseLine,
};

export type Icons = keyof typeof icons;

const Icon: React.FC<Props> = ({
  className,
  icon,
  size,
  alt,
  color,
  onClick,
}) => {
  if (!icon) return null;
  const IconComponent = icons[icon as Icons];
  if (IconComponent) {
    return (
      <IconComponent
        className={className}
        size={size}
        color={color}
        onClick={onClick}
      />
    );
  }
  return null;
};

export default Icon;
