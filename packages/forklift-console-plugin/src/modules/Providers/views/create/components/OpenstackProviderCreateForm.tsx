import React, { useCallback, useReducer } from 'react';
import { validateOpenstackURL } from 'src/modules/Providers/utils';
import { useForkliftTranslation } from 'src/utils/i18n';

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

  const initialState = {
    validation: {
      type: 'default',
      msg: 'The URL of the OpenStack Identity (Keystone) API endpoint, for example: https://identity_service.com:5000/v3 .',
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

      const trimmedURL: string = value.trim();
      const validationState = validateOpenstackURL(trimmedURL);

      dispatch({
        type: 'SET_FIELD_VALIDATED',
        payload: { field: 'url', validationState },
      });

      onChange({ ...provider, spec: { ...provider.spec, url: trimmedURL } });
    },
    [provider],
  );

  return (
    <Form isWidthLimited className="forklift-section-provider-edit">
      <FormGroup
        label={t('URL')}
        isRequired
        fieldId="url"
        helperText={state.validation.msg}
        validated={state.validation.url.type}
      >
        <TextInput
          isRequired
          type="text"
          id="url"
          name="url"
          value={provider?.spec?.url || ''}
          validated={state.validation.type}
          onChange={(value) => handleChange('url', value)}
        />
      </FormGroup>
    </Form>
  );
};
