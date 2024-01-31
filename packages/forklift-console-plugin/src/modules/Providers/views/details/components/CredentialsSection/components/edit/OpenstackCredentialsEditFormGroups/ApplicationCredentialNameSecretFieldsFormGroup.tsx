import React, { useCallback, useReducer } from 'react';
import { Base64 } from 'js-base64';
import {
  openstackSecretFieldValidator,
  safeBase64Decode,
  Validation,
} from 'src/modules/Providers/utils';
import { useForkliftTranslation } from 'src/utils/i18n';

import { Button, FormGroup, TextInput } from '@patternfly/react-core';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';

import { EditComponentProps } from '../../BaseCredentialsSection';

export const ApplicationCredentialNameSecretFieldsFormGroup: React.FC<EditComponentProps> = ({
  secret,
  onChange,
}) => {
  const { t } = useForkliftTranslation();

  const applicationCredentialName = safeBase64Decode(secret?.data?.applicationCredentialName || '');
  const applicationCredentialSecret = safeBase64Decode(
    secret?.data?.applicationCredentialSecret || '',
  );
  const username = safeBase64Decode(secret?.data?.username || '');
  const regionName = safeBase64Decode(secret?.data?.regionName || '');
  const projectName = safeBase64Decode(secret?.data?.projectName || '');
  const domainName = safeBase64Decode(secret?.data?.domainName || '');

  const initialState = {
    passwordHidden: true,
    validation: {
      applicationCredentialName: 'default' as Validation,
      applicationCredentialSecret: 'default' as Validation,
      username: 'default' as Validation,
      regionName: 'default' as Validation,
      projectName: 'default' as Validation,
      domainName: 'default' as Validation,
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIELD_VALIDATED':
        return {
          ...state,
          validation: {
            ...state.validation,
            [action.payload.field]: action.payload.validationState,
          },
        };
      case 'TOGGLE_PASSWORD_HIDDEN':
        return { ...state, passwordHidden: !state.passwordHidden };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Define handleChange and validation functions
  const handleChange = useCallback(
    (id, value) => {
      const validationState = openstackSecretFieldValidator(id, value);
      dispatch({ type: 'SET_FIELD_VALIDATED', payload: { field: id, validationState } });

      const encodedValue = Base64.encode(value.trim());
      onChange({ ...secret, data: { ...secret.data, [id]: encodedValue } });
    },
    [secret, onChange],
  );

  const togglePasswordHidden = () => {
    dispatch({ type: 'TOGGLE_PASSWORD_HIDDEN' });
  };

  return (
    <>
      <FormGroup
        label={t('Application credential name')}
        isRequired
        fieldId="applicationCredentialName"
        helperText={t(
          'OpenStack application credential name needed for application credential authentication.',
        )}
        helperTextInvalid={t(
          'Error: The format of the provided application credential name is invalid. Ensure the name does not include spaces.',
        )}
        validated={state.validation.applicationCredentialName}
      >
        <TextInput
          isRequired
          type="text"
          id="applicationCredentialName"
          name="applicationCredentialName"
          value={applicationCredentialName}
          onChange={(value) => handleChange('applicationCredentialName', value)}
          validated={state.validation.applicationCredentialName}
        />
      </FormGroup>

      <FormGroup
        label={t('Application credential secret')}
        isRequired
        fieldId="applicationCredentialSecret"
        helperText={t(
          'OpenStack application credential Secret needed for the application credential authentication.',
        )}
        helperTextInvalid={t(
          'Error: The format of the provided application credential Secret is invalid. Ensure the Secret does not include spaces.',
        )}
        validated={state.validation.applicationCredentialSecret}
      >
        <TextInput
          className="pf-u-w-75"
          isRequired
          type={state.passwordHidden ? 'password' : 'text'}
          id="applicationCredentialSecret"
          name="applicationCredentialSecret"
          value={applicationCredentialSecret}
          onChange={(value) => handleChange('applicationCredentialSecret', value)}
          validated={state.validation.applicationCredentialSecret}
        />
        <Button
          variant="control"
          onClick={togglePasswordHidden}
          aria-label={state.passwordHidden ? 'Show password' : 'Hide password'}
        >
          {state.passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
        </Button>
      </FormGroup>

      <FormGroup
        label={t('Username')}
        isRequired
        fieldId="username"
        helperText={t('A username for connecting to the OpenStack Identity (Keystone) endpoint.')}
        helperTextInvalid={t(
          'Error: The format of the provided username is invalid. Ensure the username does not include spaces.',
        )}
        validated={state.validation.username}
      >
        <TextInput
          isRequired
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(value) => handleChange('username', value)}
          validated={state.validation.username}
        />
      </FormGroup>

      <FormGroup
        label={t('Region')}
        isRequired
        fieldId="regionName"
        helperText={t('OpenStack region name.')}
        helperTextInvalid={t(
          'Error: The format of the provided region name is invalid. Ensure the region name does not include spaces.',
        )}
        validated={state.validation.regionName}
      >
        <TextInput
          isRequired
          type="text"
          id="regionName"
          name="regionName"
          value={regionName}
          onChange={(value) => handleChange('regionName', value)}
          validated={state.validation.regionName}
        />
      </FormGroup>

      <FormGroup
        label={t('Project')}
        isRequired
        fieldId="projectName"
        helperText={t('OpenStack project name.')}
        helperTextInvalid={t(
          'Error: The format of the provided project name is invalid. Ensure the project name does not include spaces.',
        )}
        validated={state.validation.projectName}
      >
        <TextInput
          isRequired
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={(value) => handleChange('projectName', value)}
          validated={state.validation.projectName}
        />
      </FormGroup>

      <FormGroup
        label={t('Domain')}
        isRequired
        fieldId="domainName"
        helperText={t('OpenStack domain name.')}
        helperTextInvalid={t(
          'Error: The format of the provided domain name is invalid. Ensure the domain name does not include spaces.',
        )}
        validated={state.validation.domainName}
      >
        <TextInput
          isRequired
          type="text"
          id="domainName"
          name="domainName"
          value={domainName}
          onChange={(value) => handleChange('domainName', value)}
          validated={state.validation.domainName}
        />
      </FormGroup>
    </>
  );
};
