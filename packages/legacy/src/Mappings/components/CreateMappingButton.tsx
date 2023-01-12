import * as React from 'react';
import { Button, ButtonProps } from '@patternfly/react-core';
import { ConditionalTooltip } from '@kubev2v/legacy/common/components/ConditionalTooltip';
import { useHasSufficientProvidersQuery } from '@kubev2v/legacy/queries';
import { PROVIDER_TYPE_NAMES } from '@kubev2v/legacy/common/constants';

interface ICreateMappingButtonProps {
  onClick: () => void;
  variant?: ButtonProps['variant'];
  label?: string;
}

export const CreateMappingButton: React.FunctionComponent<ICreateMappingButtonProps> = ({
  onClick,
  variant = 'primary',
  label = 'Create mapping',
  ...props
}: ICreateMappingButtonProps) => {
  const sufficientProvidersQuery = useHasSufficientProvidersQuery();
  const { hasSufficientProviders } = sufficientProvidersQuery;
  return (
    <ConditionalTooltip
      isTooltipEnabled={!hasSufficientProviders}
      content={`You must add at least one ${PROVIDER_TYPE_NAMES.vsphere} or ${PROVIDER_TYPE_NAMES.ovirt} provider and one ${PROVIDER_TYPE_NAMES.openshift} provider in order to create a mapping.`}
    >
      <Button
        {...props}
        onClick={onClick}
        isAriaDisabled={!hasSufficientProviders}
        variant={variant}
      >
        {label}
      </Button>
    </ConditionalTooltip>
  );
};
