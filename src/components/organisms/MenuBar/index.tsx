import React from "react";
import styled from "@emotion/styled";
import { colors } from "@soroha/components/styles";
import { LinkType } from "@soroha/components/atoms/NavLink";

export type Props = {
  className?: string;
  isSignIn?: boolean;
  isPC?: boolean;
  links?: LinkType[];
};

const NavBar: React.FC<Props> = ({ isSignIn, isPC, links }) => {
  return isPC ? (
    <></>
  ) : (
    <Wrapper>
      <BottomBar>
        <NavBar links={links} />
      </BottomBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  bottom: 30px;
`;

const BottomBar = styled.div`
  background-color: ${colors.lightGreen};
  width: 100%;
`;

export default NavBar;
