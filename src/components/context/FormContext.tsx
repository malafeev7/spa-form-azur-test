import React from 'react';

interface TimeSlot {
  full: string;
  half: string[];
}

type FormContextType = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  weightUnit: string;
  setWeightUnit: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  heightUnit: string;
  setHeightUnit: React.Dispatch<React.SetStateAction<string>>;
  phoneCode: string;
  setPhoneCode: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  isYesSelected: boolean;
  setIsYesSelected: React.Dispatch<React.SetStateAction<boolean>>;
  bornInWeek: number | '';
  setBornInWeek: React.Dispatch<React.SetStateAction<number | ''>>;
  isButtonDisabled: boolean;
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTimeSlot: TimeSlot | null;
  setSelectedTimeSlot: React.Dispatch<React.SetStateAction<TimeSlot | null>>;
  selectedHalfSlot: string;
  setSelectedHalfSlot: React.Dispatch<React.SetStateAction<string>>;
  selectedTypeCall: string;
  setSelectedTypeCall: React.Dispatch<React.SetStateAction<string>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<FormContextType>({} as FormContextType);
