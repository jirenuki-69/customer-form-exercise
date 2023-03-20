import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import DateInput from './DateInput';
import DropdownInput from './DropdownInput';
import TextField from './TextField';
import { FormContext, FormContextProps } from '../context/formContext';
import { jobOptions } from '../helpers/constants';

const CustomerForm = () => {
  const { state: customer, dispatch } =
    useContext<FormContextProps>(FormContext);

  const handleChangeText = (name: string, newValue: string) => {
    dispatch({ type: 'UPDATE_TEXT', payload: { field: name, text: newValue } });
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
          dispatch({
            type: 'UPDATE_JOB',
            payload: { label: option, value: option }
          })
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
