import styled from "@emotion/styled";
import { Avatar } from "@material-ui/core";
import { colors, metrics } from "@soroha/components/styles";
import React from "react";
import { boolean } from "yup";

export type Props = {
  className?: string;
  imagePath?: string;
  teamName?: string;
  userName?: string;
};

const UserIndicator: React.FC<Props> = ({
  className,
  imagePath,
  teamName,
  userName,
}) => {
  return (
    <Wrapper className={className}>
      {imagePath ? <Avator src={imagePath} alt="avator" /> : <Circle />}
      <Right>
        <UserName>{userName}</UserName>
        <TeamName>{teamName}</TeamName>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: ${metrics.borderRadius.container};
  display: flex;
  align-items: center;
  color: ${colors.textDarkBrown};
  margin: 0 10px;
`;

const Avator = styled.img`
  border-radius: ${metrics.borderRadius.circle};
`;

const Circle = styled.div`
  border-radius: ${metrics.borderRadius.circle}%;
  background-color: ${colors.gray};
  width: 50px;
  height: 50px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const TeamName = styled.div``;

const UserName = styled.div`
  font-weight: bold;
`;

export default UserIndicator;
