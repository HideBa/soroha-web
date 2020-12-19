import styled from "@emotion/styled";
import { colors, metrics } from "@soroha/components/styles";
import React from "react";
import Select from "../Select";

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
  const handleTeamSwitch = (teamName: string) => onTeamSwitch?.(teamName);
  return (
    <Wrapper className={className}>
      {imagePath ? <Avator src={imagePath} alt="avator" /> : <Circle />}
      <StyledSelect
        options={teams?.map((t) => {
          return { value: t, label: t };
        })}
        defaultOption={{ value: teamName, label: teamName }}
        onSelect={handleTeamSwitch}
        value={{ value: teamName, label: teamName }}
      />
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

const StyledSelect = styled(Select)`
  margin: 0 10px;
`;

export default UserIndicator;
