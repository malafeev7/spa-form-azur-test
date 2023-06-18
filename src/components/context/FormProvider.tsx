import { useState, useMemo, ReactNode } from 'react';
import { isValidateName, isValidEmail } from 'utils/formValidateUtils';
import { FormContext } from './FormContext';

interface TimeSlot {
  full: string;
  half: string[];
}

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('sm');
  const [phoneCode, setPhoneCode] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isYesSelected, setIsYesSelected] = useState(false);
  const [bornInWeek, setBornInWeek] = useState<number | ''>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [selectedHalfSlot, setSelectedHalfSlot] = useState('');
  const [selectedTypeCall, setSelectedTypeCall] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const isButtonDisabled = useMemo(
    () => !(isValidateName(name) && isValidEmail(email) && phone.length === 10),
    [name, email, phone],
  );

  const value = {
    currentStep,
    setCurrentStep,
    name,
    setName,
    email,
    setEmail,
    weight,
    setWeight,
    weightUnit,
    setWeightUnit,
    height,
    setHeight,
    heightUnit,
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
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
