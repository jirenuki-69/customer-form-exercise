import { useState, useReducer } from 'react';
import { Text } from 'react-native-paper';
import Constants from 'expo-constants';
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { CustomerCard, CustomerForm } from './components';
import { FormContext, FormContextProps } from './context/formContext';
import formReducer from './reducers/formReducer';

const initialState = {
  name: 'Miguel Fuentes',
  birthDate: '15/09/2000',
  job: { label: 'Desarrollador Jr.', value: 'Desarrollador Jr.' },
  email: 'mfuentesmodelo@gmail.com',
  phoneNumber: '9995520584',
  pic: 'https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png'
};

export default function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar animated />
          <CustomerCard />
          <Text
            variant="titleLarge"
            style={{ fontWeight: 'bold', marginBottom: 10 }}
          >
            Customer Form
          </Text>
          <CustomerForm />
        </View>
      </ScrollView>
    </FormContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 25,
    paddingTop: Constants.statusBarHeight
  }
});
