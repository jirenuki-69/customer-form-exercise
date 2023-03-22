import { StyleSheet, KeyboardTypeOptions } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useTextField } from '../../hooks';
import TextInputErrorMessage from './TextInputErrorMessage';

interface Props {
  name: string;
  label: string;
  placeholder: string;
  initialValue: string;
  sendNewValue: (name: string, newValue: string) => void;
}

const validate = (text: string): string | null => {
  if (text.length === 0) {
    return 'Empty Field';
  }

  return null;
};

const TextField = ({
  name,
  label,
  placeholder,
  initialValue,
  sendNewValue
}: Props) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue,
    validate
  });

  const onChangeText = (value: string) => {
    handleTextInputChange(value);
    sendNewValue(name, value);
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
