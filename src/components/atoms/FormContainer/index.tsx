import styled from "@emotion/styled";
import { colors, metrics } from "@soroha/components/styles";
import { FormTitle } from "@soroha/components/styles/fonts";
import React from "react";

export type Props = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

const FormContainer: React.FC<Props> = ({ className, children, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.orangeBrown};
  padding: ${metrics.padding.formWrapper};
  min-width: 300px;
  max-height: 500px;
  margin: ${metrics.margin.formBody};
  border-radius: ${metrics.borderRadius.container}px;
  flex-grow: 1;
`;

const Title = styled(FormTitle)`
  color: ${colors.textDarkBrown};
  text-align: center;
`;

export default FormContainer;
