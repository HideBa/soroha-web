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
  teams?: string[];
  onGetTeams?: () => void;
};

const Team: React.FC<Props> = ({
  className,
  onTeamCreate,
  teams,
  onGetTeams,
}) => {
  const {
    isClosableBoxVisible,
    toggleClosableBox,
    teamName,
    handleTeamNameChange,
    handleTeamCreate,
    switchTeam,
    currentTeam,
  } = useHooks({ createTeam: onTeamCreate, getTeams: onGetTeams });
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
      <StyledAccordion title="チーム切り替え" icon="switch">
        <div>
          {teams &&
            teams.map(t => {
              return (
                <TeamNameContainer key={t}>
                  <Title onClick={() => switchTeam(t)}>{t}</Title>
                  <CurrentTeamIndicator
                    icon="selected"
                    alt="selected team"
                    // color={colors.lightGreen}
                    color="red"
                    visible={t === currentTeam}
                  />
                </TeamNameContainer>
              );
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
  :hover {
    background-color: ${colors.whiteBrown};
  }
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

const TeamNameContainer = styled.div`
  :hover {
    background-color: ${colors.whiteBrown};
  }
  display: flex;
`;

const CurrentTeamIndicator = styled(Icon)<{ visible?: boolean }>`
  display: ${props => !props.visible && "none"};
`;

export default Team;
