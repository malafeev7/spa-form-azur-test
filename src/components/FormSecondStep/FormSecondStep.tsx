import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Title, Box, BoxExactTime, ExactTime, TypeCall, ButtonNext } from './FormSecondStep.style';
import { InputCalendar } from 'components/InputCalendar';
import IconPhone from 'assets/img/IconPhone.svg';
import IconVideo from 'assets/img/IconVideo.svg';
import { FormContext } from 'components/context/FormContext';
import axios from 'axios';
import { SuccessfulEntry } from 'components/SuccessfulEntry';
import { formSecondStepTexts } from 'text';

interface TimeSlot {
  full: string;
  half: string[];
}

interface DateTime {
  id: number;
  date: string;
  times: TimeSlot[];
}

const API_URL = 'http://localhost:3000';

export const FormSecondStep = () => {
  const {
    name,
    email,
    weight,
    weightUnit,
    height,
    heightUnit,
    phoneCode,
    phone,
    startDate,
    bornInWeek,
    selectedDate,
    setSelectedDate,
    selectedTimeSlot,
    setSelectedTimeSlot,
    selectedHalfSlot,
    setSelectedHalfSlot,
    selectedTypeCall,
    setSelectedTypeCall,
    isSuccess,
    setIsSuccess,
  } = useContext(FormContext);

  const [dates, setDates] = useState<DateTime[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const combinedNumberPhone = `${phoneCode}${phone}`;

  useEffect(() => {
    if (selectedDate && selectedHalfSlot && selectedTimeSlot && selectedTypeCall) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [selectedDate, selectedHalfSlot, selectedTimeSlot, selectedTypeCall]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await axios.get(`${API_URL}/dates`);
        setDates(response.data);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, []);

  const handleDateChange = useCallback(
    (date: Date | null) => {
      setSelectedDate(date);
      setSelectedTimeSlot(null);
      setSelectedHalfSlot('');
      if (date) {
        const dateData = dates.find(
          (item) => new Date(item.date).toLocaleDateString() === date.toLocaleDateString(),
        );
        setTimeSlots(dateData ? dateData.times : []);
      }
    },
    [setSelectedDate, setSelectedTimeSlot, setSelectedHalfSlot, dates],
  );

  const handleTypeCallChange = useCallback(
    (type: React.SetStateAction<string>) => {
      setSelectedTypeCall(type);
    },
    [setSelectedTypeCall],
  );

  const handleNextClick = useCallback(async () => {
    const formState = {
      name,
      email,
      combinedNumberPhone,
      startDate,
      bornInWeek,
      weight,
      weightUnit,
      height,
      heightUnit,
      selectedDate,
      selectedHalfSlot,
      selectedTypeCall,
    };

    try {
      const response = await axios.post(`${API_URL}/records`, formState);
      console.log('New record created:', response.data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error creating record:', error);
    }
  }, [
    name,
    email,
    combinedNumberPhone,
    startDate,
    bornInWeek,
    weight,
    weightUnit,
    height,
    heightUnit,
    selectedDate,
    selectedHalfSlot,
    selectedTypeCall,
    setIsSuccess,
  ]);

  return isSuccess ? (
    <SuccessfulEntry />
  ) : (
    <Box>
      <Title>{formSecondStepTexts.title}</Title>
      <InputCalendar
        title='Select Date'
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText='Select date'
        includeDates={dates.map((item) => new Date(item.date))}
      />
      <div className='custom-select'>
        <span>{formSecondStepTexts.selectTimeSlot}</span>
        <select
          value={selectedTimeSlot?.full}
          onChange={(e) =>
            setSelectedTimeSlot(timeSlots.find((slot) => slot.full === e.target.value) ?? null)
          }>
          <option value=''>{formSecondStepTexts.selectTime}</option>
          {timeSlots.map((slot) => (
            <option key={slot.full} value={slot.full}>
              {slot.full}
            </option>
          ))}
        </select>
      </div>
      <span>{formSecondStepTexts.choseSlot}</span>
      <BoxExactTime>
        {selectedTimeSlot?.half.map((halfSlot, index) => (
          <ExactTime
            key={index}
            className={selectedHalfSlot === halfSlot ? 'active' : ''}
            onClick={() => setSelectedHalfSlot(halfSlot)}>
            {halfSlot}
          </ExactTime>
        ))}
      </BoxExactTime>
      <span>{formSecondStepTexts.selectType}</span>
      <BoxExactTime>
        <TypeCall
          className={selectedTypeCall === 'video' ? 'active' : ''}
          onClick={() => handleTypeCallChange('video')}>
          <img src={IconVideo} alt='iconVideo' width={38} height={32} />
          {formSecondStepTexts.typeVideo}
        </TypeCall>
        <TypeCall
          className={selectedTypeCall === 'audio' ? 'active' : ''}
          onClick={() => handleTypeCallChange('audio')}>
          <img src={IconPhone} alt='IconPhone' width={38} height={32} />
          {formSecondStepTexts.typeAudio}
        </TypeCall>
      </BoxExactTime>
      <ButtonNext disabled={!isFormComplete} onClick={handleNextClick}>
        {formSecondStepTexts.buttonNext}
      </ButtonNext>
    </Box>
  );
};
