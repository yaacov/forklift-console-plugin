import React, { useReducer } from 'react';
import { Trans } from 'react-i18next';
import { useHistory } from 'react-router';
import SectionHeading from 'src/components/headers/SectionHeading';
import { getResourceUrl } from 'src/modules/Providers/utils';
import { MigrationAction } from 'src/modules/Providers/views/details/tabs/VirtualMachines/components/MigrationAction';
import { useForkliftTranslation } from 'src/utils/i18n';

import { ProviderModelGroupVersionKind, ProviderModelRef, V1beta1Provider } from '@kubev2v/types';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import {
  Alert,
  Button,
  HelperText,
  HelperTextItem,
  Level,
  LevelItem,
  PageSection,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';

import { findProviderByID, PlanCreateForm, ProviderVirtualMachinesList } from './components';
import { planCreatePageInitialState, planCreatePageReducer } from './states';

import './PlanCreatePage.style.css';

export const PlanCreatePage: React.FC<{
  namespace: string;
}> = ({ namespace }) => {
  const { t } = useForkliftTranslation();
  const history = useHistory();
  const [filterState, filterDispatch] = useReducer(
    planCreatePageReducer,
    planCreatePageInitialState,
  );

  const [providers] = useK8sWatchResource<V1beta1Provider[]>({
    groupVersionKind: ProviderModelGroupVersionKind,
    namespaced: true,
    isList: true,
    namespace,
  });

  const defaultNamespace = process?.env?.DEFAULT_NAMESPACE || 'default';

  const providersListURL = getResourceUrl({
    reference: ProviderModelRef,
    namespace: namespace,
  });

  const filteredProviders = providers.filter(
    (provider) =>
      provider.metadata.name.toLowerCase().includes(filterState.nameFilter.toLowerCase()) &&
      (filterState.typeFilters.length === 0 ||
        filterState.typeFilters.includes(provider.spec.type)),
  );

  const selectedProvider =
    filterState.selectedProviderUID !== ''
      ? findProviderByID(filterState.selectedProviderUID, providers)
      : undefined;
  const selectedProviderName = selectedProvider?.metadata?.name;
  const selectedProviderNamespace = selectedProvider?.metadata?.namespace;

  return (
    <div>
      <PageSection variant="light">
        <SectionHeading text={t('Create migration plan')} />

        <HelperText className="forklift-create-subtitle">
          <HelperTextItem variant="default">
            <Trans t={t} ns="plugin__forklift-console-plugin">
              Select the source provider, once a provider is selected, continue to select the
              virtual machines to migrate from the list of available virtual machines for this
              provider.
            </Trans>
          </HelperTextItem>
        </HelperText>

        {!namespace && (
          <Alert
            className="co-alert co-alert--margin-top"
            isInline
            variant="warning"
            title={t('Namespace is not defined')}
          >
            <Trans t={t} ns="plugin__forklift-console-plugin">
              This plan will be created in <strong>{defaultNamespace}</strong> namespace, if you
              wish to choose another namespace please cancel, and choose a namespace from the top
              bar.
            </Trans>
          </Alert>
        )}

        <PageSection>
          <Level>
            <LevelItem>
              <Title headingLevel="h1">{t('Select source provider')}</Title>
            </LevelItem>
          </Level>

          <PlanCreateForm
            providers={filteredProviders}
            filterState={filterState}
            filterDispatch={filterDispatch}
          />
        </PageSection>

        {filterState.selectedProviderUID && (
          <ProviderVirtualMachinesList
            title={t('Select virtual machines')}
            name={selectedProviderName}
            namespace={selectedProviderNamespace}
            onSelect={(selectedVms) =>
              filterDispatch({ type: 'UPDATE_SELECTED_VMS', payload: selectedVms })
            }
            initialSelectedIds={filterState.selectedVMs.map((vm) => vm.vm.id)}
          />
        )}

        <PageSection>
          <Toolbar>
            <ToolbarContent>
              <MigrationAction
                {...{
                  provider: selectedProvider,
                  selectedVms: filterState.selectedVMs,
                }}
              />
              <ToolbarItem>
                <Button onClick={() => history.push(providersListURL)} variant="secondary">
                  {t('Cancel')}
                </Button>
              </ToolbarItem>
            </ToolbarContent>
          </Toolbar>
        </PageSection>
      </PageSection>
    </div>
  );
};

export default PlanCreatePage;
