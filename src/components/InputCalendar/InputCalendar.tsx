import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker-override.css';

interface InputCalendarProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  title: string;
  maxDate?: Date | null;
  includeDates?: Date[];
  placeholderText?: string;
}

export const InputCalendar: React.FC<InputCalendarProps> = ({
  title,
  selected,
  onChange,
  maxDate,
  includeDates,
  placeholderText,
}) => {
  return (
    <div>
      <span>{title}</span>
      <DatePicker
        dateFormat='MMMM d, yyyy'
        maxDate={maxDate}
        placeholderText={placeholderText}
        selected={selected}
        onChange={onChange}
        includeDates={includeDates}
      />
    </div>
  );
};
