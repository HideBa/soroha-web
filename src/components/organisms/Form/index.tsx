import React from "react";
import FormInputWrapper from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
};

type Input = {
  id: string;
  title: string;
  formType: "string" | "number";
};

const formInputs: Input[] = [
  { id: "date", title: "日付", formType: "string" },
  { id: "price", title: "金額", formType: "number" },
  { id: "memo", title: "メモ", formType: "string" },
];

const Form: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper>
      <Title>入力</Title>
      <FormSectionWrapper>
        {formInputs.map(formInput => {
          return (
            <FormInputWrapper key={formInput.id} title={formInput.title} />
          );
        })}
      </FormSectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.orangeBrown};
`;

const Title = styled.div``;

const FormSectionWrapper = styled.div``;
export default Form;
