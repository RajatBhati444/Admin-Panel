import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({
  id,
  label,
  placeholder,
  multiline,
  margin,
  variant,
  style,
  name,
  autoComplete,
  autoFocus,
  required,
  fullWidth,
  type,
  rows
}) => {
  const allProps = {
    id: id,
    label: label,
    placeholder: placeholder,
    multiline: multiline,
    margin: margin,
    variant: variant,
    style: style,
    name: name,
    fullWidth: fullWidth,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    required: required,
    type: type,
    rows: rows
  };
  return <TextField {...allProps} style={{ backgroundColor: "white" }} />;
};
export default Input;
