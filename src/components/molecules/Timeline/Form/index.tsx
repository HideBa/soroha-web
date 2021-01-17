import styled from "@emotion/styled";
import FormInput from "@soroha/components/atoms/FormInput";
import Loading from "@soroha/components/atoms/Loading";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import useHooks from "./hooks";

export type Props = {
  className?: string;
  defaultValues?: FormValues;
  onSend?: (price: number, comment: string) => void;
  isLoading?: boolean;
};

export type FormValues = { price: string; comment: string };

const EditForm: React.FC<Props> = ({
  className,
  defaultValues,
  onSend,
  isLoading,
}) => {
  const { validate } = useHooks();

  const Form = () => {
    return isLoading ? (
      <Loading />
    ) : (
      <Formik
        initialValues={{
          price: defaultValues?.price ?? "",
          comment: defaultValues?.comment ?? "",
        }}
        validate={validate}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>,
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
            <StyledInput
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
            <StyledInput
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
            {/* {err && <FormError err={err} />} */}
            {/* <FormSubmit
              type="submit"
              text={isSubmitting ? "送信中..." : "追加"}
              disabled={isSubmitting}
            /> */}
          </form>
        )}
      </Formik>
    );
  };

  return <Form />;
};

const StyledInput = styled(FormInput)`
  /* height: 20px; */
  /* height: 60px; */
  margin: 5px;
`;

export default EditForm;
