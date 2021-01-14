import { useCallback, useMemo, useState } from "react";

export type SelectableType = "team" | "me" | "me-in-team";
export type Expense = {
  slug: string;
  comment: string;
  isCalculated: false;
  price: number;
  createdAt: any;
  updatedAt: any; //TODO: must be typed later
};

export default (teamExpenses?: Expense[], myExpensesInTeam?: Expense[]) => {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);
  const options: {
    label: string;
    value: SelectableType;
    expenses?: Expense[];
  }[] = useMemo(
    () => [
      {
        label: "チーム",
        value: "team",
        expenses: teamExpenses,
      },
      // {
      //   label: "自分",
      //   value: "me",
      // },
      {
        label: "チーム内自分",
        value: "me-in-team",
        expenses: myExpensesInTeam,
      },
    ],
    [myExpensesInTeam, teamExpenses],
  );
  const handleSelectChange = useCallback(
    (type: SelectableType) => {
      console.log("select change--", type);
      setExpenses(options.find((o) => o.value === type)?.expenses ?? []);
    },
    [options],
  );
  return { handleSelectChange, options, expenses };
};
