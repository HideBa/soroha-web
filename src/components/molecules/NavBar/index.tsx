import React from "react";
import NavLink, { LinkType, LinkIcon } from "@soroha/components/atoms/NavLink";
import styled from "@emotion/styled";
import MenuBarCircle from "@soroha/components/atoms/MenuBarCircle";
import { Notification } from "@soroha/recoil/atoms";
import SnackBar from "@soroha/components/atoms/SnackBar";

export type Props = {
  className?: string;
  links?: LinkType[];
  isPC?: boolean;
  openModal?: () => void;
  notification?: Notification;
  onNotificationClose?: () => void;
};

const NavBar: React.FC<Props> = ({
  className,
  links,
  isPC,
  openModal,
  notification,
  onNotificationClose,
}) => {
  return (
    <>
      {!isPC && (
        <NavBarWrapper className={className}>
          <SnackBar
            notification={notification}
            onClose={onNotificationClose}
            isOpen={!!notification}
          />
          <Wrapper>
            {links &&
              links.map((link, i) => {
                return (
                  i < 2 && <NavLink key={(link as LinkIcon).icon} link={link} />
                );
              })}
          </Wrapper>
          <MenuBarCircle onClick={openModal} />
          <Wrapper>
            {links &&
              links.map((link, i) => {
                return (
                  i > 1 && <NavLink key={(link as LinkIcon).icon} link={link} />
                );
              })}
          </Wrapper>
        </NavBarWrapper>
      )}
    </>
  );
};

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
`;

export default NavBar;
