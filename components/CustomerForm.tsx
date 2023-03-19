import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DropdownInput } from '.';
import {
  CustomerContext,
  CustomerContextProps
} from '../context/customerContext';
import { jobOptions } from '../helpers/constants';
import { DateInput, TextField } from './';

const CustomerForm = () => {
  const { customer, setCustomer } =
    useContext<CustomerContextProps>(CustomerContext);

  const handleChangeText = (name: string, newValue: string) => {
    setCustomer((prev) => ({ ...prev, [name]: newValue }));
  };

  return (
    <View style={styles.container}>
      <TextField
        label="Customer Name"
        placeholder="Type..."
        initialValue={customer.name}
        name="name"
        sendNewValue={handleChangeText}
      />
      <DateInput
        initialValue={customer.birthDate}
        onDateChange={(date) => handleChangeText('birthDate', date)}
      />
      <DropdownInput
        selected={customer.job}
        onSelect={(option) =>
          setCustomer((prev) => ({
            ...prev,
            job: { label: option, value: option }
          }))
        }
        options={jobOptions}
      />
      <TextField
        label="Email"
        placeholder="Type..."
        initialValue={customer.email}
        keyboardType="email-address"
        name="email"
        sendNewValue={handleChangeText}
      />
      <TextField
        label="Phone Number"
        placeholder="Type..."
        initialValue={customer.phoneNumber}
        name="phoneNumber"
        sendNewValue={handleChangeText}
        keyboardType="numeric"
      />
      <TextField
        label="Image"
        placeholder="Type URL..."
        initialValue={customer.pic}
        keyboardType="url"
        name="pic"
        sendNewValue={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

export default CustomerForm;
