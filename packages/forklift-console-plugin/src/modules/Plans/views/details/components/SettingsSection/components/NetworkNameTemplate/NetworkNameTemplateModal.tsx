import React, { FC } from 'react';
import { useForkliftTranslation } from 'src/utils';

import { SettingsEditModalProps } from '../../utils/types';
import NameTemplateModalBody from '../NameTemplate/NameTemplateModal/components/NameTemplateModalBody/NameTemplateModalBody';
import NameTemplateModalHelper from '../NameTemplate/NameTemplateModal/components/NameTemplateModalHelper/NameTemplateModalHelper';
import NameTemplateModal from '../NameTemplate/NameTemplateModal/NameTemplateModal';

import {
  getNetworkNameTemplateAllowedVariables,
  networkNameTemplateHelperExamples,
} from './utils/constants';

const NetworkNameTemplateModal: FC<SettingsEditModalProps> = ({ title, jsonPath, resource }) => {
  const { t } = useForkliftTranslation();

  return (
    <NameTemplateModal
      resource={resource}
      title={title ?? t('Edit network name template')}
      jsonPath={jsonPath}
      body={
        <NameTemplateModalBody
          bodyText={t(
            'Network name template is a template for generating network interface names in the target virtual machine.',
          )}
          allowedVariables={getNetworkNameTemplateAllowedVariables(t)}
        />
      }
      helperText={<NameTemplateModalHelper examples={networkNameTemplateHelperExamples} />}
    />
  );
};

export default NetworkNameTemplateModal;
