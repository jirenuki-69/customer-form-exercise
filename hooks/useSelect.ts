import { useState } from 'react';

type SelectProps = {
  initialValue: string;
};

type SelectResult = {
  selected: string;
  error: string | null;
  onSelectChange: (value: string) => void;
};

const validate = (value: string): string | null => {
  if (value.length === 0) {
    return 'Empty Field';
  }

  return null;
};

const useSelect = ({ initialValue }: SelectProps): SelectResult => {
  const [selected, setSelected] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const onSelectChange = (value: string) => {
    setSelected(value)

    const errorMessage = validate(value);
    setError(errorMessage);
  };

  return { selected, error, onSelectChange };
};

export default useSelect;
