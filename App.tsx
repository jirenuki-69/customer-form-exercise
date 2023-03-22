import { useReducer } from 'react';
import { Text } from 'react-native-paper';
import Constants from 'expo-constants';
import Toast from 'react-native-toast-message';
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { CustomerCard, CustomerForm } from './components';
import { FormContext } from './context/formContext';
import formReducer from './reducers/formReducer';

const initialState: FormState = {
  name: 'Miguel Fuentes',
  birthDate: '15/09/2000',
  job: { label: 'Desarrollador Jr.', value: 'Desarrollador Jr.' },
  email: 'mfuentesmodelo@gmail.com',
  phoneNumber: '9995520584',
  pic: 'https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png',
  locked: false,
  errors: {
    errorText: null,
    errorDate: null,
    errorPhoneNumber: null,
    errorEmail: null
  }
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
      <Toast />
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
