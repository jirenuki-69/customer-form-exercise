import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTextField } from '../../hooks';
import TextInputErrorMessage from './TextInputErrorMessage';

const validatePhoneNumber = (phoneNumber: string): string | null => {
  const isValidPhoneNumber = /^\d{10}$/g.test(phoneNumber);
  if (!isValidPhoneNumber) {
    return 'Invalid Phone Number';
  }
  return null;
};

type Props = {
  sendNewValue: (name: string, newValue: string) => void;
  initialValue?: string;
}

const PhoneNumberInput: React.FC<Props> = ({ sendNewValue, initialValue }) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue: initialValue ?? '',
    validate: validatePhoneNumber
  });

  const onChangeText = (value: string) => {
    handleTextInputChange(value);
    sendNewValue('phoneNumber', value);
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
