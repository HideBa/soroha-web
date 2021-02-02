import styled from "@emotion/styled";
import Icon from "@soroha/components/atoms/icons";
import { colors } from "@soroha/components/styles";
import React from "react";

export type Props = {
  className?: string;
  users?: string[];
  onAddUserOnTeam?: (username: string) => void;
};

const Users: React.FC<Props> = ({ className, users, onAddUserOnTeam }) => {
  return (
    <Wrapper>
      {users?.map((u) => {
        return (
          <UserContainer key={u}>
            <Icon
              icon="add"
              text={`${u}を現在のチームに追加`}
              color={colors.gray}
              size={20}
            />
            <UserName>{u}</UserName>
          </UserContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  display: flex;
  &:hover {
    background-color: ${colors.whiteBrown};
  }
`;

const UserName = styled.div``;

export default Users;
