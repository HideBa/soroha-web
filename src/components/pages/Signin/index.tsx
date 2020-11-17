import React from "react";
import Signin from "@soroha/components/organisms/Auth/Signin";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
};

const SigninPage: React.FC<Props> = ({ className }) => {
  return (
    <Body>
      <Signin />
    </Body>
  );
};

const Body = styled.div`
  height: 100%;
`;

export default SigninPage;
