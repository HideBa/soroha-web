import React from "react";
import MaterialUITimeline from "@material-ui/lab/Timeline";
import styled from "@emotion/styled";
import TimelineItem from "./item";
import Select from "@soroha/components/atoms/Select";
import useHooks from "./hooks";
import { Expense as ExpenseType } from "./hooks";

export type Expense = ExpenseType;

export type Props = {
  className?: string;
  teamExpenses?: Expense[];
  myExpensesInTeam?: Expense[];
};

const Timeline: React.FC<Props> = ({
  className,
  teamExpenses,
  myExpensesInTeam,
}) => {
  const { handleSelectChange, options, expenses } = useHooks(
    teamExpenses,
    myExpensesInTeam,
  );
  console.log(expenses);
  return (
    <Wrapper>
      <Select
        options={options}
        defaultOption={{ value: "team", label: "チーム" }}
        onSelect={handleSelectChange}
      />
      <StyledTimeline className={className}>
        {expenses?.map((expense, i) => (
          <TimelineItem item={expense} key={i} />
        ))}
      </StyledTimeline>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledTimeline = styled(MaterialUITimeline)``;

export default Timeline;
