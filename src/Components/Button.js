import React from "react";
import Button from "@material-ui/core/Button";
const ButtonUi = ({ variant, color, name, fullWidth, style }) => {
  const buttonProps = {
    variant: variant,
    color: color,
    name: name,
    fullWidth,
    style: style
  };
  return (
    <div>
      <Button
        {...buttonProps}
        style={{ color: "black", width: "12vw", fontfamily: "sans-serif bold" }}
      >
        {buttonProps.name}
      </Button>
    </div>
  );
};
export default ButtonUi;
