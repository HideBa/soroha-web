import React from "react";
import MaterialUICard from "@material-ui/core/Card";
import styled from "@emotion/styled";
import { metrics } from "@soroha/components/styles";

export type CardType = "vertical" | "horizontal";

export type Props = {
  className?: string;
  title?: string;
  content?: string;
  img?: string;
  alt?: string;
  type?: CardType;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({
  className,
  title,
  content,
  img,
  alt,
  type,
  children,
}) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Content>{content}</Content>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled(MaterialUICard)`
  display: flex;
  padding: ${metrics.padding.card};
`;

const Title = styled.div``;

const Content = styled.div``;

export default Card;
