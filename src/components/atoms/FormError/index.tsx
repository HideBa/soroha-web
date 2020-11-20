import styled from "@emotion/styled";
import { colors } from "@soroha/components/styles";
import React from "react";

export type Props = {
  className?: string;
  err?: string;
};

const FormError: React.FC<Props> = ({ className, err }) => {
  return <Error className={className}>{err}</Error>;
};
const Error = styled.span`
  color: ${colors.alert};
`;

export default FormError;
