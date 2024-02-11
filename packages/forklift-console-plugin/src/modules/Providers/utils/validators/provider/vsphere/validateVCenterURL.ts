import { validateURL, ValidationMsg } from '../../common';

export const validateVCenterURL = (url: string | number): ValidationMsg => {
  // Sanity check
  if (typeof url !== 'string') {
    return { type: 'error', msg: 'URL is not a string' };
  }

  const trimmedUrl: string = url.toString().trim();
  const isValidURL = validateURL(trimmedUrl);

  if (!isValidURL) {
    return {
      type: 'error',
      msg: 'The URL is invalid. URL should include the schema and path, for example: https://vCenter-host-example.com/sdk .',
    };
  }

  if (!trimmedUrl.endsWith('sdk') && !trimmedUrl.endsWith('sdk/'))
    return {
      msg: 'The URL does not end with a /sdk path, for example a URL with sdk path: https://vCenter-host-example.com/sdk .',
      type: 'warning',
    };

  return {
    type: 'default',
    msg: 'The URL of the vCenter API endpoint for example: https://vCenter-host-example.com/sdk .',
  };
};
