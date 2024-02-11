import React, { useCallback, useReducer } from 'react';
import { validateVCenterURL, validateVDDKImage } from 'src/modules/Providers/utils';
import { ForkliftTrans, useForkliftTranslation } from 'src/utils/i18n';

import { ExternalLink } from '@kubev2v/common';
import { V1beta1Provider } from '@kubev2v/types';
import { Form, FormGroup, Popover, TextInput } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

const CREATE_VDDK_HELP_LINK =
  'https://access.redhat.com/documentation/en-us/migration_toolkit_for_virtualization/2.5/html-single/installing_and_using_the_migration_toolkit_for_virtualization/index#creating-vddk-image_mtv';

export interface VSphereProviderCreateFormProps {
  provider: V1beta1Provider;
  onChange: (newValue: V1beta1Provider) => void;
}

export const VSphereProviderCreateForm: React.FC<VSphereProviderCreateFormProps> = ({
  provider,
  onChange,
}) => {
  const { t } = useForkliftTranslation();

  const url = provider?.spec?.url || '';
  const vddkInitImage = provider?.spec?.settings?.['vddkInitImage'] || '';

  const vddkHelperTextPopover = (
    <ForkliftTrans>
      <p>
        VMware Virtual Disk Development Kit (VDDK) image in a secure registry that is accessible to
        all clusters, for example: quay.io/kubev2v/vddk:latest .
      </p>
      <p>
        It is strongly recommended to create a VDDK init image to accelerate migrations. For more
        information, see <ExternalLink href={CREATE_VDDK_HELP_LINK}></ExternalLink>.
      </p>
    </ForkliftTrans>
  );

  const initialState = {
    validationUrl: {
      type: 'default',
      msg: 'The URL of the vCenter API endpoint for example: https://vCenter-host-example.com/sdk .',
    },
    validationVddk: {
      type: 'default',
      msg: 'VMware Virtual Disk Development Kit (VDDK) image, for example: quay.io/kubev2v/vddk:latest .',
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
      const trimmedValue = value.trim();

      if (id == 'vddkInitImage') {
        const validationState = validateVDDKImage(trimmedValue);

        dispatch({
          type: 'SET_FIELD_VALIDATED',
          payload: { field: 'vddkInitImage', validationState },
        });

        onChange({
          ...provider,
          spec: {
            type: provider.spec.type,
            url: provider.spec.url,
            ...provider?.spec,
            settings: {
              ...(provider?.spec?.settings as object),
              vddkInitImage: trimmedValue,
            },
          },
        });
      }

      if (id === 'url') {
        const validationState = validateVCenterURL(trimmedValue);

        dispatch({ type: 'SET_FIELD_VALIDATED', payload: { field: 'url', validationState } });

        onChange({ ...provider, spec: { ...provider.spec, url: trimmedValue } });
      }
    },
    [provider],
  );

  return (
    <Form isWidthLimited className="forklift-section-provider-edit">
      <FormGroup
        label={t('URL')}
        isRequired
        fieldId="url"
        helperText={state.validationUrl.msg}
        validated={state.validationUrl.type}
      >
        <TextInput
          isRequired
          type="text"
          id="url"
          name="url"
          value={url}
          validated={state.validationUrl.type}
          onChange={(value) => handleChange('url', value)}
        />
      </FormGroup>

      <FormGroup
        label={t('VDDK init image')}
        fieldId="vddkInitImage"
        helperText={state.validationVddk.msg}
        validated={state.validationVddk.type}
        labelIcon={
          <Popover
            headerContent={t('VDDK init image')}
            bodyContent={vddkHelperTextPopover}
            alertSeverityVariant="info"
          >
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="pf-c-form__group-label-help"
            >
              <HelpIcon noVerticalAlign />
            </button>
          </Popover>
        }
      >
        <TextInput
          type="text"
          id="vddkInitImage"
          name="vddkInitImage"
          value={vddkInitImage}
          validated={state.validationVddk.type}
          onChange={(value) => handleChange('vddkInitImage', value)}
        />
      </FormGroup>
    </Form>
  );
};
