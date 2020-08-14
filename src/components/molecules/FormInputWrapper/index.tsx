import React from "react";
import FormInput from "@soroha/components/atoms/FormInput";
import styled from "@emotion/styled";
import { colors, fonts } from "@soroha/components/styles";

export type Props = {
  className?: string;
  placeHolder?: string;
  title?: string;
};

const FormInputWrapper: React.FC<Props> = ({
  className,
  placeHolder,
  title,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <FormInput placeHolder={placeHolder}></FormInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${colors.textDarkBrown};
  font-size: ${fonts.size.medium2};
`;

export default FormInputWrapper;
