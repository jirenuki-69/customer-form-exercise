import { useState } from 'react';

const useTextField = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const handleChangeText = (value: string) => {
    setState({ value });
  };

  return [state, handleChangeText];
};

export default useTextField;
