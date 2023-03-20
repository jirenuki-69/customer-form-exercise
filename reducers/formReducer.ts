import DropdownOption from '../components/DropdownOption';

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { ...state, [action.payload.field]: action.payload.text };
    case 'UPDATE_JOB':
      return { ...state, job: action.payload };
    default:
      return state;
  }
};

export default formReducer;
