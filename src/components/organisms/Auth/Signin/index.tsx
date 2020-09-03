import React, { useState } from "react";
import FormInputWrapper from "@soroha/components/molecules/FormInputWrapper";
import styled from "@emotion/styled";
import { metrics, colors } from "@soroha/components/styles";
import { H2 } from "@soroha/components/styles/fonts";

export type Props = {
  className?: string;
};

const Signin: React.FC<Props> = ({ className }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <Title>Sign in</Title>
      <FormInputWrapper
        placeHolder="username"
        title="username"
        text={userName}
        setText={setUserName}
      />
      <FormInputWrapper
        placeHolder="password"
        title="password"
        text={password}
        setText={setPassword}
      />
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
