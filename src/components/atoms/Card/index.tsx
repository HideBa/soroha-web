import React from "react";
import MaterialUICard from "@material-ui/core/Card";
import styled from "@emotion/styled";

export type CardType = "vertical" | "horizontal";

export type Props = {
  className?: string;
  title?: string;
  content?: string;
  img?: string;
  alt?: string;
  type?: CardType;
};

const Card: React.FC<Props> = ({
  className,
  title,
  content,
  img,
  alt,
  type,
}) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledCard>
  );
};

const StyledCard = styled(MaterialUICard)`
  display: flex;
  color: red;
`;

const Title = styled.div``;

const Content = styled.div``;

export default Card;
