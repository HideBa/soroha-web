import React from "react";
import { colors, metrics } from "@soroha/components/styles";
import NavLink, { LinkType } from "@soroha/components/atoms/NavLink";
import Logo from "@soroha/components/atoms/Logo";
import styled from "@emotion/styled";
import UserIndicator from "@soroha/components/atoms/User";
import SnackBar from "@soroha/components/atoms/SnackBar";
import { Notification as NotificationType } from "@soroha/components/atoms/SnackBar";

export type Notification = NotificationType;

export type Props = {
  links?: LinkType[];
  isPC?: boolean;
  userName?: string;
  teamName?: string;
  teams?: string[];
  switchTeam?: (teamName: string) => void;
  notification?: Notification;
  onNotificationClose?: () => void;
};

const Header: React.FC<Props> = ({
  links,
  isPC,
  userName,
  teamName,
  teams,
  switchTeam,
  notification,
  onNotificationClose,
}) => {
  return (
    <>
      {isPC ? (
        <PCWrapper className="header">
          <SnackBar
            notification={notification}
            onClose={onNotificationClose}
            isOpen={!!notification}
          />
          <LeftWrapper>
            <NavLink key="logo" link={{ type: "child", linkTo: "/" }}>
              <Logo />
            </NavLink>
            <UserIndicator
              userName={userName}
              teamName={teamName}
              teams={teams}
              onTeamSwitch={switchTeam}
            />
          </LeftWrapper>
          <RightWrapper>
            {links &&
              links.map((l, i) => {
                return <NavLink key={i} link={l} />;
              })}
          </RightWrapper>
        </PCWrapper>
      ) : (
        <SPWrapper className="header">
          <Logo isPC={isPC} className="logo" />
        </SPWrapper>
      )}
    </>
  );
};

const PCWrapper = styled.div`
  background-color: ${colors.lightGreen};
  padding: ${metrics.padding.header};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const SPWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${metrics.padding.header};
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const RightWrapper = styled.div`
  display: flex;
`;

export default Header;
