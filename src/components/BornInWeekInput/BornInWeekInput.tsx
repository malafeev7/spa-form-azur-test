import React from 'react';
import { default as IconCheckDone } from 'assets/img/IconCheckDone.svg';
import { default as IconCheckUnDone } from 'assets/img/IconCheckUnDone.svg';
import { CheckBox, Box } from './BornInWeekInput.style';
import { Input } from 'components/Input';
import { bornInWeekInputTexts } from 'text';

interface BornInWeekInputProps {
  isYesSelected: boolean;
  bornInWeek: number | '';
  setIsYesSelected: (value: boolean) => void;
  setBornInWeek: (value: number | '') => void;
}

const MIN_COUNT = 20;
const MAX_COUNT = 36;

export const BornInWeekInput: React.FC<BornInWeekInputProps> = ({
  isYesSelected,
  bornInWeek,
  setIsYesSelected,
  setBornInWeek,
}) => {
  return (
    <Box>
      <span>{bornInWeekInputTexts.title}</span>
      <CheckBox>
        <img
          src={isYesSelected ? IconCheckUnDone : IconCheckDone}
          onClick={() => isYesSelected && setIsYesSelected(!isYesSelected)}
          alt='iconSelected'
        />
        {bornInWeekInputTexts.selectOne}
      </CheckBox>
      <CheckBox>
        <img
          src={isYesSelected ? IconCheckDone : IconCheckUnDone}
          onClick={() => !isYesSelected && setIsYesSelected(!isYesSelected)}
          alt='iconSelected'
        />
        {bornInWeekInputTexts.selectTwo}
      </CheckBox>
      {isYesSelected && (
        <Input
          type='number'
          min={MIN_COUNT}
          max={MAX_COUNT}
          value={bornInWeek.toString()}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            if (val >= MIN_COUNT && val <= MAX_COUNT) {
              setBornInWeek(val);
            }
          }}
          title='Born in weeks'
        />
      )}
    </Box>
  );
};
