import React, { useState } from 'react';
import { Text } from 'react-native';

type Props = {
  initialValue: string;
  validate?: (value: string) => string | null;
};

type TextInputResult = {
  value: string;
  error: string | null;
  handleTextInputChange: (value: string) => void;
};

const useTextField = ({ initialValue, validate }: Props): TextInputResult => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

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
