import React, { useState } from "react";
import { default as useAuth } from "../hooks";
import Sign from "@soroha/components/molecules/Auth/Sign";

export type Props = {
  className?: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  const [err, setErr] = useState<string | undefined>(undefined);
  const { signUpIn } = useAuth("signup", setErr);
  return (
    <Sign className={className} mode="signup" onSend={signUpIn} err={err} />
  );
};

export default Signup;
