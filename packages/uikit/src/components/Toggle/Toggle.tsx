import React from "react";
import { Flex } from "../Box";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<React.PropsWithChildren<ToggleProps>> = ({
  checked,
  defaultColor = "input",
  checkedColor = "success",
  scale = scales.LG,
  startIcon,
  endIcon,
  ...props
}) => {
  const isChecked = !!checked;

  return (
    <>
    </>
  );
};

export default Toggle;
