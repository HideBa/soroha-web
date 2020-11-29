import styled from "@emotion/styled";
import Accordion from "@soroha/components/atoms/Accordion";
import FormInput from "@soroha/components/atoms/FormInput";
import FormSubmit from "@soroha/components/atoms/FormSubmit";
import Icon from "@soroha/components/atoms/icons";
import { colors } from "@soroha/components/styles";
import React from "react";

import useHooks from "./hooks";

export type Props = {
  className?: string;
  onTeamCreate?: (teamName: string) => void;
};

const Team: React.FC<Props> = ({ className, onTeamCreate }) => {
  const {
    isClosableBoxVisible,
    toggleClosableBox,
    teamName,
    handleTeamNameChange,
    handleTeamCreate,
    teams,
  } = useHooks({ createTeam: onTeamCreate });
  console.log(teams);
  return (
    <Wrapper>
      <Item>
        <Title onClick={() => toggleClosableBox(!isClosableBoxVisible)}>
          {isClosableBoxVisible ? (
            "キャンセル"
          ) : (
            <Icon
              icon="add"
              text="新規チーム"
              color={colors.gray}
              size={20}
            ></Icon>
          )}
        </Title>
        <ClosableItemContainer visible={isClosableBoxVisible}>
          <InputTitle>チーム名</InputTitle>
          <StyledInput value={teamName} onChange={handleTeamNameChange} />
          <CreateButton type="button" text="作成" onClick={handleTeamCreate}>
            作成
          </CreateButton>
        </ClosableItemContainer>
      </Item>
      <StyledAccordion title="チーム一覧">
        <div>
          {teams.map(t => {
            console.log(t);
            return <Title key={t}>{t}</Title>;
          })}
        </div>
      </StyledAccordion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ClosableItemContainer = styled.div<{ visible: boolean }>`
  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
`;

const InputTitle = styled.div``;

const Title = styled.div`
  cursor: pointer;
  padding: 15px;
`;

const StyledInput = styled(FormInput)`
  margin: 0 10px;
`;

const CreateButton = styled(FormSubmit)`
  margin: 0px;
  width: 100px;
`;

const StyledAccordion = styled(Accordion)`
  margin: 15px 0;
  width: 100%;
`;

export default Team;
