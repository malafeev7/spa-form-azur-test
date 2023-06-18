export const isValidateName = (value: string) => {
  const trimmedName = value.trim();

  if (trimmedName.length < 3 || trimmedName.length > 20) {
    return false;
  }
  if (trimmedName.includes(' ')) {
    return false;
  }
  return true;
};

export const isValidEmail = (value: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(value);
};

export const isValidPhone = (value: string) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(value);
};
