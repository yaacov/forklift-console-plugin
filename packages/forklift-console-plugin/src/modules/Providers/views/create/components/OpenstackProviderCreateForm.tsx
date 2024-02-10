import React, { useCallback, useReducer } from 'react';
import { validateURL, Validation } from 'src/modules/Providers/utils';
import { ForkliftTrans, useForkliftTranslation } from 'src/utils/i18n';

import { V1beta1Provider } from '@kubev2v/types';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

export interface OpenstackProviderCreateFormProps {
  provider: V1beta1Provider;
  onChange: (newValue: V1beta1Provider) => void;
}

export const OpenstackProviderCreateForm: React.FC<OpenstackProviderCreateFormProps> = ({
  provider,
  onChange,
}) => {
  const { t } = useForkliftTranslation();

  const url = provider?.spec?.url || '';

  const urlHelperTextMsgs = {
    error: (
      <div className="forklift--create-provider-field-error-validation">
        <ForkliftTrans>
          Error: The format of the provided URL is invalid. Ensure the URL includes a scheme, a
          domain name, and a path. For example:{' '}
          <strong>https://identity_service.com:5000/v3</strong>.
        </ForkliftTrans>
      </div>
    ),
    warning: (
      <div className="forklift--create-provider-field-warning-validation">
        <ForkliftTrans>
          Warning: The provided URL does not end with the API endpoint path:{' '}
          <strong>
            {'"'}/v3{'"'}
          </strong>
          . Ensure the URL includes the correct path. For example:{' '}
          <strong>https://identity_service.com:5000/v3</strong>.
        </ForkliftTrans>
      </div>
    ),
    success: (
      <div className="forklift--create-provider-field-success-validation">
        <ForkliftTrans>
          URL of the OpenStack Identity (Keystone) endpoint. For example:{' '}
          <strong>https://identity_service.com:5000/v3</strong>.
        </ForkliftTrans>
      </div>
    ),
    default: (
      <div className="forklift--create-provider-field-default-validation">
        <ForkliftTrans>
          URL of the OpenStack Identity (Keystone) endpoint. For example:{' '}
          <strong>https://identity_service.com:5000/v3</strong>.
        </ForkliftTrans>
      </div>
    ),
  };

  const initialState = {
    validation: {
      url: 'default' as Validation,
      urlHelperText: urlHelperTextMsgs.default,
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
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback(
    (id, value) => {
      if (id !== 'url') return;

      const trimmedValue: string = value.trim();
      const validationState = getURLValidationState(trimmedValue);

      dispatch({
        type: 'SET_FIELD_VALIDATED',
        payload: { field: 'url', validationState },
      });

      dispatch({
        type: 'SET_FIELD_VALIDATED',
        payload: {
          field: 'urlHelperText',
          validationState: urlHelperTextMsgs[validationState],
        },
      });

      onChange({ ...provider, spec: { ...provider.spec, url: trimmedValue } });
    },
    [provider],
  );

  const getURLValidationState = (url: string): Validation => {
    if (!validateURL(url)) return 'error';
    if (!url.endsWith('v3') && !url.endsWith('v3/')) return 'warning';
    return 'success';
  };

  return (
    <Form isWidthLimited className="forklift-section-provider-edit">
      <FormGroup
        label={t('URL')}
        isRequired
        fieldId="url"
        helperText={state.validation.urlHelperText}
        validated={state.validation.url}
        helperTextInvalid={state.validation.urlHelperText}
      >
        <TextInput
          isRequired
          type="text"
          id="url"
          name="url"
          value={url}
          validated={state.validation.url}
          onChange={(value) => handleChange('url', value)}
        />
      </FormGroup>
    </Form>
  );
};
