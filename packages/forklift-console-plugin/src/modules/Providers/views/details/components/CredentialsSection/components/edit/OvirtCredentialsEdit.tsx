import React, { useCallback, useReducer } from 'react';
import { Base64 } from 'js-base64';
import { ovirtSecretFieldValidator, safeBase64Decode } from 'src/modules/Providers/utils';
import { ForkliftTrans, useForkliftTranslation } from 'src/utils/i18n';

import {
  Button,
  Divider,
  FileUpload,
  Form,
  FormGroup,
  Popover,
  Switch,
  TextInput,
} from '@patternfly/react-core';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

import { EditComponentProps } from '../BaseCredentialsSection';

export const OvirtCredentialsEdit: React.FC<EditComponentProps> = ({ secret, onChange }) => {
  const { t } = useForkliftTranslation();

  const user = safeBase64Decode(secret?.data?.user || '');
  const password = safeBase64Decode(secret?.data?.password || '');
  const insecureSkipVerify = safeBase64Decode(secret?.data?.insecureSkipVerify || '') === 'true';
  const cacert = safeBase64Decode(secret?.data?.cacert || '');

  const insecureSkipVerifyHelperTextPopover = (
    <ForkliftTrans>
      <p>
        Select <strong>Skip certificate validation</strong> to skip certificate verification, which
        proceeds with an insecure migration and then the certificate is not required. Insecure
        migration means that the transferred data is sent over an insecure connection and
        potentially sensitive data could be exposed.
      </p>
    </ForkliftTrans>
  );

  const cacertHelperTextPopover = (
    <ForkliftTrans>
      <p>
        Use the CA certificate of the Manager unless it was replaced by a third-party certificate,
        in which case enter the Manager Apache CA certificate. You can retrieve the Manager CA
        certificate at
        https://[engine_host]/ovirt-engine/services/pki-resource?resource=ca-certificate&format=X509-PEM-CA.
      </p>
      <p>When left empty the system CA certificate is used.</p>
      <p>
        The certificate is not verified when <strong>Skip certificate validation</strong> is set.
      </p>
    </ForkliftTrans>
  );

  const initialState = {
    passwordHidden: true,
    validation: {
      user: {
        type: 'default',
        msg: 'A username for connecting to the Red Hat Virtualization Manager (RHVM) API endpoint, for example: name@internal .',
      },
      password: {
        type: 'default',
        msg: 'A user password for connecting to the Red Hat Virtualization Manager (RHVM) API endpoint.',
      },
      insecureSkipVerify: { type: 'default', msg: 'Skip certificate validation' },
      cacert: {
        type: 'default',
        msg: 'The Manager CA certificate unless it was replaced by a third-party certificate, in which case enter the Manager Apache CA certificate.',
      },
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
      const validationState = ovirtSecretFieldValidator(id, value);
      dispatch({
        type: 'SET_FIELD_VALIDATED',
        payload: { field: id, validationState },
      });

      // don't trim fields that allow spaces
      const encodedValue = ['cacert'].includes(id)
        ? Base64.encode(value)
        : Base64.encode(value.trim());

      onChange({ ...secret, data: { ...secret.data, [id]: encodedValue } });
    },
    [secret],
  );

  const togglePasswordHidden = () => {
    dispatch({ type: 'TOGGLE_PASSWORD_HIDDEN' });
  };

  return (
    <Form isWidthLimited className="forklift-section-secret-edit">
      <FormGroup
        label={t('Username')}
        isRequired
        fieldId="user"
        helperText={state.validation.userHelperText}
        validated={state.validation.user}
        helperTextInvalid={state.validation.userHelperText}
      >
        <TextInput
          isRequired
          type="text"
          id="user"
          name="user"
          value={user}
          validated={state.validation.user}
          onChange={(value) => handleChange('user', value)}
        />
      </FormGroup>
      <FormGroup
        label={t('Password')}
        isRequired
        fieldId="password"
        helperText={state.validation.password.msg}
        validated={state.validation.password.type}
      >
        <TextInput
          className="pf-u-w-75"
          isRequired
          type={state.passwordHidden ? 'password' : 'text'}
          aria-label="Password input"
          value={password}
          validated={state.validation.password.type}
          onChange={(value) => handleChange('password', value)}
        />
        <Button
          variant="control"
          onClick={() => togglePasswordHidden()}
          aria-label={state.passwordHidden ? 'Show password' : 'Hide password'}
        >
          {state.passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
        </Button>
      </FormGroup>

      <Divider />

      <FormGroup
        label={t('Skip certificate validation')}
        labelIcon={
          <Popover
            headerContent={t('Skip certificate validation')}
            bodyContent={insecureSkipVerifyHelperTextPopover}
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
        fieldId="insecureSkipVerify"
        validated={state.validation.insecureSkipVerify.type}
        helperTextInvalid={state.validation.insecureSkipVerify.msg}
      >
        <Switch
          className="forklift-section-secret-edit-switch"
          id="insecureSkipVerify"
          name="insecureSkipVerify"
          label={t('Skip certificate validation')}
          isChecked={insecureSkipVerify}
          hasCheckIcon
          onChange={(value) => handleChange('insecureSkipVerify', value ? 'true' : 'false')}
        />
      </FormGroup>

      <FormGroup
        label={t('CA certificate')}
        labelIcon={
          <Popover
            headerContent={t('CA certificate')}
            bodyContent={cacertHelperTextPopover}
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
        fieldId="cacert"
        helperText={state.validation.cacert.msg}
        validated={state.validation.cacert.type}
      >
        <FileUpload
          id="cacert"
          type="text"
          filenamePlaceholder="Drag and drop a file or upload one"
          value={cacert}
          validated={state.validation.cacert.type}
          onDataChange={(value) => handleChange('cacert', value)}
          onTextChange={(value) => handleChange('cacert', value)}
          onClearClick={() => handleChange('cacert', '')}
          browseButtonText="Upload"
          isDisabled={insecureSkipVerify}
        />
      </FormGroup>
    </Form>
  );
};
