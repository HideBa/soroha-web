import React, { CSSProperties } from "react";
import ReactSelect from "react-select";
import { colors } from "@soroha/components/styles";

export type Option = {
  value?: string;
  label?: string;
};

export type Props = {
  className?: string;
  defaultOption?: Option;
  onSelect?: (value: string) => void;
  options?: Option[];
  title?: string;
  isMulti?: boolean;
  value?: Option;
};

const Select: React.FC<Props> = ({
  className,
  defaultOption,
  onSelect,
  options,
  title,
  isMulti = false,
  value,
}) => {
  const handleSelect = (newValue: any) => {
    if (!newValue) return;
    onSelect?.(newValue.value);
  };
  const colorStyle = {
    control: (
      styles: CSSProperties | undefined,
      { isFocused }: { isFocused: boolean },
    ) => ({
      ...styles,
      backgroundColor: colors.lightGreen,
      width: "200px",
      cursor: "pointer",
      margin: "5px",
      minHeight: "none",
      color: colors.textDarkBrown,
      borderColor: isFocused ? colors.whiteBrown : colors.gray,
      ":hover": {
        backgroundColor: colors.deepGreen,
        borderColor: colors.gray,
      },
      ":focus": {
        outlineColor: colors.gray,
      },
    }),
    option: (
      styles: CSSProperties | undefined,
      { isDisabled, isSelected }: { isDisabled: boolean; isSelected: boolean },
    ) => {
      return {
        ...styles,
        backgroundColor: isSelected ? colors.deepGreen : colors.lightGreen,
        width: "100%",
        ":hover": {
          ...(styles as any)[":hover"],
          backgroundColor: colors.deepGreen,
        },
      };
    },
    menu: (styles: CSSProperties | undefined) => ({
      ...styles,
      background: colors.deepGreen,
    }),
    valueContainer: (styles: CSSProperties | undefined) => ({
      ...styles,
    }),
  };

  return (
    <ReactSelect
      name={title}
      defaultValue={defaultOption}
      placeholder={defaultOption?.label}
      className={className}
      options={options}
      onChange={handleSelect}
      isMulti={isMulti}
      value={value}
      styles={colorStyle}
      defaultInputValue={defaultOption?.label}
    ></ReactSelect>
  );
};

export default Select;
