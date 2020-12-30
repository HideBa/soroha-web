import styled from "@emotion/styled";
import React from "react";

export type Props = {
  className?: string;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

const TopPage: React.FC<Props> = ({
  className,
  header,
  body,
  footer,
  children,
}) => {
  return (
    <Wrapper>
      {header}
      {body}
      {footer}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default TopPage;
