import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import TextInputErrorMessage from './TextInputErrorMessage';
import { useTextField } from '../../hooks';

const validateEmail = (email: string): string | null => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return 'Invalid address';
  }
  return null;
};

type Props = {
  sendNewValue: (name: string, newValue: string) => void;
  initialValue?: string;
}

const EmailAddressInput: React.FC<Props> = ({ sendNewValue, initialValue }) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue: initialValue ?? '',
    validate: validateEmail
  });

  const onChangeText = (value: string) => {
    handleTextInputChange(value);
    sendNewValue('email', value);
  };

  return (
    <>
      <TextInput
        style={{ ...styles.input, marginBottom: error ? 5 : 10 }}
        label="Email Address"
        value={value}
        onChangeText={onChangeText}
        keyboardType="email-address"
        error={typeof error === 'string'}
        placeholder="Type..."
        mode="outlined"
      />
      <TextInputErrorMessage errorMessage={error} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default EmailAddressInput;
