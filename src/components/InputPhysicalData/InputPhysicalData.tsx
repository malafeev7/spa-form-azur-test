import React from 'react';
import { InputBox, Input } from './InputPhysicalData.style';

interface InputPhysicalDataProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUnitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  type?: string;
  titleInput: string;
  titleSelect: string;
  paramsOptionFirst?: string;
  paramsOptionSecond?: string;
}

export const InputPhysicalData = ({
  type,
  value,
  onUnitChange,
  onChange,
  titleInput,
  titleSelect,
  paramsOptionFirst,
  paramsOptionSecond,
}: InputPhysicalDataProps) => {
  return (
    <InputBox>
      <div>
        <span>{titleInput}</span>
        <Input type={type} value={value} onChange={onChange} />
      </div>
      <div className='custom-select'>
        <span>{titleSelect}</span>
        <select onChange={onUnitChange}>
          <option value={paramsOptionFirst}>{paramsOptionFirst}</option>
          <option value={paramsOptionSecond}>{paramsOptionSecond}</option>
        </select>
      </div>
    </InputBox>
  );
};
