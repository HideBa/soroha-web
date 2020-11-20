import React, { useState } from "react";
import { default as useAuth } from "../hooks";
import Sign from "@soroha/components/molecules/Auth/Sign";

export type Props = {
  className?: string;
};

const Signin: React.FC<Props> = ({ className }) => {
  const [err, setErr] = useState<string | undefined>(undefined);
  const { signUpIn } = useAuth("signin", setErr);

  return (
    <Sign className={className} onSend={signUpIn} mode="signin" err={err} />
  );
};

export default Signin;
