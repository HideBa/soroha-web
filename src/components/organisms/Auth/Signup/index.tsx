import React, { useState, useEffect } from "react";
import { default as FormInput } from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";
import { H2 } from "@soroha/components/styles/fonts";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import useHooks from "@soroha/components/organisms/Auth/hooks";

export type Props = {
  className?: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = () => {
    console.log("--");
  };
  const [validateForm] = useHooks();
  return (
    <Wrapper>
      <Title>Sign up</Title>
      <FormInput
        placeHolder="username"
        title="username"
        text={userName}
        setText={setUserName}
        validateForm={() => validateForm("username", userName)}
      />
      <FormInput
        placeHolder="password"
        title="password"
        text={password}
        setText={setPassword}
        validateForm={() => validateForm("password", password)}
      />
      <FormSubmit text="Enter" onClick={handleFormSubmit} />
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
