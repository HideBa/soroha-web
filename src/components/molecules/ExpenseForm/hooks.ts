import { ExpenseFormValues } from ".";

export default () => {
  const validate = (values: ExpenseFormValues) => {
    const errors: Partial<ExpenseFormValues> = {};
    if (values.price === "") {
      errors.price = "* 金額は必須です。";
    }
    if (values.comment === "") {
      errors.comment = "* コメントは必須です。";
    }
    try {
      parseInt(values.price);
    } catch {
      errors.price = "金額は数値を入力してください。";
    }
    return errors;
  };
  return { validate };
};
