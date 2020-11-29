import React from "react";
import styled from "@emotion/styled";
import { metrics, colors, fonts } from "@soroha/components/styles";

export type Props = {
  className?: string;
  placeHolder?: string;
  value?: string;
  title?: string;
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
};

const FormInput: React.FC<Props> = ({
  className,
  placeHolder,
  value,
  title,
  error,
  touched,
  onChange,
  name,
  type,
}) => {
  return (
    <Wrapper className={className}>
      {title && <Title>{title}</Title>}
      {error && touched && <ValidationError>{error}</ValidationError>}
      <StyledInput
        placeholder={placeHolder && placeHolder}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
      ></StyledInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: ${metrics.margin.inputMedium};
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

const StyledInput = styled.input`
  /* margin: ${metrics.margin.inputMedium}; */
  padding: ${metrics.padding.inputMedium};
  background-color: ${colors.whiteBrown};
  color: ${colors.textDarkBrown};
  border-radius: ${metrics.borderRadius.input}px;
  ::placeholder {
    color: ${colors.gray};
  }
`;

export default FormInput;
