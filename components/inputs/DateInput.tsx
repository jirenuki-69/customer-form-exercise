import { useEffect } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  StyleSheet
} from 'react-native';
import { useTextField } from '../../hooks';
import TextInputErrorMessage from './TextInputErrorMessage';

interface Props extends TextInputProps {
  initialValue: string;
  onDateChange: (field: string, date: string) => void;
  handleError: (error: string | null) => void;
}

const DateInput: React.FC<Props> = ({
  initialValue,
  onDateChange,
  handleError,
  ...textInputProps
}) => {
  const { value, error, handleTextInputChange } = useTextField({
    initialValue,
    validateCode: 'date'
  });

  useEffect(() => {
    handleError(error);
  }, [error]);

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData & { key: string }>
  ) => {
    const { key } = event.nativeEvent;
    const newText = key !== 'Backspace' ? value + key : value.slice(0, -1);

    if ([2, 5].includes(newText.length) && key !== 'Backspace') {
      handleTextInputChange(`${newText}/`);
    } else if (key !== 'Backspace') {
      handleTextInputChange(`${newText}`);
    } else {
      handleTextInputChange(newText);
    }

    onDateChange('birthDate', newText);
    handleError(error);
  };

  return (
    <>
      <TextInput
        {...textInputProps}
        value={value}
        onKeyPress={handleKeyPress}
        placeholder="dd/mm/yyyy"
        keyboardType="numeric"
        maxLength={10}
        style={{ ...styles.input, marginBottom: error ? 5 : 10 }}
      />
      <TextInputErrorMessage errorMessage={error} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});

export default DateInput;
