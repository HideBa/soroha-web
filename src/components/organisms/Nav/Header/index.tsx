import React from "react";
import Header from "@soroha/components/molecules/Header";
import styled from "@emotion/styled";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { useRecoilValue } from "recoil";
import { currentUser } from "@soroha/recoil/selectors";
import useHooks from "../hooks";

export type Props = {
  // links?: LinkType[];
};

const NavBar: React.FC<Props> = () => {
  const { links } = useHooks();
  const isPC = useIsPC();
  const userState = useRecoilValue(currentUser);
  const isSignedIn = !!userState.userName;
  return (
    <Wrapper className="header-wrapper">
      <Header links={links} isPC={isPC} isSignedIn={isSignedIn} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
export default NavBar;
