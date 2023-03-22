import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useTextField } from '../../hooks';
import TextInputErrorMessage from './TextInputErrorMessage';

interface Props {
  name: string;
  label: string;
  placeholder: string;
  initialValue: string;
  sendNewValue: (name: string, newValue: string) => void;
  handleError: (error: string | null) => void;
}

const TextField = ({
  name,
  label,
  placeholder,
  initialValue,
  sendNewValue,
  handleError
}: Props) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue,
    validateCode: 'text'
  });
  
  useEffect(() => {
    handleError(error);
  }, [error]);
  
  const onChangeText = (value: string) => {
    handleTextInputChange(value);
    sendNewValue(name, value);
    handleError(error);
  };

  return (
    <>
      <TextInput
        label={label}
        mode="outlined"
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ ...styles.input, marginBottom: error ? 5 : 10 }}
        value={value}
        error={typeof error === 'string'}
        autoCapitalize="words"
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

export default TextField;
