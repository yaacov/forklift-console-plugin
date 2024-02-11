import React, { FC, ReactNode } from 'react';

import {
  Button,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';

import '../ProvidersCreateVmMigration.style.css';

export const EditableDescriptionItem: FC<{
  title: string;
  content: ReactNode;
  ariaEditLabel: string;
  onEdit: () => void;
}> = ({ title, content, ariaEditLabel = 'Edit', onEdit }) => (
  <DescriptionListGroup>
    <DescriptionListTerm>{title}</DescriptionListTerm>
    <DescriptionListDescription>
      <div className="forklift-page-editable-description-item">
        {content}
        <Button
          className="forklift-page-editable-description-item-button"
          style={{ paddingTop: 0 }}
          variant="plain"
          icon={<PencilAltIcon />}
          aria-label={ariaEditLabel}
          onClick={onEdit}
        />
      </div>
    </DescriptionListDescription>
  </DescriptionListGroup>
);
