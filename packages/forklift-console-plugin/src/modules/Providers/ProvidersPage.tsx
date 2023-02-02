import React, { useState } from 'react';

import { fromI18nEnum } from '@kubev2v/common/components/Filter/helpers';
import withQueryClient from '@kubev2v/common/components/QueryClientHoc';
import {
  loadUserSettings,
  StandardPage,
  UserSettings,
} from '@kubev2v/common/components/StandardPage';
import { Field } from '@kubev2v/common/components/types';
import { useModal } from '@kubev2v/common/polyfills/sdk-shim';
import * as C from 'src/utils/constants';
import { CONDITIONS, PROVIDERS } from 'src/utils/enums';
import { useTranslation } from 'src/utils/i18n';
import { groupVersionKindForReference } from 'src/utils/resources';
import { ResourceConsolePageProps } from 'src/utils/types';
import { ProviderType, SOURCE_PROVIDER_TYPES } from '@kubev2v/legacy/common/constants';
import { AddEditProviderModal } from '@kubev2v/legacy/Providers/components/AddEditProviderModal';
import { Button } from '@patternfly/react-core';

import { MergedProvider, useProvidersWithInventory } from './data';
import EmptyStateProviders from './EmptyStateProviders';
import ProviderRow from './ProviderRow';

export const fieldsMetadata: Field[] = [
  {
    id: C.NAME,
    toLabel: (t) => t('Name'),
    isVisible: true,
    isIdentity: true, // Name is sufficient ID when Namespace is pre-selected
    filter: {
      type: 'freetext',
      toPlaceholderLabel: (t) => t('Filter by name'),
    },
    sortable: true,
  },
  {
    id: C.NAMESPACE,
    toLabel: (t) => t('Namespace'),
    isVisible: true,
    isIdentity: true,
    filter: {
      type: 'freetext',
      toPlaceholderLabel: (t) => t('Filter by namespace'),
    },
    sortable: true,
  },
  {
    id: C.READY,
    toLabel: (t) => t('Ready'),
    isVisible: true,
    filter: {
      type: 'enum',
      primary: true,
      toPlaceholderLabel: (t) => t('Ready'),
      values: fromI18nEnum(CONDITIONS),
    },
    sortable: true,
  },
  {
    id: C.URL,
    toLabel: (t) => t('Endpoint'),
    isVisible: true,
    filter: {
      type: 'freetext',
      toPlaceholderLabel: (t) => t('Filter by endpoint'),
    },
    sortable: true,
  },
  {
    id: C.TYPE,
    toLabel: (t) => t('Type'),
    isVisible: true,
    filter: {
      type: 'groupedEnum',
      primary: true,
      toPlaceholderLabel: (t) => t('Type'),
      values: fromI18nEnum(PROVIDERS).map(({ id, ...rest }) => ({
        id,
        groupId: SOURCE_PROVIDER_TYPES.includes(id as ProviderType) ? 'source' : 'target',
        ...rest,
      })),
      groups: [
        { groupId: 'target', toLabel: (t) => t('Target') },
        { groupId: 'source', toLabel: (t) => t('Source') },
      ],
    },
    sortable: true,
  },
  {
    id: C.VM_COUNT,
    toLabel: (t) => t('VMs'),
    isVisible: true,
    sortable: true,
  },
  {
    id: C.NETWORK_COUNT,
    toLabel: (t) => t('Networks'),
    isVisible: true,
    sortable: true,
  },
  {
    id: C.CLUSTER_COUNT,
    toLabel: (t) => t('Clusters'),
    isVisible: false,
    sortable: true,
  },
  {
    id: C.HOST_COUNT,
    toLabel: (t) => t('Hosts'),
    isVisible: true,
    sortable: true,
  },
  {
    id: C.STORAGE_COUNT,
    toLabel: (t) => t('Storage'),
    isVisible: false,
    sortable: true,
  },
  {
    id: C.ACTIONS,
    toLabel: () => '',
    isVisible: true,
    sortable: false,
  },
];

const ProvidersPage: React.FC<ResourceConsolePageProps> = ({ namespace, kind: reference }) => {
  const { t } = useTranslation();
  const [userSettings] = useState(() => loadUserSettings({ pageId: 'Providers' }));
  const dataSource = useProvidersWithInventory({
    namespace,
    groupVersionKind: groupVersionKindForReference(reference),
  });

  // data hook triggers frequent re-renders although data remains the same:
  // both the content content and object reference
  return (
    <PageMemo
      dataSource={dataSource}
      namespace={namespace}
      title={t('Providers')}
      userSettings={userSettings}
    />
  );
};
ProvidersPage.displayName = 'ProvidersPage';

const Page: React.FC<{
  dataSource: [MergedProvider[], boolean, boolean];
  namespace: string;
  title: string;
  userSettings: UserSettings;
}> = ({ dataSource, namespace, title, userSettings }) => {
  const showEmptyState = (dataSource[0]?.length ?? 0) === 0;

  return showEmptyState ? (
    <EmptyStateProviders namespace={namespace} />
  ) : (
    <StandardPage<MergedProvider>
      addButton={<AddProviderButton namespace={namespace} />}
      dataSource={dataSource}
      RowMapper={ProviderRow}
      fieldsMetadata={fieldsMetadata}
      namespace={namespace}
      title={title}
      userSettings={userSettings}
    />
  );
};

const PageMemo = React.memo(Page);

const AddProviderButton: React.FC<{ namespace: string }> = ({ namespace }) => {
  const { t } = useTranslation();
  const launchModal = useModal();

  return (
    <Button
      variant="primary"
      onClick={() =>
        launchModal(withQueryClient(AddProviderModal), { currentNamespace: namespace })
      }
    >
      {t('Add Provider')}
    </Button>
  );
};
AddProviderButton.displayName = 'AddProviderButton';

const AddProviderModal: React.FC<{
  currentNamespace: string;
  closeModal: () => void;
}> = ({ closeModal, currentNamespace }) => {
  return (
    <AddEditProviderModal
      onClose={closeModal}
      providerBeingEdited={null}
      namespace={currentNamespace}
    />
  );
};
AddProviderModal.displayName = 'AddProviderModal';

export default ProvidersPage;
export { AddProviderButton };
