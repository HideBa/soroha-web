import React from "react";
import FormInputWrapper from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { colors, metrics } from "@soroha/components/styles";
import { FormTitle } from "@soroha/components/styles/fonts";
import FormSubmit from "@soroha/components/atoms/FormSubmit";

export type Props = {
  className?: string;
  isPC?: boolean;
  isOpen?: boolean;
  setIsModalOpen?: () => void;
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

const Form: React.FC<Props> = ({ className, isPC, isOpen, setIsModalOpen }) => {
  return isPC ? (
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
  ) : (
    <ModalWrapper isOpen={isOpen}>
      <ModalBg onClick={setIsModalOpen} />
      {/* must be managed as state */}
      <ModalPopup>
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
      </ModalPopup>
    </ModalWrapper>
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

const ModalWrapper = styled.div<{ isOpen?: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${props => (props.isOpen ? "block" : "none")};
`;

const ModalBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${colors.textDarkBrown};
  opacity: 50%;
`;

const ModalPopup = styled.div`
  background-color: ${colors.orangeBrown};
  padding: ${metrics.padding.formWrapper};
  width: 90%;
  margin: ${metrics.margin.formBody};
  border-radius: ${metrics.borderRadius.container}px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FormSectionWrapper = styled.div``;
export default Form;
