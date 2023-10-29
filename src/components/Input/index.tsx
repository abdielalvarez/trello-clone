import React, { ChangeEvent } from 'react';
import {
  InputContainer,
  Label,
  InputField,
  ErrorMessage
} from '@/styles/components/Input/index.style'
import {
  InputContentInfo,
  IsValidType,
  ValidationRules,
  validateInput
} from '@/utils/validations';

interface DynamicInputType {
  type: string
  label: string
  placeholder?: string
  inputData: InputContentInfo
  name: string
  validationRules?: ValidationRules
  onChange: (e: ChangeEvent<HTMLInputElement>, isValid: IsValidType) => void;
  onBlur: (name: string, isValid: IsValidType) => void
}

const DynamicInput = ({
  type,
  label,
  placeholder,
  inputData,
  name,
  validationRules,
  onChange,
  onBlur
}: DynamicInputType) => {

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (validationRules) {
      const isValid = validateInput(e.target.value, validationRules);
      onChange(e, isValid)
    }
  }

  const handleBlur = () => {
    if (validationRules) {
      const isValid = validateInput(inputData.value, validationRules);
      onBlur(name, isValid)
    }
  };

  const {
    value: isValid,
    message: errorMessage
  } = inputData.isValid || {
    value: null,
    message: ''
  }

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputData.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isValid !== null && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </InputContainer>
  );
};

export default DynamicInput;