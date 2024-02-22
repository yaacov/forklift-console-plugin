import React from 'react';
import { useToggle } from 'src/modules/Providers/hooks';
import { ModalHOC } from 'src/modules/Providers/modals';
import { useForkliftTranslation } from 'src/utils/i18n';

import { Dropdown, DropdownPosition, DropdownToggle, KebabToggle } from '@patternfly/react-core';

import { CellProps } from '../views/list/components';

import { StorageMapActionsDropdownItems } from './StorageMapActionsDropdownItems';

import './StorageMapActionsDropdown.style.css';

const StorageMapActionsKebabDropdown_: React.FC<StorageMapActionsDropdownProps> = ({
  data,
  isKebab,
}) => {
  const { t } = useForkliftTranslation();

  // Hook for managing the open/close state of the dropdown
  const [isDropdownOpen, toggle] = useToggle();

  // Returning the Dropdown component from PatternFly library
  return (
    <Dropdown
      onSelect={toggle}
      isOpen={isDropdownOpen}
      isPlain
      position={DropdownPosition.right}
      className={isKebab ? undefined : 'forklift-dropdown pf-c-menu-toggle'}
      toggle={
        isKebab ? (
          <KebabToggle id="toggle-kebab" onToggle={toggle} />
        ) : (
          <DropdownToggle id="toggle-basic" onToggle={toggle}>
            {t('Actions')}
          </DropdownToggle>
        )
      }
      dropdownItems={StorageMapActionsDropdownItems({ data })}
    />
  );
};

export const StorageMapActionsDropdown: React.FC<StorageMapActionsDropdownProps> = (props) => (
  <ModalHOC>
    <StorageMapActionsKebabDropdown_ {...props} />
  </ModalHOC>
);

export interface StorageMapActionsDropdownProps extends CellProps {
  isKebab?: boolean;
}