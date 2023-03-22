import Toast from 'react-native-toast-message';

export const jobOptions: DropdownOption[] = [
  { label: 'Gerente', value: 'Gerente' },
  { label: 'Desarrollador Jr.', value: 'Desarrollador Jr.' },
  { label: 'Desarrollador Sr.', value: 'Desarrollador Sr.' },
  { label: 'Soporte', value: 'Soporte' },
  { label: 'Lider de proyecto', value: 'Lider de proyecto' }
];

export const showToast = (message: string, type: string = 'success') => {
  Toast.show({
    type,
    text1: message
  });
};
