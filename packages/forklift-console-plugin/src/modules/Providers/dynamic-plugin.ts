import { ProviderModel, ProviderModelGroupVersionKind } from '@kubev2v/types';
import { EncodedExtension } from '@openshift/dynamic-plugin-sdk-webpack';
import {
  ContextProvider,
  CreateResource,
  ModelMetadata,
  ResourceDetailsPage,
  ResourceListPage,
  ResourceNSNavItem,
} from '@openshift-console/dynamic-plugin-sdk';
import type { ConsolePluginBuildMetadata } from '@openshift-console/dynamic-plugin-sdk-webpack';

export const exposedModules: ConsolePluginBuildMetadata['exposedModules'] = {
  ProvidersListPage: './modules/Providers/views/list/ProvidersListPage',
  ProviderDetailsPage: './modules/Providers/views/details/ProviderDetailsPage',
  ProvidersCreatePage: './modules/Providers/views/create/ProvidersCreatePage',
  ProvidersCreateVmMigrationContext:
    './modules/Providers/views/migrate/ProvidersCreateVmMigrationContext',
};

export const extensions: EncodedExtension[] = [
  {
    type: 'console.navigation/resource-ns',
    properties: {
      id: 'providers-ng',
      insertAfter: ['forkliftSettings', 'importSeparator'],
      perspective: 'admin',
      section: 'migration',
      // t('plugin__forklift-console-plugin~Providers for virtualization')
      name: '%plugin__forklift-console-plugin~Providers for virtualization%',
      model: ProviderModelGroupVersionKind,
      dataAttributes: {
        'data-quickstart-id': 'qs-nav-providers',
        'data-testid': 'providers-nav-item',
      },
    },
  } as EncodedExtension<ResourceNSNavItem>,

  {
    type: 'console.page/resource/list',
    properties: {
      component: {
        $codeRef: 'ProvidersListPage',
      },
      model: ProviderModelGroupVersionKind,
    },
  } as EncodedExtension<ResourceListPage>,

  {
    type: 'console.page/resource/details',
    properties: {
      component: {
        $codeRef: 'ProviderDetailsPage',
      },
      model: ProviderModelGroupVersionKind,
    },
  } as EncodedExtension<ResourceDetailsPage>,

  {
    type: 'console.model-metadata',
    properties: {
      model: ProviderModelGroupVersionKind,
      ...ProviderModel,
    },
  } as EncodedExtension<ModelMetadata>,

  {
    type: 'console.resource/create',
    properties: {
      component: {
        $codeRef: 'ProvidersCreatePage',
      },
      model: ProviderModelGroupVersionKind,
      ...ProviderModel,
    },
  } as EncodedExtension<CreateResource>,

  {
    type: 'console.context-provider',
    properties: {
      provider: { $codeRef: 'ProvidersCreateVmMigrationContext.CreateVmMigrationProvider' },
      useValueHook: {
        $codeRef: 'ProvidersCreateVmMigrationContext.useCreateVmMigrationContextValue',
      },
    },
  } as EncodedExtension<ContextProvider>,
];
