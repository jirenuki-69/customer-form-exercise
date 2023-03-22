import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateInput from '../inputs/DateInput';
import DropdownInput from '../dropdown/DropdownInput';
import MyButton from '../buttons//MyButton';
import TextField from '../inputs/TextField';
import { jobOptions } from '../../helpers/constants';
import PhoneNumberInput from '../inputs/PhoneNumberInput';
import EmailAddressInput from '../inputs/EmailAddressInput';
import SelectImageButton from '../buttons/SelectImageButton';
import { useForm } from '../../hooks';

const CustomerForm = () => {
  const form = useForm();

  return (
    <View style={styles.container}>
      <TextField
        label="Customer Name"
        placeholder="Type..."
        initialValue={form.state.name}
        name="name"
        sendNewValue={form.changeTextInput}
        handleError={(error) => form.handleInputError('name', error)}
      />
      <DateInput
        initialValue={form.state.birthDate}
        onDateChange={form.changeTextInput}
        handleError={(error) => form.handleInputError('birthDate', error)}
      />
      <DropdownInput
        selected={form.state.job}
        onSelect={form.updateSelect}
        options={jobOptions}
      />
      <EmailAddressInput
        sendNewValue={form.changeTextInput}
        initialValue={form.state.email}
        handleError={(error) => form.handleInputError('email', error)}
      />
      <PhoneNumberInput
        sendNewValue={form.changeTextInput}
        initialValue={form.state.phoneNumber}
        handleError={(error) => form.handleInputError('phoneNumber', error)}
      />
      <SelectImageButton onImageChange={form.updateImage} />
      <MyButton text="Block Card" onPress={form.lockForm} icon="lock" />
      <MyButton text="Unlock Card" onPress={form.unlockForm} icon="lock-open" />
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
