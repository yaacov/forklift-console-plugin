import type { ConsolePluginMetadata } from '@openshift-console/dynamic-plugin-sdk-webpack/lib/schema/plugin-package';
import type { EncodedExtension } from '@openshift/dynamic-plugin-sdk';
import type { NavSection, Separator } from '@openshift-console/dynamic-plugin-sdk';

import { extensions as mappingExtensions } from './modules/Mappings/dynamic-plugin';
import { extensions as planExtensions } from './modules/Plans/dynamic-plugin';
import { extensions as providerExtensions } from './modules/Providers/dynamic-plugin';

import { exposedModules as mappingModules } from './modules/Mappings/dynamic-plugin';
import { exposedModules as planModules } from './modules/Plans/dynamic-plugin';
import { exposedModules as providerModules } from './modules/Providers/dynamic-plugin';


/**
 * Plugin metadata
 */

export const pluginMetadata = {
  name: 'forklift-console-plugin',
  version: '0.0.1',
  displayName: 'OpenShift Console Plugin For Forklift',
  description:
    'Forklift is a suite of migration tools that facilitate the migration of VM workloads to KubeVirt.',
  exposedModules: {
    ...providerModules,
    ...planModules,
    ...mappingModules,
  },
  dependencies: {
    '@console/pluginAPI': '*',
  },
} as ConsolePluginMetadata;


/**
 * Plugin extensions
 */

export const extensions: EncodedExtension[] = [
  {
    type: 'console.navigation/section',
    properties: {
      id: 'virtualization',
      name: '%plugin__kubevirt-plugin~Virtualization%',
      insertAfter: 'workloads',
      dataAttributes: {
        'data-quickstart-id': 'qs-nav-sec-virtualization',
        'data-test-id': 'virtualization-nav-item',
      },
    },
    flags: {
      disallowed: ['KUBEVIRT_DYNAMIC'],
    },
  } as EncodedExtension<NavSection>,

  {
    type: 'console.navigation/separator',
    properties: {
      perspective: 'admin',
      section: 'virtualization',
      id: 'importSeparator',
      insertAfter: 'migrationpolicies',
      testID: 'ImportSeparator',
    },
    flags: {
      required: ['KUBEVIRT_DYNAMIC'],
    },
  } as EncodedExtension<Separator>,

  ...providerExtensions,
  ...planExtensions,
  ...mappingExtensions,
];
