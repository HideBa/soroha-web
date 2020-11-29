import styled from "@emotion/styled";
import React from "react";
import RawAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { default as MaterialUIAccordion } from "@material-ui/core/Accordion";
import Icon, { Icons } from "../icons";
import { colors } from "@soroha/components/styles";

export type Props = {
  className?: string;
  title?: string;
  icon?: Icons;
  content?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

const Accordion: React.FC<Props> = ({
  className,
  title,
  icon,
  content,
  children,
  disabled = false,
}) => {
  return (
    <MaterialUIAccordion className={className} disabled={disabled}>
      <AccordionSummary expandIcon={<Icon icon="dropDown" />}>
        <Title>{title}</Title>
        <StyledIcon icon={icon} />
      </AccordionSummary>
      <AccordionDetails>
        {content}
        {children}
      </AccordionDetails>
    </MaterialUIAccordion>
  );
};

const Title = styled.div``;

const StyledIcon = styled(Icon)`
  margin: 0 5px;
`;

const AccordionSummary = styled(RawAccordionSummary)`
  :hover {
    background-color: ${colors.whiteBrown};
  }
`;

export default Accordion;
