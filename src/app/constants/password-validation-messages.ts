export interface IPasswordValidationMessages {
  required: string;
  minlength: string;
}
export const PASSWORD_VALIDATION_MESSAGES: IPasswordValidationMessages = {
  required: 'Password is required',
  minlength: 'Password must be at least 8 characters long'
}
