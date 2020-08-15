import React from "react";
import Signup from "@soroha/components/organisms/Auth/Signup";
import styled from "@emotion/styled";
import { colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
};

const SignupPage: React.FC<Props> = ({ className }) => {
  return (
    <Body>
      <Signup />
    </Body>
  );
};

const Body = styled.div`
  height: 100%;
`;

export default SignupPage;
