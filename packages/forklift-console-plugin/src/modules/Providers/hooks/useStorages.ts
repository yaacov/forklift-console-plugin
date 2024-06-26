import { useMemo } from 'react';

import {
  OpenShiftStorageClass,
  OpenstackVolumeType,
  OVirtStorageDomain,
  ProviderType,
  TypedOvaResource,
  V1beta1Provider,
  VSphereDataStore,
} from '@kubev2v/types';

import useProviderInventory from './useProviderInventory';

const glanceStorage: InventoryStorage = {
  providerType: 'openstack',
  id: 'glance',
  revision: 1,
  name: 'glance',
  selfLink: '',
  description: '',
  isPublic: true,
  qosSpecsID: '',
  publicAccess: true,
};

const subPath: { [keys in ProviderType]: string } = {
  vsphere: '/datastores',
  openstack: '/volumetypes',
  openshift: '/storageclasses?detail=1',
  ova: '/storages?detail=1',
  ovirt: '/storagedomains',
};

export type InventoryStorage =
  | VSphereDataStore
  | OVirtStorageDomain
  | OpenstackVolumeType
  | OpenShiftStorageClass
  | TypedOvaResource;

export const useSourceStorages = (
  provider: V1beta1Provider,
): [InventoryStorage[], boolean, Error] => {
  const providerType: ProviderType = provider?.spec?.type as ProviderType;
  const {
    inventory: storages,
    loading,
    error,
  } = useProviderInventory<InventoryStorage[]>({
    provider,
    subPath: subPath[providerType] ?? '',
    disabled: !provider || !subPath[providerType],
  });

  const typedStorages = useMemo(() => {
    const storageList = Array.isArray(storages)
      ? storages.map((st) => ({ ...st, providerType } as InventoryStorage))
      : [];

    if (Array.isArray(storages) && providerType === 'openstack') {
      storageList.push(glanceStorage);
    }

    return storageList;
  }, [storages]);

  return [typedStorages, loading, error];
};

export const useOpenShiftStorages = (
  provider: V1beta1Provider,
): [OpenShiftStorageClass[], boolean, Error] => {
  const providerType: ProviderType = provider?.spec?.type as ProviderType;
  const {
    inventory: storages,
    loading,
    error,
  } = useProviderInventory<OpenShiftStorageClass[]>({
    provider,
    subPath: '/storageclasses?detail=1',
    disabled: !provider || providerType !== 'openshift',
  });

  const typedStorages = useMemo(
    () =>
      Array.isArray(storages)
        ? storages.map((st) => ({ ...st, providerType: 'openshift' } as OpenShiftStorageClass))
        : [],
    [storages],
  );

  return [typedStorages, loading, error];
};
