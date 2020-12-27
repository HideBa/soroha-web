import React from "react";

export type Props = {
  className?: string;
  header?: React.ReactNode;
  body?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: React.ReactNode;
};

const SettingPage: React.FC<Props> = ({
  className,
  header,
  body,
  bottom,
  children,
}) => {
  return (
    <>
      {header}
      {body}
      {children}
      {bottom}
    </>
  );
};

export default SettingPage;
