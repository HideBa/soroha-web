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
import Icon, { Icons } from "@soroha/components/atoms/icons";

export type TimelineItem = {
  title: string;
  content?: string;
  icon?: Icons;
  time?: string;
};

export type Props = {
  className?: string;
  item?: TimelineItem;
};

const TimelineItem: React.FC<Props> = ({ className, item }) => {
  return item ? (
    <StyledTimelineItem className={className}>
      <TimelineOppositeContent>
        <div>{item.time}</div>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <Icon icon={item.icon} />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Card title={item.title} content={item.content} type="horizontal" />
      </TimelineContent>
    </StyledTimelineItem>
  ) : null;
};

const StyledTimelineItem = styled(MaterialUITimelineItem)`
  background-color: red;
`;

export default TimelineItem;
