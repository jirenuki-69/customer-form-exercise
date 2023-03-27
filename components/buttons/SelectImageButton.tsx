import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import useImage from '../../hooks/useImage';
import TextInputErrorMessage from '../inputs/TextInputErrorMessage';

type SelectImageButtonProps = {
  initialValue: string;
  handleError: (error: string | null) => void;
  onValueChanged: (uri: string) => void;
};

const SelectImageButton: React.FC<SelectImageButtonProps> = ({
  initialValue,
  handleError,
  onValueChanged
}) => {
  const { uri, error, onImageChange } = useImage({ initialValue });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      onImageChange(uri);
    } else {
      onImageChange('');
    }
  };

  useEffect(() => {
    console.log('Cambiando')
    handleError(error);
    onValueChanged(uri);
  }, [error, uri]);

  return (
    <>
      <Button
        style={styles.button}
        mode="elevated"
        onPress={pickImage}
        textColor="#000"
      >
        Select Image
      </Button>
      {error && <TextInputErrorMessage errorMessage={error} />}
    </>
  );
};

export default SelectImageButton;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#81F79D',
    width: 200
  }
});
