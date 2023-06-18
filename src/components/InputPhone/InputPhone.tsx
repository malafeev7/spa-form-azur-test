import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './input-phone.css';
import { Box, Input } from './InputPhone.style';

interface InputPhoneProps {
  value: string;
  valuePhone: string;
  onChange: (
    value: string,
    country: {},
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) => void;
  onChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder?: string;
}

export const InputPhone = ({
  value,
  valuePhone,
  onChange,
  onChangePhone,
  title,
  placeholder,
}: InputPhoneProps) => {
  return (
    <Box>
      <span>{title}</span>
      <div>
        <PhoneInput
          value={value}
          onChange={onChange}
          inputProps={{
            readOnly: true,
          }}
        />
        <Input value={valuePhone} onChange={onChangePhone} placeholder={placeholder} />
      </div>
    </Box>
  );
};
