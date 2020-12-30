import React from "react";
import Signup from "@soroha/components/organisms/Auth/Signup";
import styled from "@emotion/styled";
import useAuth from "@soroha/components/Auth";
import { Redirect } from "react-router";

export type Props = {
  className?: string;
};

const SignupPage: React.FC<Props> = ({ className }) => {
  const { user, isSignedIn } = useAuth();
  return isSignedIn ? (
    <Redirect to={`/${user.teamId}`} />
  ) : (
    <Body>
      <Signup />
    </Body>
  );
};

const Body = styled.div`
  height: 100%;
`;

export default SignupPage;
