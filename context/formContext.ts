import React, { createContext } from 'react';

export interface FormContextProps {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
};

export const FormContext = createContext({} as FormContextProps);
