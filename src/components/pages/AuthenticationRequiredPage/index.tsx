import Loading from "@soroha/components/atoms/Loading";
import useAuth from "@soroha/components/Auth";
import React from "react";
import { Redirect } from "react-router";

export type Props = {
  children?: React.ReactNode;
};

const AuthenticationRequiredPage: React.FC<Props> = ({ children }) => {
  const { isSignedIn: isAuthenticated, loading } = useAuth();
  return loading ? (
    <Loading />
  ) : isAuthenticated && !!children ? (
    <>{children}</>
  ) : (
    <Redirect to="/signin" />
  );
};

export default AuthenticationRequiredPage;
