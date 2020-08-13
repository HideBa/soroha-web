import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export type Props = {
  className?: string;
};

const FormSubmit: React.FC<Props> = ({ className }) => {
  return <div className={className}>送信</div>;
};

const styledButton = styled.button``;

export default FormSubmit;
