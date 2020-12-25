import React from "react";
import MaterialUITimeline from "@material-ui/lab/Timeline";
import styled from "@emotion/styled";
import TimelineItem, { TimelineItem as TimelineItemType } from "./item";

export type Props = {
  className?: string;
  items?: TimelineItemType[];
};

const Timeline: React.FC<Props> = ({ className, items }) => {
  return (
    <StyledTimeline className={className}>
      {items?.map((item, i) => (
        <TimelineItem item={item} key={i} />
      ))}
    </StyledTimeline>
  );
};

const StyledTimeline = styled(MaterialUITimeline)``;

export default Timeline;
