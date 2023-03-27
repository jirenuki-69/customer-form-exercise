import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useSelect from '../../hooks/useSelect';
import { jobOptions } from '../../helpers/constants';
import TextInputErrorMessage from './TextInputErrorMessage';

type SelectProps = {
  initialValue: string;
  handleError: (error: string | null) => void;
};

const Select: React.FC<SelectProps> = ({ initialValue, handleError }) => {
  const { selected, error, onSelectChange } = useSelect({ initialValue });

  useEffect(() => {
    handleError(error);
  }, [error]);

  return (
    <>
      <View style={{ ...styles.container, marginBottom: error ? 5 : 10 }}>
        <Picker
          selectedValue={selected}
          onValueChange={(itemValue) => onSelectChange(itemValue)}
          placeholder="Select a Job"
          mode="dialog"
        >
          <Picker.Item label="Select a Job" value="" />
          {jobOptions.map(({ label, value }) => (
            <Picker.Item key={value} label={label} value={value} />
          ))}
        </Picker>
      </View>
      {error && <TextInputErrorMessage errorMessage={error} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.8,
    borderRadius: 5
  }
});

export default Select;
