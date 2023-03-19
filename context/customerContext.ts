import React, { createContext } from 'react';

export interface Customer {
  name: string;
  birthDate: string;
  job: { label: string, value: string };
  email: string;
  phoneNumber: string;
  pic: string;
}

export interface CustomerContextProps {
  customer: Customer;
  setCustomer: React.Dispatch<React.SetStateAction<Customer>>;
};

export const CustomerContext = createContext({} as CustomerContextProps);
