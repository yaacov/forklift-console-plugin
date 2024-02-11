import {
  validateNoSpaces,
  validatePublicCert,
  validateUsernameAndDomain,
  ValidationMsg,
} from '../../common';

/**
 * Validates form input fields based on their id.
 *
 * @param {string} id - The ID of the form field.
 * @param {string} value - The value of the form field.
 *
 * @return {Validation} - The validation state of the form field. Can be one of the following:
 * 'default' - The default state of the form field, used when the field is empty or a value hasn't been entered yet.
 * 'success' - The field's value has passed validation.
 * 'warning' - The field's value has passed validation but does not fit the standard format, it's the user's choice if to accept that value.
 * 'error' - The field's value has failed validation.
 */
export const ovirtSecretFieldValidator = (id: string, value: string): ValidationMsg => {
  const trimmedValue = value.trim();

  let validationState: ValidationMsg;

  switch (id) {
    case 'user':
      validationState = validateUser(trimmedValue);
      break;
    case 'password':
      validationState = validatePassword(trimmedValue);
      break;
    case 'insecureSkipVerify':
      validationState = { type: 'default', msg: 'Migrate without validating a CA certificate' };
      break;
    case 'cacert':
      validationState = validateCacert(trimmedValue);
      break;
    default:
      validationState = { type: 'default' };
      break;
  }

  return validationState;
};

const validateUser = (value: string): ValidationMsg => {
  const noSpaces = validateNoSpaces(value);

  if (!noSpaces) {
    return { type: 'error', msg: 'Invalid username, spaces are not allowed' };
  }

  const hasAtChar = validateUsernameAndDomain(value);

  if (!hasAtChar) {
    return {
      type: 'warning',
      msg: 'User name usually include `@` char, for example: name@internal .',
    };
  }

  return {
    type: 'default',
    msg: 'A username for connecting to the Red Hat Virtualization Manager (RHVM) API endpoint, for example: name@internal .',
  };
};

const validatePassword = (value: string): ValidationMsg => {
  const valid = validateNoSpaces(value);

  if (valid) {
    return {
      type: 'default',
      msg: 'A user password for connecting to the Red Hat Virtualization Manager (RHVM) API endpoint.',
    };
  }

  return { type: 'error', msg: 'Invalid password, spaces are not allowed' };
};

const validateCacert = (value: string): ValidationMsg => {
  const valid = value === '' || validatePublicCert(value);

  if (valid) {
    return {
      type: 'default',
      msg: 'The Manager CA certificate unless it was replaced by a third-party certificate, in which case enter the Manager Apache CA certificate.',
    };
  }

  return {
    type: 'error',
    msg: 'Invalid CA certificate, certificate must be in a valid PEM encoded X.509 format.',
  };
};
