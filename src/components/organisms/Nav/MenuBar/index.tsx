import React from "react";
import styled from "@emotion/styled";
import { colors, zIndexes } from "@soroha/components/styles";
import { default as NavBarMolecule } from "@soroha/components/molecules/NavBar";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import useHooks from "../hooks";

export type Props = {
  className?: string;
  // links?: LinkType[];
  setIsModalOpen?: () => void;
};

const MenuBar: React.FC<Props> = ({ setIsModalOpen }) => {
  const { links } = useHooks();
  const isPC = useIsPC();
  // const isSignedIn = useContext(AuthContext).isSignedIn;
  return isPC ? null : (
    <Wrapper>
      <BottomBar>
        <NavBarMolecule links={links} setIsModalOpen={setIsModalOpen} />
      </BottomBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  bottom: 0px;
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
