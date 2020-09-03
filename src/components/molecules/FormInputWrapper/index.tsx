import React, { ChangeEvent } from "react";
import FormInput from "@soroha/components/atoms/FormInput";
import styled from "@emotion/styled";
import { colors, fonts, metrics } from "@soroha/components/styles";

export type Props = {
  className?: string;
  placeHolder?: string;
  title?: string;
  text?: string;
  setText?: (text: string) => void;
  validateForm?: () => boolean;
};

const FormInputWrapper: React.FC<Props> = ({
  className,
  placeHolder,
  title,
  text,
  setText,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ValidationText>aaa</ValidationText>
      <FormInput
        placeHolder={placeHolder}
        text={text}
        setText={setText}
      ></FormInput>
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

const ValidationText = styled.div`
  color: ${colors.alert};
  font-size: ${fonts.size.small};
  margin: ${metrics.margin.validationText};
  padding: ${metrics.padding.validationText};
  text-align: left;
`;

export default FormInputWrapper;
