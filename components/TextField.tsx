import { StyleSheet, KeyboardTypeOptions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTextField } from '../hooks';

interface Props {
  name: string;
  label: string;
  placeholder: string;
  initialValue: string;
  keyboardType?: KeyboardTypeOptions;
  sendNewValue: (name: string, newValue: string) => void;
}

interface State {
  value: string;
}

const TextField = ({
  name,
  label,
  placeholder,
  initialValue,
  keyboardType = 'default',
  sendNewValue
}: Props) => {
  const initialState: State = {
    value: initialValue
  };

  const [{ value }, handleChangeText] = useTextField(initialState);

  const onChangeText = (value: string) => {
    handleChangeText(value);
    sendNewValue(name, value);
  };

  return (
    <TextInput
      label={label}
      mode="outlined"
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      value={value}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: 'white'
  }
});

export default TextField;
