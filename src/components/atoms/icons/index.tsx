import React from "react";
import { FaUser, FaExchangeAlt } from "react-icons/fa";
import { RiMenuLine, RiGroupLine, RiCloseLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { FaPen } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrAdd, GrRadialSelected } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
  icon?: Icons;
  size?: string | number;
  alt?: string;
  color?: string;
  text?: string;
  onClick?: () => void;
};

const icons = {
  user: FaUser,
  menu: RiMenuLine,
  home: TiHome,
  pen: FaPen,
  close: RiCloseLine,
  signOut: IoIosLogOut,
  setting: AiOutlineSetting,
  dropDown: IoMdArrowDropdown,
  add: GrAdd,
  switch: FaExchangeAlt,
  selected: GrRadialSelected,
  team: RiGroupLine,
  notice: AiOutlineInfoCircle,
  summary: CgNotes,
};

export type Icons = keyof typeof icons;

const Icon: React.FC<Props> = ({
  className,
  icon,
  size,
  alt,
  color,
  onClick,
  text,
}) => {
  if (!icon) return null;
  const IconComponent = icons[icon as Icons];
  if (IconComponent) {
    return (
      <Wrapper>
        <IconComponent
          className={className}
          size={size}
          color={color}
          onClick={onClick}
        />
        {text && <Text>{text}</Text>}
      </Wrapper>
    );
  }
  return null;
};

const Text = styled.div`
  margin: 0 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Icon;
