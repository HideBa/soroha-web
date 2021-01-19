import styled from "@emotion/styled";
import FormInput from "@soroha/components/atoms/FormInput";
import Loading from "@soroha/components/atoms/Loading";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import useHooks from "./hooks";

export type Props = {
  className?: string;
  defaultValues?: FormValues;
  onSend?: (price: number, comment: string, slug: string) => void;
  isLoading?: boolean;
  submitButton?: React.ReactNode;
  slug?: string;
};

export type FormValues = { price: string; comment: string };

const EditForm: React.FC<Props> = ({
  className,
  defaultValues,
  onSend,
  isLoading,
  submitButton,
  slug,
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
          if (!onSend || !slug) return;
          setSubmitting(true);
          onSend(parseInt(values.price), values.comment, slug);
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
              adjastableHeight
            />
            {!!submitButton && (
              <button type="submit" disabled={isSubmitting}>
                {submitButton}
              </button>
            )}
          </form>
        )}
      </Formik>
    );
  };

  return <Form />;
};

const StyledInput = styled(FormInput)`
  margin: 5px;
`;

export default EditForm;
