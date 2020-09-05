import React, { ChangeEvent, useEffect } from "react";
import FormInput from "@soroha/components/atoms/FormInput";
import styled from "@emotion/styled";
import { colors, fonts, metrics } from "@soroha/components/styles";

export type Props = {
  className?: string;
  placeHolder?: string;
  title?: string;
  // text?: string;
  // setText?: (text: string) => void;
  // validateForm?: () => boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  error?: string;
  touched?: boolean;
};

const FormInputWrapper: React.FC<Props> = ({
  className,
  placeHolder,
  title,
  value,
  onChange,
  name,
  error,
  touched,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {error && touched && <ValidationError>{error}</ValidationError>}
      <FormInput
        placeHolder={placeHolder}
        value={value}
        onChange={onChange}
        name={name}
      />
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

const ValidationError = styled.div`
  color: ${colors.alert};
  font-size: ${fonts.size.small};
  margin: ${metrics.margin.validationText};
  padding: ${metrics.padding.validationText};
  text-align: left;
`;

export default FormInputWrapper;
