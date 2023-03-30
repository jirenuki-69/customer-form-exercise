import { useContext, useState } from 'react';
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
  const [localState, setLocalState] = useState<FormState>(state);

  console.log(localState.job)

  const updateLocalState = (
    field: string,
    value: string | SelectOption | boolean | Errors
  ) => {
    setLocalState((prev) => ({ ...prev, [field]: value }));
  };

  const lockForm = () => {
    const error = Object.values(state.errors).find(
      (error) => typeof error === 'string'
    );

    if (error) {
      showToast('There is an error. Card cannot be generated', 'error');
    } else {
      updateLocalState('locked', true);
      dispatch({ type: 'LOCK_FORM' });
      showToast('Customer card has been generated');
    }
  };

  const unlockForm = () => {
    dispatch({ type: 'UPDATE_FORM', payload: localState });
    updateLocalState('locked', false);
    dispatch({ type: 'UNLOCK_FORM' });
  };

  const changeTextInput = (field: string, text: string) => {
    if (!state.locked) {
      dispatch({ type: 'UPDATE_TEXT', payload: { text, field } });
    }

    updateLocalState(field, text);
  };

  const updateImage = (uri: string) => {
    if (!state.locked) {
      dispatch({ type: 'UPDATE_IMAGE', payload: uri });
    }

    updateLocalState('pic', uri);
  };

  const updateSelect = (option: string) => {
    if (!state.locked) {
      dispatch({
        type: 'UPDATE_JOB',
        payload: { label: option, value: option }
      });
    }

    updateLocalState('job', { label: option, value: option });
  };

  const handleInputError = (field: string, error: string | null) => {
    dispatch({ type: 'CHANGE_ERROR', payload: { error, field } });

    setLocalState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [field]: error
      }
    }));
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
