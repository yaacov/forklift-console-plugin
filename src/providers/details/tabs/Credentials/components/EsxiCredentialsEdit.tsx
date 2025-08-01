import { type FC, type FormEvent, useCallback, useState } from 'react';
import { encode } from 'js-base64';
import { FormGroupWithHelpText } from 'src/components/common/FormGroupWithHelpText/FormGroupWithHelpText';
import type { CredentialsEditModeByTypeProps } from 'src/providers/details/tabs/Credentials/components/utils/types';
import { SecretFieldsId } from 'src/providers/utils/constants';
import type { ValidationMsg } from 'src/providers/utils/types';
import { useForkliftTranslation } from 'src/utils/i18n';

import { Button, Divider, Form, InputGroup, TextInput } from '@patternfly/react-core';
import { EyeIcon, EyeSlashIcon } from '@patternfly/react-icons';

import { esxiSecretFieldValidator } from './utils/esxiSecretFieldValidator';
import { getDecodedValue } from './utils/getDecodedValue';
import CertificateEditSection from './CertificateEditSection';

const EsxiCredentialsEdit: FC<CredentialsEditModeByTypeProps> = ({ onNewSecretChange, secret }) => {
  const { t } = useForkliftTranslation();

  const user = getDecodedValue(secret?.data?.user);
  const password = getDecodedValue(secret?.data?.password);
  const url = getDecodedValue(secret?.data?.url);
  const cacert = getDecodedValue(secret?.data?.cacert);
  const insecureSkipVerify = getDecodedValue(secret?.data?.insecureSkipVerify);

  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);
  const [userValidation, setUserValidation] = useState<ValidationMsg>(
    esxiSecretFieldValidator(SecretFieldsId.User, user!),
  );
  const [passwordValidation, setPasswordValidation] = useState<ValidationMsg>(
    esxiSecretFieldValidator('password', password!),
  );
  const [cacertValidation, setCacertValidation] = useState<ValidationMsg>(
    esxiSecretFieldValidator('cacert', cacert!),
  );
  const [insecureSkipVerifyValidation, setInsecureSkipVerifyValidation] = useState<ValidationMsg>(
    esxiSecretFieldValidator('insecureSkipVerify', insecureSkipVerify!),
  );

  const handleChange = useCallback(
    (id: SecretFieldsId, value: string) => {
      const validationState = esxiSecretFieldValidator(id, value);

      if (id === SecretFieldsId.User) setUserValidation(validationState);
      if (id === SecretFieldsId.Password) setPasswordValidation(validationState);
      if (id === SecretFieldsId.InsecureSkipVerify)
        setInsecureSkipVerifyValidation(validationState);
      if (id === SecretFieldsId.CaCert) setCacertValidation(validationState);

      // don't trim fields that allow spaces
      const encodedValue =
        id === SecretFieldsId.CaCert ? encode(value ?? '') : encode(value?.trim() ?? '');

      onNewSecretChange({ ...secret, data: { ...secret.data, [id]: encodedValue } });
    },
    [secret, onNewSecretChange],
  );

  const onClickTogglePassword = () => {
    setPasswordHidden(!passwordHidden);
  };

  const onChangeUser: (_event: FormEvent<HTMLInputElement>, value: string) => void = (
    _event,
    value,
  ) => {
    handleChange(SecretFieldsId.User, value);
  };

  const onChangePassword: (_event: FormEvent<HTMLInputElement>, value: string) => void = (
    _event,
    value,
  ) => {
    handleChange(SecretFieldsId.Password, value);
  };

  const onChangeInsecure: (_event: FormEvent<HTMLInputElement>, checked: boolean) => void = (
    _event,
    checked,
  ) => {
    handleChange(SecretFieldsId.InsecureSkipVerify, checked ? 'true' : 'false');
  };

  const onDataChange: (data: string) => void = (data) => {
    handleChange(SecretFieldsId.CaCert, data);
  };

  return (
    <Form isWidthLimited className="forklift-section-secret-edit">
      <FormGroupWithHelpText
        label={t('Username')}
        isRequired
        fieldId="user"
        helperText={userValidation.msg}
        helperTextInvalid={userValidation.msg}
        validated={userValidation.type}
      >
        <TextInput
          spellCheck="false"
          isRequired
          type="text"
          id="user"
          name="user"
          onChange={onChangeUser}
          value={user}
          validated={userValidation.type}
        />
      </FormGroupWithHelpText>
      <FormGroupWithHelpText
        label={t('Password')}
        isRequired
        fieldId="password"
        helperText={passwordValidation.msg}
        helperTextInvalid={passwordValidation.msg}
        validated={passwordValidation.type}
      >
        <InputGroup>
          <TextInput
            spellCheck="false"
            isRequired
            type={passwordHidden ? 'password' : 'text'}
            aria-label="Password input"
            onChange={onChangePassword}
            value={password}
            validated={passwordValidation.type}
          />
          <Button
            variant="control"
            onClick={onClickTogglePassword}
            aria-label={passwordHidden ? 'Show password' : 'Hide password'}
          >
            {passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
          </Button>
        </InputGroup>
      </FormGroupWithHelpText>

      <Divider />

      <CertificateEditSection
        insecureSkipVerifyValidation={insecureSkipVerifyValidation}
        insecureSkipVerify={insecureSkipVerify}
        cacertValidation={cacertValidation}
        cacert={cacert}
        url={url}
        onChangeInsecure={onChangeInsecure}
        onDataChange={onDataChange}
      />
    </Form>
  );
};

export default EsxiCredentialsEdit;
