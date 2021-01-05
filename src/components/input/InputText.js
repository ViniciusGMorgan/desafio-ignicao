import React, { useState, useEffect } from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export function InputText(props, ref) {
  const {
    autoComplete = "on",
    disabled = false,
    inputError,
    feedback = "",
    formStyle,
    label = "",
    loading = false,
    min = 0,
    max = 0,
    maxLength = null,
    minLength = 0,
    name = "",
    placeholder = "",
    readOnly = false,
    required = false,
    value = "",
    title = "",
    type = "text",
  } = props;

  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setError(inputError, inputValue);
  }, [inputError, inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    setError(!value);

    if (!props.onChange) return;
    props.onChange(e.target);
  };

  const validateInput = (e) => {
    setError(!inputValue && !readOnly && required);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <FormGroup title={title} style={formStyle}>
      {label && (
        <Label style={{ whiteSpace: "nowrap" }} for={name}>{`${label}${
          required ? "*" : ""
        }`}</Label>
      )}
      <Input
        type={type}
        name={name}
        id={name}
        min={min}
        max={max}
        ref={ref}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        disabled={disabled || loading}
        onBlur={validateInput}
        onChange={handleChange}
        onFocus={props.onFocus}
        value={inputValue || ""}
        invalid={error}
        readOnly={readOnly}
        autoComplete={autoComplete}
      />
      <FormFeedback>{feedback}</FormFeedback>
    </FormGroup>
  );
}
