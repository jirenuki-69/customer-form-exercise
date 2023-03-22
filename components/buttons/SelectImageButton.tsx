import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

type SelectImageButtonProps = {
  onImageChange: (uri: string) => void;
};

const SelectImageButton: React.FC<SelectImageButtonProps> = ({
  onImageChange
}) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      onImageChange(result.assets[0].uri);
    }
  };

  return (
    <Button
      style={styles.button}
      mode="elevated"
      onPress={pickImage}
      textColor="#000"
    >
      Select Image
    </Button>
  );
};

export default SelectImageButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 5,
    // backgroundColor: '#A3E6B3',
    backgroundColor: '#81F79D',
    width: 200
  }
});
