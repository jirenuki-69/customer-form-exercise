import { useReducer } from 'react';
import { Text } from 'react-native-paper';
import Constants from 'expo-constants';
import Toast from 'react-native-toast-message';
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import { CustomerCard, CustomerForm } from './components';
import { FormContext } from './context/formContext';
import formReducer from './reducers/formReducer';

const initialState: FormState = {
  name: 'Albert Williams',
  birthDate: '20/12/1986',
  job: { label: 'Desarrollador Sr.', value: 'Desarrollador Sr.' },
  email: 'user@user.com',
  phoneNumber: '1234567890',
  pic: 'https://th.bing.com/th/id/OIP.hzxtYUUwtyWcOqmcQd1F-gHaGs?pid=ImgDet&w=768&h=695&rs=1',
  locked: false,
  errors: {
    errorText: null,
    errorDate: null,
    errorPhoneNumber: null,
    errorEmail: null,
    errorSelect: null,
    errorImage: null
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
