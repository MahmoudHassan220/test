import React from "react";

import { StyledTextField } from "./styles";

function TextField({ onChange, ...rest }) {
  function handleChange(e) {
    const { value } = e.currentTarget;

    if (onChange) onChange(value, e);
  }

  return <StyledTextField onChange={handleChange} {...rest} />;
}

export default TextField;
