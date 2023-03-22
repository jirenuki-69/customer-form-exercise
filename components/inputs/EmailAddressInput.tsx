import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import TextInputErrorMessage from './TextInputErrorMessage';
import { useTextField } from '../../hooks';

type Props = {
  sendNewValue: (name: string, newValue: string) => void;
  handleError: (error: string | null) => void;
  initialValue?: string;
};

const EmailAddressInput: React.FC<Props> = ({
  sendNewValue,
  handleError,
  initialValue
}) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue: initialValue ?? '',
    validateCode: 'email-address'
  });

  useEffect(() => {
    handleError(error);
  }, [error]);

  const onChangeText = (value: string) => {
    handleTextInputChange(value);
    sendNewValue('email', value);
    handleError(error);
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
