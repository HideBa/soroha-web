import React from "react";
import styled from "@emotion/styled";
import { colors } from "@soroha/components/styles";
import { FormTitle } from "@soroha/components/styles/fonts";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import FormContainer from "@soroha/components/atoms/FormContainer";
import FormInput from "@soroha/components/atoms/FormInput";
import Modal from "@soroha/components/atoms/Modal";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { Formik, FormikHelpers } from "formik";
import useHooks from "./hooks";
import FormError from "@soroha/components/atoms/FormError";
import Loading from "@soroha/components/atoms/Loading";

export type Props = {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen?: (willOpen: boolean) => void;
  onSend?: (price: number, comment: string) => void;
  err?: string;
  isLoading?: boolean;
};

export type ExpenseFormValues = {
  price: string;
  comment: string;
};

const ExpenseForm: React.FC<Props> = ({
  className,
  isModalOpen,
  setIsModalOpen,
  onSend,
  err,
  isLoading,
}) => {
  const isPC = useIsPC();
  const closeModal = () => setIsModalOpen && setIsModalOpen(false);
  const { validate } = useHooks();

  const Form = () => {
    return isLoading ? (
      <Loading />
    ) : (
      <Formik
        initialValues={{ price: "", comment: "" }}
        validate={validate}
        onSubmit={(
          values: ExpenseFormValues,
          { setSubmitting }: FormikHelpers<ExpenseFormValues>,
        ) => {
          if (!onSend) return;
          setSubmitting(true);
          onSend(parseInt(values.price), values.comment);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Title>入力</Title>
            <FormInput
              key={"price"}
              title={"金額"}
              placeHolder={"1000"}
              onChange={handleChange}
              error={errors.price}
              type="number"
              name="price"
              touched={touched.price}
              value={values.price}
            />
            <FormInput
              key={"comment"}
              title={"メモ"}
              placeHolder={"りんごを100個買ったよ"}
              onChange={handleChange}
              error={errors.comment}
              type="text"
              name="comment"
              touched={touched.comment}
              value={values.comment}
            />
            {err && <FormError err={err} />}
            <FormSubmit
              type="submit"
              text={isSubmitting ? "送信中..." : "追加"}
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    );
  };

  return isPC ? (
    <FormContainer className={className}>
      <Form />
    </FormContainer>
  ) : (
    <Modal className={className} onClose={closeModal} open={isModalOpen}>
      <Form />
    </Modal>
  );
};

const Title = styled(FormTitle)`
  color: ${colors.textDarkBrown};
  text-align: center;
`;

export default ExpenseForm;
