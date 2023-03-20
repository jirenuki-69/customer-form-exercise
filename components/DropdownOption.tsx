import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';

type OptionProps = {
  option: DropdownOption;
  onSelect: (value: string) => void;
};

const DropdownOption: React.FC<OptionProps> = ({ option, onSelect }) => {
  const handlePress = () => {
    onSelect(option.value);
  };

  return (
    <TouchableOpacity style={styles.option} onPress={handlePress}>
      <Text>{option.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
});


export default DropdownOption;
