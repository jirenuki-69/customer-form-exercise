type FormAction =
  | { type: 'UPDATE_TEXT'; payload: TextPayload }
  | { type: 'UPDATE_JOB'; payload: SelectOption }
  | { type: 'UPDATE_IMAGE'; payload: string }
  | { type: 'UPDATE_FORM'; payload: FormState }
  | { type: 'LOCK_FORM' }
  | { type: 'UNLOCK_FORM' }
  | { type: 'CHANGE_ERROR'; payload: { field: string, error: string | null } };
