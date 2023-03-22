type FormAction =
  | { type: 'UPDATE_TEXT'; payload: TextPayload }
  | { type: 'UPDATE_JOB'; payload: DropdownOption }
  | { type: 'UPDATE_IMAGE'; payload: string }
  | { type: 'LOCK_FORM' }
  | { type: 'UNLOCK_FORM' }
  | { type: 'CHANGE_ERROR'; payload: { field: string, error: string | null } };
