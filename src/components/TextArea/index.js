import React from "react";

import { StyledTextArea } from "./styles";

function TextArea({ onChange, ...rest }) {
  function handleChange(e) {
    const { value } = e.currentTarget;

    if (onChange) onChange(value);
  }

  return <StyledTextArea onChange={handleChange} {...rest} />;
}

export default TextArea;
