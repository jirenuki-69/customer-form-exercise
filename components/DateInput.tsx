import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  StyleSheet
} from 'react-native';

interface Props extends TextInputProps {
  initialValue: string,
  onDateChange: (date: string) => void;
}

const DateInput: React.FC<Props> = ({ initialValue, onDateChange, ...textInputProps }) => {
  const [text, setText] = useState(initialValue);

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData & { key: string }>
  ) => {
    const { key } = event.nativeEvent;
    const newText = key !== 'Backspace' ? text + key : text.slice(0, -1);

    if ([2, 5].includes(newText.length) && key !== 'Backspace') {
      setText(`${newText}/`);
    } else if (key !== 'Backspace') {
      setText(`${newText}`);
    } else {
      setText(newText);
    }

    onDateChange(newText);
  };

  return (
    <TextInput
      {...textInputProps}
      value={text}
      onKeyPress={handleKeyPress}
      placeholder="dd/mm/yyyy"
      keyboardType='numeric'
      maxLength={10}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create(({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
}));

export default DateInput;
