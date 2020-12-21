import React from "react";
import MaterialUISnackBar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "@emotion/styled";
import { colors, metrics } from "@soroha/components/styles";
import Icon from "../icons";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";

export type NotificationType = "notice" | "warning" | "alert";

export type Notification = {
  type: NotificationType;
  message: string;
};

export type Props = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  notification?: Notification;
};

const SnackBar: React.FC<Props> = ({
  className,
  isOpen = false,
  onClose,
  notification,
}) => {
  const handleClose = () => {
    onClose?.();
  };

  const isPC = useIsPC();

  return (
    <StyledSnackBar
      className={className}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      // message={notification && notification?.message}
    >
      <Bar type={notification?.type} isPC={isPC}>
        <IconWrapper>
          <StyledIcon icon="notice" />
          {notification?.message}
        </IconWrapper>
        <IconButton size="small" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Bar>
    </StyledSnackBar>
  );
};

const Bar = styled.div<{ type?: NotificationType; isPC: boolean }>`
  background: ${(props) =>
    props?.type === "alert"
      ? colors.alert
      : props?.type === "warning"
      ? colors.warning
      : colors.notice};
  padding: ${metrics.padding.buttonMediumFlat};
  color: ${colors.textDarkBrown};
  border-radius: ${metrics.borderRadius.button}px;
  min-width: 300px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  margin: 0 5px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const StyledSnackBar = styled(MaterialUISnackBar)``;

export default SnackBar;
