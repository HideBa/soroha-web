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
import { colors, metrics } from "@soroha/components/styles";
import { Medium, Tiny } from "@soroha/components/styles/fonts";

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
        <Card type="horizontal">
          <ContentWrapper>
            <Comment>{item.comment}</Comment>
            <Price>￥{item.price}</Price>
          </ContentWrapper>
        </Card>
      </TimelineContent>
    </StyledTimelineItem>
  ) : null;
};

// type CommentProps = {
//   comment: string;
// };

// const Comment: React.FC<CommentProps> = ({ className, comment }) => {
//   return <CommentWrapper>{comment}</CommentWrapper>;
// };

const StyledTimelineItem = styled(MaterialUITimelineItem)`
  padding: ${metrics.padding.timelineItem};
  margin: ${metrics.margin.timelineItem};
  background-color: ${colors.orangeBrown};
  box-shadow: 3px 3px 8px gray;
  /* box-shadow: 0px 8px 16px -2px rgba(10, 10, 10, 0.1),
    0px 0px 0px 1px rgba(123, 123, 123, 0.02); */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${metrics.padding.card};
`;

const Comment = styled(Medium)`
  color: ${colors.textDarkBrown};
`;

const Price = styled(Tiny)`
  color: ${colors.textDarkBrown};
`;

export default TimelineItem;
