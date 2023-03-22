import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTextField } from '../../hooks';
import TextInputErrorMessage from './TextInputErrorMessage';

type Props = {
  sendNewValue: (name: string, newValue: string) => void;
  handleError: (error: string | null) => void;
  initialValue?: string;
};

const PhoneNumberInput: React.FC<Props> = ({
  sendNewValue,
  handleError,
  initialValue
}) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue: initialValue ?? '',
    validateCode: 'phone-number'
  });

  useEffect(() => {
    handleError(error);
  }, [error]);

  const onChangeText = (value: string) => {
    handleTextInputChange(value);
    sendNewValue('phoneNumber', value);
    handleError(error);
  };

  return (
    <>
      <TextInput
        style={{ ...styles.input, marginBottom: error ? 5 : 10 }}
        label="Phone Number"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
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

export default PhoneNumberInput;
