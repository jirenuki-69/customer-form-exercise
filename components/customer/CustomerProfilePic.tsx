import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { FormContextProps, FormContext } from '../../context/formContext';
import { Avatar } from 'react-native-paper';

const CustomerProfilePic = () => {
  const { state: { pic } } = useContext<FormContextProps>(FormContext);

  return <Avatar.Image size={80} style={styles.pic} source={{ uri: pic }} />;
};

const styles = StyleSheet.create({
  pic: {
    position: 'absolute',
    zIndex: 1,
    top: -50,
    left: 20
  }
});

export default CustomerProfilePic;
