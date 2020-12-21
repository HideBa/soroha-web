import React from "react";
import styled from "@emotion/styled";
import { colors, zIndexes } from "@soroha/components/styles";
import { default as NavBarMolecule } from "@soroha/components/molecules/NavBar";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import useHooks from "../hooks";

export type Props = {
  className?: string;
};

const MenuBar: React.FC<Props> = () => {
  const {
    links,
    openModal,
    notification,
    onNotify,
    closeNotification,
  } = useHooks();
  const isPC = useIsPC();
  return isPC ? null : (
    <Wrapper>
      <BottomBar>
        <NavBarMolecule
          links={links}
          openModal={openModal}
          notification={notification}
          onNotificationClose={closeNotification}
        />
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
