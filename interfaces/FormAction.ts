type FormAction =
  | { type: 'UPDATE_TEXT'; payload: TextPayload }
  | { type: 'UPDATE_JOB'; payload: DropdownOption }
  | { type: 'UPDATE_IMAGE'; payload: string };
