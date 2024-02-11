import React from 'react';
import { ForkliftTrans, useForkliftTranslation } from 'src/utils/i18n';

import { Modify, ProviderModel, V1beta1Provider } from '@kubev2v/types';
import { K8sModel, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';

import { validateContainerImage } from '../../utils';
import { EditModal, EditModalProps, OnConfirmHookType, ValidationHookType } from '../EditModal';

/**
 * Handles the confirmation action for editing a resource annotations.
 * Adds or updates the vddkInitImage settings in the resource's spec.
 *
 * @param {Object} options - Options for the confirmation action.
 * @param {Object} options.resource - The resource to be modified.
 * @param {Object} options.model - The model associated with the resource.
 * @param {any} options.newValue - The new value for the 'vddkInitImage' spec settings.
 * @returns {Promise<Object>} - The modified resource.
 */
const onConfirm: OnConfirmHookType = async ({ resource, model, newValue: value }) => {
  const provider = resource as V1beta1Provider;
  const currentSettings = provider?.spec?.settings as object;
  const settings = {
    ...currentSettings,
    vddkInitImage: value || undefined,
  };

  const op = provider?.spec?.settings ? 'replace' : 'add';

  const obj = await k8sPatch({
    model: model,
    resource: resource,
    data: [
      {
        op,
        path: '/spec/settings',
        value: settings,
      },
    ],
  });

  return obj;
};

export type EditProviderVDDKImageProps = Modify<
  EditModalProps,
  {
    resource: V1beta1Provider;
    title?: string;
    label?: string;
    model?: K8sModel;
    jsonPath?: string | string[];
  }
>;

const EditProviderVDDKImage_: React.FC<EditProviderVDDKImageProps> = (props) => {
  const { t } = useForkliftTranslation();

  const vddkHelperTextMsgs = {
    error: (
      <div className="forklift-edit-modal-field-error-validation">
        <ForkliftTrans>
          Error: The format of the provided VDDK init image is invalid. Ensure the path is a valid
          container image path. For example: <strong>quay.io/kubev2v/vddk:latest</strong>.
        </ForkliftTrans>
      </div>
    ),
    success: (
      <div className="forklift-edit-modal-field-success-validation">
        <ForkliftTrans>
          The path must be empty or a valid container image path. For example:{' '}
          <strong>quay.io/kubev2v/vddk:latest</strong>.
        </ForkliftTrans>
      </div>
    ),
    default: (
      <div className="forklift-edit-modal-field-default-validation">
        <ForkliftTrans>
          The path must be empty or a valid container image path. For example:{' '}
          <strong>quay.io/kubev2v/vddk:latest</strong>.
        </ForkliftTrans>
      </div>
    ),
  };

  const imageValidationHook: ValidationHookType = (value) => {
    const trimmedValue = value.toString().trim();
    const isValidImage = trimmedValue === '' || validateContainerImage(value.toString().trim());

    return isValidImage
      ? {
          validationHelpText: vddkHelperTextMsgs.success,
          validated: 'success',
        }
      : {
          validationHelpText: vddkHelperTextMsgs.error,
          validated: 'error',
        };
  };

  return (
    <EditModal
      {...props}
      jsonPath={'spec.settings.vddkInitImage'}
      title={props?.title || t('Edit VDDK init image')}
      label={props?.label || t('VDDK init image')}
      model={ProviderModel}
      body={
        <ForkliftTrans>
          Virtual Disk Development Kit (VDDK) container init image path.
          <br />
          <br />
          Note: It is strongly recommended to specify a VDDK init image to accelerate migrations.
        </ForkliftTrans>
      }
      helperText={vddkHelperTextMsgs.default}
      validationHook={imageValidationHook}
      onConfirmHook={onConfirm}
    />
  );
};

export const EditProviderVDDKImage: React.FC<EditProviderVDDKImageProps> = (props) => {
  if (props.resource?.spec?.type !== 'vsphere') {
    return <></>;
  }

  return <EditProviderVDDKImage_ {...props} />;
};
