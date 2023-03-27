import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

type ButtonProps = {
  onPress: () => void;
  text: string;
  icon?: IconSource;
};

const MyButton: React.FC<ButtonProps> = ({ onPress, text, icon }) => (
  <Button icon={icon} onPress={onPress} style={styles.button} mode="elevated">
    {text}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 5
  }
});

export default MyButton;
