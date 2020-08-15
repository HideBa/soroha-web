import React from "react";
import FormInputWrapper from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { colors, metrics } from "@soroha/components/styles";
import { FormTitle } from "@soroha/components/styles/fonts";
import FormSubmit from "@soroha/components/atoms/FormSubmit";

export type Props = {
  className?: string;
};

type Input = {
  id: string;
  title: string;
  formType: "string" | "number";
  placeHolder: string;
};

const formInputs: Input[] = [
  { id: "date", title: "日付", formType: "string", placeHolder: "2020年" },
  { id: "price", title: "金額", formType: "number", placeHolder: "2000" },
  {
    id: "memo",
    title: "メモ",
    formType: "string",
    placeHolder: "りんごを買ったよ",
  },
];

const Form: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper>
      <Title>入力</Title>
      <FormSectionWrapper>
        {formInputs.map(formInput => {
          return (
            <FormInputWrapper
              key={formInput.id}
              title={formInput.title}
              placeHolder={formInput.placeHolder}
            />
          );
        })}
      </FormSectionWrapper>
      <FormSubmit text="追加" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.orangeBrown};
  padding: ${metrics.padding.formWrapper};
  min-width: 300px;
  margin: ${metrics.margin.formBody};
  border-radius: ${metrics.borderRadius.container}px;
  flex-grow: 1;
`;

const Title = styled(FormTitle)`
  color: ${colors.textDarkBrown};
  text-align: center;
`;

const FormSectionWrapper = styled.div``;
export default Form;
