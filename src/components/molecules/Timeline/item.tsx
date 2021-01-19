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
  onExpenseUpdate?: (price: number, comment: string, slug: string) => void;
};

const TimelineItem: React.FC<Props> = ({
  className,
  item,
  onExpenseUpdate,
}) => {
  const [isEditing, setEditing] = useState(false);

  const startEditing = () => setEditing(true);

  const updateExpense = useCallback(
    (price: number, comment: string, slug: string) => {
      if (!slug || !onExpenseUpdate) return;
      onExpenseUpdate(price, comment, slug);
      setEditing(false);
    },
    [onExpenseUpdate],
  );

  return item ? (
    <StyledTimelineItem className={className}>
      <StyledTimelineOppositeContent>
        <DateTime>{dayjs(item.updatedAt).format("MM/DD")}</DateTime>
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
              submitButton={
                <StyledIcon icon="done" color={colors.textDarkBrown} />
              }
              slug={item.slug}
              onSend={updateExpense}
            />
          ) : (
            <ContentWrapper>
              <ContentContainer>
                <IsCalculated>
                  {item.isCalculated ? "精算済み" : "未精算"}
                </IsCalculated>
                <Price>￥{item.price}</Price>
                <Comment>{item.comment}</Comment>
              </ContentContainer>
            </ContentWrapper>
          )}
          {!isEditing && !item.isCalculated && (
            <StyledIcon
              icon="pen"
              color={colors.textDarkBrown}
              onClick={startEditing}
            />
          )}
          <TrashIcon icon="trash" color={colors.textDarkBrown} onClick={} />
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
  right: 75px;
  top: 20px;
  box-shadow: 3px 3px 10px gray;
`;

const TrashIcon = styled(StyledIcon)`
  right: 30px;
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
