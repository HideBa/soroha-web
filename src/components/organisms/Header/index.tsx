import React from "react";
import Header from "@soroha/components/molecules/Header";
import { LinkType } from "@soroha/components/atoms/NavLink";
import styled from "@emotion/styled";

export type Props = {
  isPC?: boolean;
  links?: LinkType[];
};

const NavBar: React.FC<Props> = ({ isPC, links }) => {
  return (
    <Wrapper className="header-wrapper">
      <Header links={links} isPC={isPC} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
export default NavBar;
