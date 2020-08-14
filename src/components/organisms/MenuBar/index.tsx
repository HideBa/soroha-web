import React from "react";
import styled from "@emotion/styled";
import { colors, zIndexes } from "@soroha/components/styles";
import { LinkType } from "@soroha/components/atoms/NavLink";
import { default as NavBarMolecule } from "@soroha/components/molecules/NavBar";

export type Props = {
  className?: string;
  isPC?: boolean;
  links?: LinkType[];
};

const MenuBar: React.FC<Props> = ({ isPC, links }) => {
  return isPC ? null : (
    <Wrapper>
      <BottomBar>
        <NavBarMolecule links={links} />
      </BottomBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  bottom: 30px;
  z-index: ${zIndexes.footer};
`;

const BottomBar = styled.div`
  background-color: ${colors.lightGreen};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default MenuBar;
