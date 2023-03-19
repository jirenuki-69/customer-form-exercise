import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';
import DropdownOption from './DropdownOption';

type DropdownProps = {
  selected: DropdownOption | undefined;
  options: DropdownOption[];
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ selected, options, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>{selected ? selected.label : 'Select your job'}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            {options.map((option) => (
              <DropdownOption
                key={option.value}
                option={option}
                onSelect={handleSelect}
              />
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 50
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    minWidth: 200,
    minHeight: 200
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD'
  }
});

export default Dropdown;
