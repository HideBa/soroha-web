import styled from "@emotion/styled";
import Accordion from "@soroha/components/atoms/Accordion";
import { colors, fonts, metrics } from "@soroha/components/styles";
import React from "react";
import Icon from "../icons";

export type Props = {
  className?: string;
  imagePath?: string;
  teamName?: string;
  userName?: string;
  teams?: string[];
  onTeamSwitch?: (teamName: string) => void;
};

const UserIndicator: React.FC<Props> = ({
  className,
  imagePath,
  teamName,
  userName,
  teams,
  onTeamSwitch,
}) => {
  return (
    <Wrapper className={className}>
      {imagePath ? <Avator src={imagePath} alt="avator" /> : <Circle />}
      <Right>
        <RightContainer>
          <UserName>{userName}</UserName>
        </RightContainer>
        <RightContainer>
          <StyledIcon icon="team" />
          <StyledAccordion title={teamName} icon="switch">
            <div>
              {teams &&
                teams.map((t) => {
                  return <TeamName key={t}>{t}</TeamName>;
                })}
            </div>
          </StyledAccordion>
          <TeamName>{teamName}</TeamName>
        </RightContainer>
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

const RightContainer = styled.div`
  display: flex;
`;

const StyledIcon = styled(Icon)`
  margin: 0 5px 0 0;
`;

const StyledAccordion = styled(Accordion)`
  margin: 5px;
  z-index: 2;
`;

const TeamName = styled.div`
  font-weight: bold;
`;

const UserName = styled.div`
  font-size: ${fonts.size.small}px;
`;

export default UserIndicator;
