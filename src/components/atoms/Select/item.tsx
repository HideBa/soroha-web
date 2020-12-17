import React from "react";
import styled from "@emotion/styled";
// import { Dropdown } from "rsuite";

export type Props = {
  className?: string;
  value?: string;
  label?: string;
};

const PullDownItem: React.FC<Props> = ({ className, value, label }) => {
  return (
    <div></div>
    // <StyledDropDownItem value={value} className={className} eventKey={value}>
    //   {label}
    // </StyledDropDownItem>
  );
};

// const StyledDropDownItem = styled(Dropdown.Item)``;

export default PullDownItem;
