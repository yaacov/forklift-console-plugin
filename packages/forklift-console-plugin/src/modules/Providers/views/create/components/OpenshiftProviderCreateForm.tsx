import React, { useCallback, useReducer } from 'react';
import { validateOpenshiftURL } from 'src/modules/Providers/utils';
import { useForkliftTranslation } from 'src/utils/i18n';

import { V1beta1Provider } from '@kubev2v/types';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';

export interface OpenshiftProviderCreateFormProps {
  provider: V1beta1Provider;
  onChange: (newValue: V1beta1Provider) => void;
}

export const OpenshiftProviderFormCreate: React.FC<OpenshiftProviderCreateFormProps> = ({
  provider,
  onChange,
}) => {
  const { t } = useForkliftTranslation();

  const url = provider?.spec?.url || '';

  const initialState = {
    validation: {
      type: 'default',
      msg: 'The URL of the Openshift Virtualization API endpoint, for example: https:example.com:6443 .',
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

      const trimmedUrl: string = value.toString().trim();
      const validationMsg = validateOpenshiftURL(trimmedUrl);

      dispatch({
        type: 'SET_FIELD_VALIDATED',
        payload: { field: 'url', validationMsg },
      });

      onChange({ ...provider, spec: { ...provider.spec, url: trimmedUrl } });
    },
    [provider],
  );

  return (
    <Form isWidthLimited className="forklift-section-provider-edit">
      <FormGroup
        label={t('URL')}
        fieldId="url"
        validated={state.validation.type}
        helperText={state.validation.msg}
      >
        <TextInput
          type="text"
          id="url"
          name="url"
          value={url}
          validated={state.validation.type}
          onChange={(value) => handleChange('url', value)}
        />
      </FormGroup>
    </Form>
  );
};
