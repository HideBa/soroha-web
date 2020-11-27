import styled from "@emotion/styled";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import React, { useState } from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { default as MaterialUIAccordion } from "@material-ui/core/Accordion";
import Icon from "../icons";

export type Props = {
  className?: string;
  title?: string;
  content?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

const Accordion: React.FC<Props> = ({
  className,
  title,
  content,
  children,
  disabled = false,
}) => {
  return (
    <MaterialUIAccordion disabled={disabled}>
      <AccordionSummary expandIcon={<Icon icon="dropDown" />}>
        <Title>{title}</Title>
      </AccordionSummary>
      <AccordionDetails>
        {content}
        {children}
      </AccordionDetails>
    </MaterialUIAccordion>
  );
};

const Title = styled.div``;

export default Accordion;
