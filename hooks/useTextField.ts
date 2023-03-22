import { useState } from 'react';

type Props = {
  initialValue: string;
  validateCode: Validate;
};

type TextInputResult = {
  value: string;
  error: string | null;
  handleTextInputChange: (value: string) => void;
};

const validateEmail = (email: string): string | null => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return 'Invalid address';
  }
  return null;
};

const validatePhoneNumber = (phoneNumber: string): string | null => {
  const isValidPhoneNumber = /^\d{10}$/g.test(phoneNumber);
  if (!isValidPhoneNumber) {
    return 'Invalid Phone Number';
  }
  return null;
};

const validateText = (text: string): string | null => {
  if (text.length === 0) {
    return 'Empty Field';
  }

  return null;
};

const validateDate = (date: string): string | null => {
  if (!/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/.test(date)) {
    return 'Invalid Date';
  }

  return null;
};

const useTextField = ({
  initialValue,
  validateCode
}: Props): TextInputResult => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string): string | null => {
    switch (validateCode) {
      case 'email-address':
        return validateEmail(value);
      case 'phone-number':
        return validatePhoneNumber(value);
      case 'text':
        return validateText(value);
      case 'date':
        return validateDate(value);
      default:
        return null;
    }
  };

  const handleTextInputChange = (value: string) => {
    setValue(value);
    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
    }
  };

  return {
    value,
    error,
    handleTextInputChange
  };
};

export default useTextField;
