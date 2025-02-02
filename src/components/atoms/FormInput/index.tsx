import React from "react";
import styled from "@emotion/styled";
import { metrics, colors, fonts } from "@soroha/components/styles";
import { TextareaAutosize } from "@material-ui/core";

export type Props = {
  className?: string;
  placeHolder?: string;
  value?: string | number;
  title?: string;
  error?: string;
  touched?: boolean;
  onChange?: (e: string) => void;
  name?: string;
  type?: string;
  adjastableHeight?: boolean;
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
  adjastableHeight,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <Wrapper className={className}>
      {title && <Title>{title}</Title>}
      {error && touched && <ValidationError>{error}</ValidationError>}
      {adjastableHeight ? (
        <StyledTextareaAutosize
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          name={name}
        />
      ) : (
        <StyledInput
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          name={name}
          type={type}
        />
      )}
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
  margin: 5px 0;
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

const StyledTextareaAutosize = styled(TextareaAutosize)`
  padding: ${metrics.padding.inputMedium};
  background-color: ${colors.whiteBrown};
  color: ${colors.textDarkBrown};
  border-radius: ${metrics.borderRadius.input}px;
  border: none;
  ::placeholder {
    color: ${colors.gray};
  }
`;

export default FormInput;
