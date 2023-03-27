import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateInput from '../inputs/DateInput';
import MyButton from '../buttons//MyButton';
import TextField from '../inputs/TextField';
import PhoneNumberInput from '../inputs/PhoneNumberInput';
import EmailAddressInput from '../inputs/EmailAddressInput';
import SelectImageButton from '../buttons/SelectImageButton';
import { useForm } from '../../hooks';
import Select from '../inputs/Select';

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
        handleError={(error) => form.handleInputError('errorText', error)}
      />
      <DateInput
        initialValue={form.state.birthDate}
        onDateChange={form.changeTextInput}
        handleError={(error) => form.handleInputError('errorDate', error)}
      />
      <Select
        initialValue={form.state.job.value}
        handleError={(error) => form.handleInputError('errorSelect', error)}
      />
      <EmailAddressInput
        sendNewValue={form.changeTextInput}
        initialValue={form.state.email}
        handleError={(error) => form.handleInputError('errorEmail', error)}
      />
      <PhoneNumberInput
        sendNewValue={form.changeTextInput}
        initialValue={form.state.phoneNumber}
        handleError={(error) =>
          form.handleInputError('errorPhoneNumber', error)
        }
      />
      <SelectImageButton
        initialValue={form.state.pic}
        onValueChanged={form.updateImage}
        handleError={(error) => form.handleInputError('errorImage', error)}
      />
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
