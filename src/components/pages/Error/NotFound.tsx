import React from "react";

export type Props = {
  className?: string;
};

const NotFound: React.FC<Props> = ({ className }) => {
  return <div className={className}>not found</div>;
};

export default NotFound;
