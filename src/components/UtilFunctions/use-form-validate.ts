export default () => {
  const validate = <T extends { price?: string; comment?: string }>(
    values: T,
  ) => {
    const errors: Partial<T> = {};
    if (values.price === "") {
      errors.price = "* 金額は必須です。";
    }
    if (values.comment === "") {
      errors.comment = "* コメントは必須です。";
    }
    try {
      values.price && parseInt(values.price);
    } catch {
      errors.price = "金額は数値を入力してください。";
    }
    return errors;
  };
  return { validate };
};
// export default <T extends { price?: string; comment?: string }>() => {
//   const validate = (values: T) => {
//     const errors: Partial<T> = {};
//     if (values.price === "") {
//       errors.price = "* 金額は必須です。";
//     }
//     if (values.comment === "") {
//       errors.comment = "* コメントは必須です。";
//     }
//     try {
//       values.price && parseInt(values.price);
//     } catch {
//       errors.price = "金額は数値を入力してください。";
//     }
//     return errors;
//   };
//   return { validate };
// };
