import { useContext } from 'react';
import { FormContext, FormContextProps } from '../context/formContext';
import { showToast } from '../helpers/constants';

type FormResult = {
  state: FormState;
  lockForm: () => void;
  unlockForm: () => void;
  changeTextInput: (field: string, text: string) => void;
  updateImage: (uri: string) => void;
  updateSelect: (option: string) => void;
  handleInputError: (field: string, error: string | null) => void;
};

const useForm = (): FormResult => {
  const { state, dispatch } = useContext<FormContextProps>(FormContext);

  const lockForm = () => {
    const error = Object.values(state.errors).find(
      (error) => typeof error === 'string'
    );

    if (error) {
      showToast('There is an error. Card cannot be generated', 'error');
    } else {
      dispatch({ type: 'LOCK_FORM' });
      showToast('Customer card has been generated');
    }
  };

  const unlockForm = () => {
    dispatch({ type: 'UNLOCK_FORM' });
  };

  const changeTextInput = (field: string, text: string) => {
    if (!state.locked) {
      dispatch({ type: 'UPDATE_TEXT', payload: { text, field } });
    }
  };

  const updateImage = (uri: string) => {
    if (!state.locked) {
      dispatch({ type: 'UPDATE_IMAGE', payload: uri });
    }
  };

  const updateSelect = (option: string) => {
    if (!state.locked) {
      dispatch({
        type: 'UPDATE_JOB',
        payload: { label: option, value: option }
      });
    }
  };

  const handleInputError = (field: string, error: string | null) => {
    dispatch({ type: 'CHANGE_ERROR', payload: { error, field } });
  };

  return {
    state,
    lockForm,
    unlockForm,
    changeTextInput,
    updateImage,
    updateSelect,
    handleInputError
  };
};

export default useForm;
