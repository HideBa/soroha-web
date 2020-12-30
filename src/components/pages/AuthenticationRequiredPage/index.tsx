import useAuth from "@soroha/components/Auth";
import React from "react";
import { Redirect } from "react-router";

export type Props = {
  children?: React.ReactNode;
};

const AuthenticationRequiredPage: React.FC<Props> = ({ children }) => {
  const { isSignedIn: isAuthenticated, loading } = useAuth();
  console.log("is---", isAuthenticated);
  return isAuthenticated && !!children ? <>{children}</> : <Redirect to="/" />;
};

export default AuthenticationRequiredPage;
