import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import DateInput from '../inputs/DateInput';
import DropdownInput from '../dropdown/DropdownInput';
import MyButton from '../buttons//MyButton';
import TextField from '../inputs/TextField';
import { FormContext, FormContextProps } from '../../context/formContext';
import { jobOptions } from '../../helpers/constants';
import PhoneNumberInput from '../inputs/PhoneNumberInput';
import EmailAddressInput from '../inputs/EmailAddressInput';
import SelectImageButton from '../buttons/SelectImageButton';

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
      <EmailAddressInput
        sendNewValue={handleChangeText}
        initialValue={customer.email}
      />
      <PhoneNumberInput
        sendNewValue={handleChangeText}
        initialValue={customer.phoneNumber}
      />
      <SelectImageButton
        onImageChange={(uri) =>
          dispatch({ type: 'UPDATE_IMAGE', payload: uri })
        }
      />
      <MyButton text="Block Card" onPress={() => {}} icon="lock" />
      <MyButton text="Unlock Card" onPress={() => {}} icon="lock-open" />
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
