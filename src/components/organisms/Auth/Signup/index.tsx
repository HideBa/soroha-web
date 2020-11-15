import React from "react";
import { default as useAuth } from "../hooks";
import Sign from "@soroha/components/molecules/Auth/Sign";

export type Props = {
  className?: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  const { signUpIn } = useAuth("signup");
  return <Sign className={className} mode="signup" onSend={signUpIn} />;
};

export default Signup;
