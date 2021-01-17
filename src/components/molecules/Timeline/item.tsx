import React, { useCallback, useState } from "react";
import MaterialUITimelineItem from "@material-ui/lab/TimelineItem";
import styled from "@emotion/styled";
import Card from "@soroha/components/atoms/Card";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import Icon from "@soroha/components/atoms/icons";
import { Expense } from "./hooks";
import { colors, metrics } from "@soroha/components/styles";
import { Medium, Tiny } from "@soroha/components/styles/fonts";
import dayjs from "dayjs";
import EditingForm from "./Form";

export type Props = {
  className?: string;
  item?: Expense;
};

const TimelineItem: React.FC<Props> = ({ className, item }) => {
  const [isEditing, setEditing] = useState(false);

  const startEditing = () => setEditing(true);

  const endEditing = () => setEditing(false);

  const updateExpense = () => {
    console.log("update");
  };

  return item ? (
    <StyledTimelineItem className={className}>
      <StyledTimelineOppositeContent>
        <DateTime>{dayjs(item.createdAt).format("MM/DD")}</DateTime>
      </StyledTimelineOppositeContent>
      <TimelineSeparator>
        <StyledTimelineDot />
        <StyledTimelineConnector />
      </TimelineSeparator>
      <StyledTimelineContent>
        <Card type="horizontal">
          {isEditing ? (
            <EditingForm
              defaultValues={{
                price: String(item.price),
                comment: item.comment,
              }}
            />
          ) : (
            <ContentWrapper>
              <ContentContainer>
                <Comment>{item.comment}</Comment>
                <Price>￥{item.price}</Price>
                <IsCalculated>
                  {item.isCalculated ? "精算済み" : "未精算"}
                </IsCalculated>
              </ContentContainer>
            </ContentWrapper>
          )}
          {!isEditing && !item.isCalculated ? (
            <StyledIcon
              icon="pen"
              color={colors.textDarkBrown}
              onClick={startEditing}
            />
          ) : (
            <StyledIcon
              icon="done"
              color={colors.textDarkBrown}
              onClick={endEditing}
            />
          )}
        </Card>
      </StyledTimelineContent>
    </StyledTimelineItem>
  ) : null;
};

const StyledTimelineItem = styled(MaterialUITimelineItem)`
  padding: ${metrics.padding.timelineItem};
  display: flex;
  align-items: center;
  &:before {
    content: none;
  }
`;

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)`
  /* flex: 1; */
`;

const DateTime = styled.div`
  color: ${colors.textDarkBrown};
`;

const StyledTimelineDot = styled(TimelineDot)`
  /* flex: 1; */
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  min-height: 60px;
`;

const StyledTimelineContent = styled(TimelineContent)`
  /* flex: 2; */
  min-width: 200px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  /* flex: 2; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${metrics.padding.card};
`;

const StyledIcon = styled(Icon)`
  background-color: ${colors.whiteBrown};
  border-radius: ${metrics.borderRadius.circle}px;
  padding: ${metrics.padding.circleWrapper};
  cursor: pointer;
  &:hover {
    background-color: ${colors.orangeBrown};
  }
  position: absolute;
  right: 30px;
  top: 20px;
  box-shadow: 3px 3px 10px gray;
`;

const Comment = styled(Medium)`
  color: ${colors.textDarkBrown};
  margin: ${metrics.margin.cardText};
`;

const Price = styled(Tiny)`
  color: ${colors.textDarkBrown};
  margin: ${metrics.margin.cardText};
`;

const IsCalculated = styled(Tiny)`
  color: ${colors.textDarkBrown};
  margin: ${metrics.margin.cardText};
`;

export default TimelineItem;
