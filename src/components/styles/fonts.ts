import styled from "@emotion/styled";

const type = {
  base: "sanserif",
  special: "NotoSans",
  logoType: "HiraginoKakugo", //TODO: should be checked well
};

const size = {
  extraSmall: 12,
  small: 14,
  medium: 16,
  medium2: 20,
  large: 24,
  extraLarge: 32,
};

const weight = {
  bold: "bold",
  normal: "normal",
};

export const H1 = styled.h1`
  font-size: ${size.extraLarge}px;
  font-weight: ${weight.bold};
  font-family: ${type.special};
`;

export const H2 = styled.h1`
  font-size: ${size.large}px;
  font-weight: ${weight.bold};
  font-family: ${type.base};
`;

export const Type = styled.p`
  font-size: ${size.extraLarge}px;
  font-weight: ${weight.normal};
  font-family: ${type.logoType};
`;

export const FormSubmit = styled.p`
  font-size: ${size.medium2}px;
  font-weight: ${weight.normal};
  font-family: ${type.base};
`;

export const FormTitle = styled.p`
  font-size: ${size.large};
  font-weight: ${weight.bold};
`;

export const Medium = styled.p`
  font-size: ${size.medium}px;
  font-weight: ${weight.normal};
`;

export const Tiny = styled.p`
  font-size: ${size.extraSmall}px;
  font-weight: ${weight.normal};
  font-family: ${type.base};
`;

const styles = {
  H1,
  H2,
  FormSubmit,
};

const fonts = {
  type,
  size,
  styles,
};

export default fonts;
