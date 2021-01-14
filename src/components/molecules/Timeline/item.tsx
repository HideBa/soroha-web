import React from "react";
import MaterialUITimelineItem from "@material-ui/lab/TimelineItem";
import styled from "@emotion/styled";
import Card from "@soroha/components/atoms/Card";
import {
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import Icon from "@soroha/components/atoms/icons";
import { Expense } from "./hooks";

export type Props = {
  className?: string;
  item?: Expense;
};

const TimelineItem: React.FC<Props> = ({ className, item }) => {
  return item ? (
    <StyledTimelineItem className={className}>
      <TimelineOppositeContent>
        <div>{item.createdAt}</div>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          {/* <Icon icon={item.icon} /> */}
          <Icon icon="summary" />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Card content={item.comment} type="horizontal" />
      </TimelineContent>
    </StyledTimelineItem>
  ) : null;
};

const StyledTimelineItem = styled(MaterialUITimelineItem)`
  background-color: red;
`;

export default TimelineItem;
