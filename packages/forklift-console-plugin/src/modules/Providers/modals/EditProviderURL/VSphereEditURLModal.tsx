import React from 'react';
import { ForkliftTrans, useForkliftTranslation } from 'src/utils/i18n';

import { ProviderModel } from '@kubev2v/types';
import { ModalVariant } from '@patternfly/react-core';

import { validateVCenterURL } from '../../utils';
import { EditModal } from '../EditModal';

import { patchProviderURL } from './utils/patchProviderURL';
import { EditProviderURLModalProps } from './EditProviderURLModal';

export const VSphereEditURLModal: React.FC<EditProviderURLModalProps> = (props) => {
  const { t } = useForkliftTranslation();

  const ModalBody = (
    <ForkliftTrans>
      <p>URL of the vCenter API endpoint.</p>
      <p>
        The format of the URL of the vCenter API endpoint should include a scheme, a domain name,
        path, and optionally a port. Usually the path will end with /sdk, for example:{' '}
        <strong>https://vCenter-host-example.com/sdk</strong>.
      </p>
    </ForkliftTrans>
  );

  return (
    <EditModal
      {...props}
      jsonPath={'spec.url'}
      title={props?.title || t('Edit URL')}
      label={props?.label || t('URL')}
      model={ProviderModel}
      variant={ModalVariant.large}
      body={ModalBody}
      helperText={t(
        'The URL of the vCenter API endpoint, for example: https://vCenter-host-example.com/sdk .',
      )}
      onConfirmHook={patchProviderURL}
      validationHook={validateVCenterURL}
    />
  );
};
