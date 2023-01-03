import { ProviderType } from '@kubev2v/legacy/common/constants';
import { isSameResource } from '@kubev2v/legacy/queries/helpers';
import { InventoryProvider, ICorrelatedProvider, IProviderObject } from '@kubev2v/legacy/queries/types';

export const correlateProviders = <T extends InventoryProvider>(
  clusterProviders: IProviderObject[],
  inventoryProviders: T[],
  providerType: ProviderType
): ICorrelatedProvider<T>[] =>
  clusterProviders
    .filter((provider) => provider.spec.type === providerType)
    .map((provider) => ({
      ...provider,
      inventory:
        inventoryProviders.find((inventoryProvider) =>
          isSameResource(inventoryProvider, provider.metadata)
        ) || null,
    }));
