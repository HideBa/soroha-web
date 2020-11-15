import React from "react";
import { default as useAuth } from "../hooks";
import Sign from "@soroha/components/molecules/Auth/Sign";

export type Props = {
  className?: string;
};

const Signin: React.FC<Props> = ({ className }) => {
  const { signUpIn } = useAuth("signin");

  return <Sign className={className} onSend={signUpIn} mode="signin" />;
};

export default Signin;
