import React from "react";
import MaterialUITimeline from "@material-ui/lab/Timeline";
import styled from "@emotion/styled";
import TimelineItem from "./item";
import Select from "@soroha/components/atoms/Select";
import useHooks, { SelectableType } from "./hooks";
import { Expense as ExpenseType } from "./hooks";
import { colors, metrics } from "@soroha/components/styles";

export type Expense = ExpenseType;

export type Props = {
  className?: string;
  teamExpenses?: Expense[];
  myExpensesInTeam?: Expense[];
  updateExpenseBySlug?: (price: number, comment: string, slug: string) => void;
};

const Timeline: React.FC<Props> = ({
  className,
  teamExpenses,
  myExpensesInTeam,
  updateExpenseBySlug,
}) => {
  const defaultOption: { value: SelectableType; label: string } = {
    value: "team",
    label: "チーム",
  };
  const { handleSelectChange, options, expenses } = useHooks(
    teamExpenses,
    myExpensesInTeam,
    defaultOption.value,
  );
  return (
    <Wrapper>
      <Select
        options={options}
        defaultOption={defaultOption}
        onSelect={handleSelectChange}
      />
      <StyledTimeline className={className}>
        {expenses?.map((expense, i) => (
          <TimelineItem
            item={expense}
            key={i}
            onExpenseUpdate={updateExpenseBySlug}
          />
        ))}
      </StyledTimeline>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledTimeline = styled(MaterialUITimeline)`
  background-color: ${colors.orangeBrown};
  border-radius: ${metrics.borderRadius.container}px;
  padding: ${metrics.padding.timeline};
  margin: ${metrics.margin.timeline};
`;

export default Timeline;
