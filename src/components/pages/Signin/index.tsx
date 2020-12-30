import React from "react";
import Signin from "@soroha/components/organisms/Auth/Signin";
import styled from "@emotion/styled";
import useAuth from "@soroha/components/Auth";
import { Redirect } from "react-router";

export type Props = {
  className?: string;
};

const SigninPage: React.FC<Props> = ({ className }) => {
  const { isSignedIn, user } = useAuth();
  console.log(isSignedIn);
  return isSignedIn ? (
    <Redirect to={`/${user.teamId}`} />
  ) : (
    <Body className={className}>
      <Signin />
    </Body>
  );
};

const Body = styled.div`
  height: 100%;
`;

export default SigninPage;
