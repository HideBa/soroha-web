import React from "react";
import NavLink, { LinkType } from "@soroha/components/atoms/NavLink";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
  links?: LinkType[];
  isPC?: boolean;
};

const NavBar: React.FC<Props> = ({ className, links, isPC }) => {
  return (
    <>
      {!isPC && (
        <NavBarWrapper>
          {links &&
            links.map(link => {
              return <NavLink key={link.icon} link={link} />;
            })}
        </NavBarWrapper>
      )}
    </>
  );
};

const NavBarWrapper = styled.div``;

export default NavBar;
