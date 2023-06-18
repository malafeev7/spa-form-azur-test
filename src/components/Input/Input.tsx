import React from 'react';
import { InputWrapper, InputField } from './Input.style';

enum InputType {
  TEXT = 'text',
}

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  title: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

export const Input = ({
  type = InputType.TEXT,
  value,
  onChange,
  placeholder,
  title,
  min,
  max,
}: InputProps) => {
  return (
    <InputWrapper>
      <span>{title}</span>
      <InputField
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </InputWrapper>
  );
};
