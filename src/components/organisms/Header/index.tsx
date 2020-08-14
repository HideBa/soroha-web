import React from "react";
import Header from "@soroha/components/molecules/Header";
import { LinkType } from "@soroha/components/atoms/NavLink";
import styled from "@emotion/styled";
import { zIndexes } from "@soroha/components/styles";

export type Props = {
  isPC?: boolean;
  links?: LinkType[];
};

const NavBar: React.FC<Props> = ({ isPC, links }) => {
  return (
    <Wrapper>
      <Header links={links} isPC={isPC} />;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: ${zIndexes.header};
`;
export default NavBar;
