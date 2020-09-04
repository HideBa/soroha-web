import React, { useState, useEffect } from "react";
import { default as FormInput } from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";
import { H2 } from "@soroha/components/styles/fonts";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import { Formik } from "formik";
import useHooks from "@soroha/components/organisms/Auth/hooks";

export type Props = {
  className?: string;
};

type FormValue = {
  username: string;
  password: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  // const handleFormSubmit = (values: FormValue, { setSubmitting: FormikHelpers<FormValue>, }) => {
  //   console.log("--");
  // };

  const [validateForm] = useHooks();
  return (
    <Wrapper>
      <Title>Sign up</Title>
      <Formik
        initialValues={{ username: "", password: "" }}
        // validate={}
        onSubmit={(value, { isSubmitting }) => console.log("")}
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
              // validateForm={() => validateForm("username", userName)}
            />
            <FormInput
              placeHolder="password"
              title="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              // validateForm={() => validateForm("password", password)}
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

export default Signup;
