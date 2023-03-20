import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { FormContextProps, FormContext } from '../context/formContext';
import CustomerCardInfo from './CustomerCardInfo';
import CustomerProfilePic from './CustomerProfilePic';

const CustomerCard = () => {
  const { state: customer } = useContext<FormContextProps>(FormContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/google.png')} />
      </View>
      <View style={styles.userInfoContainer}>
        <CustomerProfilePic />
        <View style={styles.nameContainer}>
          <Text variant='titleLarge' style={{ fontWeight: 'bold' }}>{customer.name}</Text>
          <Text>{customer.job.label}</Text>
        </View>
        <View style={styles.row}>
          <CustomerCardInfo title="Birth Date" content={customer.birthDate} />
          <CustomerCardInfo title="Phone Number" content={customer.phoneNumber} />
          <CustomerCardInfo title="Email" content={customer.email} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    marginBottom: 30
  },
  logoContainer: {
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#E5F6E9',
    borderRadius: 20
  },
  logo: {
    width: 60,
    height: 60
  },
  userInfoContainer: {
    flex: 2,
    flexDirection: 'column',
    padding: 20
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 15
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 20,
    rowGap: 10,
    flexBasis: '33%'
  }
});

export default CustomerCard;
