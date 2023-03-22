const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { ...state, [action.payload.field]: action.payload.text };
    case 'UPDATE_JOB':
      return { ...state, job: action.payload };
    case 'UPDATE_IMAGE':
      return { ...state, pic: action.payload };
    case 'LOCK_FORM':
      return { ...state, locked: true };
    case 'UNLOCK_FORM':
      return { ...state, locked: false };
    case 'CHANGE_ERROR':
      return {
        ...state,
        errors: { [action.payload.field]: action.payload.error }
      };
    default:
      return state;
  }
};

export default formReducer;
