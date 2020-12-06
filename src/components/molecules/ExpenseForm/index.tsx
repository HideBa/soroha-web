import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "@soroha/components/styles";
import { FormTitle } from "@soroha/components/styles/fonts";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import FormContainer from "@soroha/components/atoms/FormContainer";
import FormInput from "@soroha/components/atoms/FormInput";
import Modal from "@soroha/components/atoms/Modal";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";

export type Props = {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen?: (willOpen: boolean) => void;
  onSend?: (price: number, comment: string) => void;
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

const ExpenseForm: React.FC<Props> = ({
  className,
  isModalOpen,
  setIsModalOpen,
  onSend,
}) => {
  const isPC = useIsPC();
  const closeModal = () => setIsModalOpen && setIsModalOpen(false);
  const [price, setPrice] = useState(0);
  const [comment, setComment] = useState("");

  const handleSend = () => {
    onSend?.(price, comment);
    setPrice(0);
    setComment("");
  }
  return isPC ? (
    <FormContainer className={className}>
      <Title>入力</Title>
      <div>
        {formInputs.map(f => {
          return (
            <FormInput key={f.id} title={f.title} placeHolder={f.placeHolder} />
          );
        })}
      </div>
      <FormSubmit text="追加" />
    </FormContainer>
  ) : (
    <Modal className={className} onClose={closeModal} open={isModalOpen}>
      <Title>入力</Title>
      <div>
        {formInputs.map(f => {
          return (
            <FormInput key={f.id} title={f.title} placeHolder={f.placeHolder} />
          );
        })}
      </div>
      <FormSubmit text="追加" onClick={onSend} />
    </Modal>
  );
};

const Title = styled(FormTitle)`
  color: ${colors.textDarkBrown};
  text-align: center;
`;

export default ExpenseForm;
