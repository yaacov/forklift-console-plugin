import * as React from 'react';
import {
  PageSection,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  Title,
} from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import { MustGatherModal } from '@kubev2v/legacy/common/components/MustGatherModal';

import {
  useHasSufficientProvidersQuery,
  usePlansQuery,
  useClusterProvidersQuery,
  useMigrationsQuery,
} from '@kubev2v/legacy/queries';

import { PlansTable } from './components/PlansTable';
import { CreatePlanButton } from './components/CreatePlanButton';
import { ResolvedQueries } from '@kubev2v/legacy/common/components/ResolvedQuery';
import { PROVIDER_TYPE_NAMES } from '@kubev2v/legacy/common/constants';

export const PlansPage: React.FunctionComponent = () => {
  const sufficientProvidersQuery = useHasSufficientProvidersQuery();
  const clusterProvidersQuery = useClusterProvidersQuery();
  const plansQuery = usePlansQuery();
  const migrationsQuery = useMigrationsQuery();

  return (
    <>
      <PageSection variant="light">
        <Title headingLevel="h1">Migration plans</Title>
      </PageSection>
      <PageSection>
        <ResolvedQueries
          results={[
            sufficientProvidersQuery.result,
            clusterProvidersQuery,
            plansQuery,
            migrationsQuery,
          ]}
          errorTitles={[
            'Cannot load providers',
            'Cannot load providers from cluster',
            'Cannot load plans',
            'Cannot load migrations',
          ]}
          errorsInline={false}
        >
          {!plansQuery.data ? null : plansQuery.data.items.length === 0 ? (
            <EmptyState className={spacing.my_2xl}>
              <EmptyStateIcon icon={PlusCircleIcon} />
              <Title size="lg" headingLevel="h2">
                No migration plans
              </Title>
              <EmptyStateBody>
                Create a migration plan to select VMs to migrate to {PROVIDER_TYPE_NAMES.openshift}.
              </EmptyStateBody>
              <CreatePlanButton />
            </EmptyState>
          ) : (
            <PlansTable plans={plansQuery.data?.items || []} />
          )}
        </ResolvedQueries>
      </PageSection>
      <MustGatherModal />
    </>
  );
};
