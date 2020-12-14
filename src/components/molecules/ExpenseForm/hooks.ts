import { ExpenseFormValues } from ".";

export default () => {
  const validate = (values: ExpenseFormValues) => {
    const errors: Partial<ExpenseFormValues> = {};
    if (values.price === "") {
      errors.price = "* price is required";
    }
    if (values.comment === "") {
      errors.comment = "* comment is required";
    }
    try {
      parseInt(values.price);
    } catch {
      errors.price = "price should be number";
    }
  };
  return { validate };
};
