import React from "react";

export type Props = {
  className?: string;
};

const Signin: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};

export default Signin;
