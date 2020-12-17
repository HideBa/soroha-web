import React, { useState } from "react";
// import { Dropdown } from "rsuite";
import styled from "@emotion/styled";
import PullDownItem from "./item";
import ReactSelect from "react-select";
// import { DropdownTrigger } from "rsuite/lib/Dropdown";

export type Props = {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  options?: Options;
  title?: string;
  // trigger?: DropdownTrigger;
};

export type Options = {
  value: string;
  label: string;
}[];

const Select: React.FC<Props> = ({
  className,
  value,
  onChange,
  children,
  options,
  title,
  // trigger,
}) => {
  const [selected, select] = useState(value);
  const handleChange = (value: string) => {
    console.log("new----", value);
    select(value);
  };
  console.log(options);
  // const convertedOptions = options?.map((o) => {
  //   return { value: o, label: o };
  // });
  return (
    <StyledSelect
      name={title}
      defaultValue={selected}
      className={className}
      options={options}
      onChange={handleChange}
      isMulti={false}
      value={selected}
    >
      {options?.map((o) => (
        <StyledOption value={o} key={o}>
          {o}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled(ReactSelect)`
  width: 200px;
`;

const StyledOption = styled.option``;

export default Select;
