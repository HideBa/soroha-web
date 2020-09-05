import React, { useState } from "react";
import FormInputWrapper from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";
import { H2 } from "@soroha/components/styles/fonts";
import { default as FormInput } from "@soroha/components/molecules/FormInputWrapper";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import { Formik } from "formik";
import { default as useHooks } from "../hooks";

export type Props = {
  className?: string;
};

const Signin: React.FC<Props> = ({ className }) => {
  const [validate] = useHooks();
  return (
    <Wrapper>
      <Title>Sign up</Title>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={validate}
        onSubmit={(value, { isSubmitting }) => console.log("submit")}
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
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            {/* <FormSubmit text="Enter" onClick={handleFormSubmit} /> */}
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

export default Signin;
