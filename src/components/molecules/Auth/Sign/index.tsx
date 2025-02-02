import React from "react";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";
import { H2 } from "@soroha/components/styles/fonts";
import { default as FormInput } from "@soroha/components/atoms/FormInput";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import { Formik, FormikHelpers } from "formik";
import { default as useAuth } from "./hooks";
import { FormValues } from "./types";
import FormError from "@soroha/components/atoms/FormError";
import Loading from "@soroha/components/atoms/Loading";

export type Sign = "signin" | "signup";

export type Props<T extends Sign> = {
  className?: string;
  mode?: T;
  onSend?: (value: FormValues) => void;
  err?: string;
  loading?: boolean;
};

const formTitle = {
  signin: "Sign in",
  signup: "Sign up",
};
const Sign = <T extends Sign>({
  className,
  mode,
  onSend,
  err,
  loading,
}: Props<T>) => {
  const { validate } = useAuth();
  return loading ? (
    <Loading />
  ) : (
    <Wrapper className={className}>
      <Title>
        {mode && mode in formTitle && formTitle[mode as keyof typeof formTitle]}
      </Title>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={validate}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>,
        ) => {
          if (!onSend) return;
          setSubmitting(true);
          onSend(values);
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
            <FormInput
              placeHolder="username"
              title="username"
              name="username"
              onChange={handleChange}
              value={values.username}
              error={errors.username}
              touched={touched.username}
            />
            <FormInput
              placeHolder="password"
              title="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            {err && <FormError err={err} />}
            <FormSubmit type="submit" text="Enter" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${metrics.borderRadius.container}px;
  padding: ${metrics.padding.formWrapper};
  background-color: ${colors.orangeBrown};
  text-align: center;
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  @media screen and (max-width: ${metrics.breakPoint.tabletOrSP}px) {
    width: auto;
    min-width: 240px;
  }
`;

const Title = styled(H2)`
  color: ${colors.textDarkBrown};
  margin: ${metrics.margin.mediumTitle};
`;

export default Sign;
