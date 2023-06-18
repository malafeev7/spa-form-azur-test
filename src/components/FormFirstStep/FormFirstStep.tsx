import React, { useContext, useCallback, useState } from 'react';
import {
  Box,
  ButtonBack,
  StepPagination,
  StepLine,
  Title,
  ButtonNext,
} from './FormFirstStep.style';
import { default as IconBack } from 'assets/img/IconBack.svg';
import { Input } from 'components/Input';
import { InputCalendar } from 'components/InputCalendar';
import { BornInWeekInput } from 'components/BornInWeekInput';
import { InputPhysicalData } from 'components/InputPhysicalData';
import { InputPhone } from 'components/InputPhone';
import { FormSecondStep } from 'components/FormSecondStep';
import { FormContext } from 'components/context/FormContext';
import axios from 'axios';
import { AlreadyAppliedEmail } from 'components/AlreadyAppliedEmail';
import { formFirstStepTexts } from 'text';

interface Record {
  email: string;
}

const createInputChangeHandler =
  (set: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    set(event.target.value);
  };

const createSelectChangeHandler =
  (set: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLSelectElement>) => {
    set(event.target.value);
  };

const ACTIVE_CLASS = 'active';
const HIDE_CLASS = 'hide';

export const FormFirstStep: React.FC = () => {
  const {
    currentStep,
    setCurrentStep,
    name,
    setName,
    email,
    setEmail,
    weight,
    setWeight,
    setWeightUnit,
    height,
    setHeight,
    setHeightUnit,
    phoneCode,
    setPhoneCode,
    phone,
    setPhone,
    startDate,
    setStartDate,
    isYesSelected,
    setIsYesSelected,
    bornInWeek,
    setBornInWeek,
    isButtonDisabled,
    isSuccess,
  } = useContext(FormContext);

  const [emailDone, setEmailDone] = useState(false);

  const handleNameChange = createInputChangeHandler(setName);
  const handleEmailChange = createInputChangeHandler(setEmail);
  const handleWeightChange = createInputChangeHandler(setWeight);
  const handleHeightChange = createInputChangeHandler(setHeight);
  const handleWeightUnitChange = createSelectChangeHandler(setWeightUnit);
  const handleHeightUnitChange = createSelectChangeHandler(setHeightUnit);

  const handlePhoneChange = useCallback(
    (event: { target: { value: string } }) => {
      const onlyNumbers = event.target.value.replace(/[^0-9]/g, '');
      const max10Number = onlyNumbers.slice(0, 10);
      setPhone(max10Number);
    },
    [setPhone],
  );

  const checkEmailExist = useCallback(async (email: string): Promise<boolean> => {
    try {
      const response = await axios.get<Record[]>('http://localhost:3000/records');
      return response.data.some((record) => record.email === email);
    } catch (error) {
      console.error('Ошибка при проверке существования электронной почты:', error);
      return false;
    }
  }, []);

  const nextStep = useCallback(async () => {
    if (!isButtonDisabled) {
      const emailExists = await checkEmailExist(email);

      if (emailExists) {
        setEmailDone((prev) => !prev);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  }, [isButtonDisabled, email, checkEmailExist, setCurrentStep]);

  const backStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep, setCurrentStep]);

  return (
    <Box>
      {emailDone ? (
        <AlreadyAppliedEmail />
      ) : (
        <>
          <ButtonBack className={isSuccess ? HIDE_CLASS : ''} onClick={backStep}>
            <img src={IconBack} alt='IconBack' />
            {formFirstStepTexts.buttonBack}
          </ButtonBack>
          <StepPagination className={isSuccess ? HIDE_CLASS : ''}>
            <StepLine className={currentStep >= 1 ? ACTIVE_CLASS : ''} />
            <StepLine className={currentStep >= 2 ? ACTIVE_CLASS : ''} />
            <StepLine className={currentStep >= 2 ? ACTIVE_CLASS : ''} />
            <StepLine className={currentStep >= 2 ? ACTIVE_CLASS : ''} />
          </StepPagination>
          {currentStep === 1 && (
            <>
              <Title>{formFirstStepTexts.title}</Title>
              <Input
                type='text'
                value={name}
                onChange={handleNameChange}
                placeholder='Alice'
                title='Child`s name'
              />
              <InputCalendar
                title='Child`s date of birth'
                selected={startDate}
                onChange={setStartDate}
                maxDate={new Date()}
                placeholderText='June 16, 2023'
              />
              <BornInWeekInput
                isYesSelected={isYesSelected}
                bornInWeek={bornInWeek}
                setIsYesSelected={setIsYesSelected}
                setBornInWeek={setBornInWeek}
              />
              <InputPhysicalData
                type='text'
                value={weight}
                titleInput='Child`s weight'
                titleSelect='Weight unit'
                paramsOptionFirst='kg'
                paramsOptionSecond='pound'
                onChange={handleWeightChange}
                onUnitChange={handleWeightUnitChange}
              />
              <InputPhysicalData
                type='text'
                value={height}
                titleInput='Child`s height'
                titleSelect='Height unit'
                paramsOptionFirst='cm'
                paramsOptionSecond='ft'
                onChange={handleHeightChange}
                onUnitChange={handleHeightUnitChange}
              />
              <Input
                type='text'
                value={email}
                onChange={handleEmailChange}
                placeholder='malafeyev7@gmail.com'
                title='Email address'
              />
              <InputPhone
                value={phoneCode}
                valuePhone={phone}
                title='Phone number'
                placeholder='Number'
                onChange={setPhoneCode}
                onChangePhone={handlePhoneChange}
              />
              <ButtonNext onClick={nextStep} disabled={isButtonDisabled}>
                {formFirstStepTexts.buttonDone}
              </ButtonNext>
            </>
          )}

          {currentStep === 2 && <FormSecondStep />}
        </>
      )}
    </Box>
  );
};
