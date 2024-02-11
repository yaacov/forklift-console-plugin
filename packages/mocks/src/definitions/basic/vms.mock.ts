/* eslint-disable @cspell/spellchecker */
import { OpenshiftVM, OVirtVM, VSphereVM } from '@kubev2v/types';

import { NAMESPACE_FORKLIFT } from '../utils';

import { MOCK_DISK_ATTACHMENTS } from './disks.mock';
import { MOCK_NICS } from './nicProfiles.mock';
import {
  OPENSHIFT_01_UID,
  OPENSHIFT_02_UID,
  OPENSHIFT_03_UID,
  OPENSHIFT_HOST_UID,
  OpenshiftProviderIDs,
  OVIRT_01_UID,
  OVIRT_02_UID,
  OVIRT_03_UID,
  OVIRT_INSECURE_UID,
  OvirtProviderIDs,
  VMWARE_01_UID,
  VMWARE_02_UID,
  VMWARE_03_UID,
  VmwareProviderIDs,
} from './providers.mock';

const vm1: VSphereVM = {
  id: 'vm-1630',
  powerState: 'poweredOn',
  revision: 1,
  name: 'test-migration',
  selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-1630`,
  networks: [{ kind: 'Network', id: '1' }],
  disks: [
    {
      datastore: { kind: 'Datastore', id: '1' },
      capacity: 1024,
      file: 'test_file',
      key: 1,
      rdm: false,
      shared: false,
    },
    {
      datastore: { kind: 'Datastore', id: '1' },
      capacity: 1024,
      file: 'test_file',
      key: 1,
      rdm: false,
      shared: false,
    },
  ],
  concerns: [
    {
      category: 'Warning',
      label: 'Shareable disk detected',
      assessment:
        'Shared disks are only supported by certain OpenShift Virtualization storage configurations. Ensure that the correct storage is selected for the disk.',
    },
    {
      category: 'Warning',
      label: 'VM running in HA-enabled cluster',
      assessment:
        'Host/Node HA is not currently supported by OpenShift Virtualization. The VM can be migrated but it will not have this feature in the target environment.',
    },
    {
      category: 'Information',
      label: 'VM running in a DRS-enabled cluster',
      assessment:
        'Distributed resource scheduling is not currently supported by OpenShift Virtualization. The VM can be migrated but it will not have this feature in the target environment.',
    },
    {
      category: 'Information',
      label: 'VM snapshot detected',
      assessment: 'Warm migration may not be possible for this VM',
    },
  ],
  revisionValidated: 1,
  isTemplate: false,
  host: 'esx12.v2v.example.com',
  parent: null,
  providerType: 'vsphere',
};

export const MOCK_VMWARE_VMS: { [uid in VmwareProviderIDs]: VSphereVM[] } = {
  [VMWARE_01_UID]: [
    vm1,
    {
      ...vm1,
      id: 'vm-template-test',
      name: 'vm-template-test',
      selfLink: '/providers/vsphere/test/vms/vm-template-test',
      isTemplate: true,
    },
    {
      id: 'vm-2844',
      powerState: 'poweredOff',
      revision: 1,
      name: 'test-migration-2',
      selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-2844`,
      networks: [{ kind: 'Network', id: '1' }],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '2' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [
        { category: 'Information', label: 'Example', assessment: 'You should know something' },
      ],
      revisionValidated: 1,
      isTemplate: false,
      host: 'esx12.v2v.example.com',
      parent: null,
      providerType: 'vsphere',
    },
    {
      id: 'vm-1008',
      powerState: 'poweredOn',
      revision: 1,
      name: 'test-migration-centos',
      selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-1008`,
      networks: [
        { kind: 'Network', id: '1' },
        { kind: 'Network', id: '2' },
      ],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '1' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [
        { category: 'Critical', label: 'Example', assessment: 'Something is really bad' },
        {
          category: 'Warning',
          label: 'Changed Block Tracking (CBT) not enabled',
          assessment:
            'Changed Block Tracking (CBT) has not been enabled on this VM. This feature is a prerequisite for VM warm migration.',
        },
      ],
      revisionValidated: 1,
      isTemplate: false,
      host: 'esx13.v2v.example.com',
      parent: null,
      providerType: 'vsphere',
    },
    {
      id: 'vm-2686',
      powerState: 'poweredOn',
      revision: 2,
      name: 'pemcg-discovery02',
      selfLink: `providers/vsphere/${VMWARE_01_UID}/vms/vm-2686`,
      networks: [{ kind: 'Network', id: '1' }],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '2' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [{ category: 'Warning', label: 'Example', assessment: 'Something is wrong' }],
      revisionValidated: 1,
      isTemplate: false,
      host: 'esx13.v2v.example.com',
      parent: null,
      providerType: 'vsphere',
    },
  ],
  [VMWARE_02_UID]: [],
  [VMWARE_03_UID]: [
    {
      id: 'vm-2685',
      powerState: 'poweredOn',
      revision: 2,
      name: 'pemcg-discovery01',
      selfLink: `providers/vsphere/${VMWARE_03_UID}/vms/vm-2685`,
      networks: [{ kind: 'Network', id: '1' }],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '2' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [{ category: 'Warning', label: 'Example', assessment: 'Something is wrong' }],
      revisionValidated: 1,
      isTemplate: false,
      host: '',
      parent: null,
      providerType: 'vsphere',
    },
    {
      id: 'vm-431',
      powerState: 'poweredOff',
      revision: 1,
      name: 'pemcg-iscsi-target',
      selfLink: `providers/vsphere/${VMWARE_03_UID}/vms/vm-431`,
      networks: [
        { kind: 'Network', id: '1' },
        { kind: 'Network', id: 'network-33' },
      ],
      disks: [
        {
          datastore: { kind: 'Datastore', id: '3' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
        {
          datastore: { kind: 'Datastore', id: '3' },
          capacity: 1024,
          file: 'test_file',
          key: 1,
          rdm: false,
          shared: false,
        },
      ],
      concerns: [],
      revisionValidated: 1,
      isTemplate: false,
      host: '',
      parent: null,
      providerType: 'vsphere',
    },
  ],
};

export const MOCK_RHV_VMS: { [uid in OvirtProviderIDs]: OVirtVM[] } = {
  [OVIRT_01_UID]: [
    {
      id: '3dcaf3ec-6b51-4ca0-8345-6d61841731d7',
      status: 'up',
      revision: 1,
      path: 'main/cfme-5.11.9.0-1',
      name: 'cfme-5.11.9.0-1',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/3dcaf3ec-6b51-4ca0-8345-6d61841731d7`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_01_UID][0]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_01_UID][0]],
      concerns: [],
      cluster: 'main',
      host: 'host.example.com',
      providerType: 'ovirt',
    },
    {
      id: '2a66a719-440c-4544-9da0-692d14338b12',
      status: 'down',
      revision: 1,
      path: 'main/dev-rhel8',
      name: 'dev-rhel8',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/2a66a719-440c-4544-9da0-692d14338b12`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_01_UID][1]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_01_UID][0]],
      concerns: [],
      cluster: 'main',
      host: 'host.example.com',
      providerType: 'ovirt',
    },
    {
      id: '64333a40-ffbb-4c28-add7-5560bdf082fb',
      status: 'up',
      revision: 1,
      path: 'main/management-dev',
      name: 'management-dev',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/64333a40-ffbb-4c28-add7-5560bdf082fb`,
      revisionValidated: 0,
      nics: [...MOCK_NICS[OVIRT_01_UID]],
      diskAttachments: [],
      concerns: [],
      cluster: 'main',
      host: 'host-2.example.com',
      providerType: 'ovirt',
    },
    {
      id: '6f9de857-ef39-43b7-8853-af982286dc59',
      status: 'up',
      revision: 1,
      path: 'main/isolated-vm',
      name: 'isolated-vm',
      selfLink: `providers/ovirt/${OVIRT_01_UID}/vms/6f9de857-ef39-43b7-8853-af982286dc59`,
      revisionValidated: 0,
      nics: [],
      diskAttachments: [],
      concerns: [],
      cluster: 'main',
      host: 'host-2.example.com',
      providerType: 'ovirt',
    },
  ],
  [OVIRT_02_UID]: [
    {
      id: '6f9de857-ef39-43b7-8853-af982286dc59',
      status: 'down',
      revision: 1,
      path: 'Default/one',
      name: 'one',
      selfLink: `providers/ovirt/${OVIRT_02_UID}/vms/6f9de857-ef39-43b7-8853-af982286dc59`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_02_UID][0]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_02_UID][0]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
  ],
  [OVIRT_03_UID]: [
    {
      id: 'b3eb91d4-2c42-4dc6-98fb-fee94f1df30d',
      status: 'up',
      revision: 1,
      path: 'dc1/server.example.com',
      name: 'server.example.com',
      selfLink: `providers/ovirt/${OVIRT_03_UID}/vms/b3eb91d4-2c42-4dc6-98fb-fee94f1df30d`,
      revisionValidated: 0,
      nics: [...MOCK_NICS[OVIRT_03_UID]],
      diskAttachments: [...MOCK_DISK_ATTACHMENTS[OVIRT_03_UID]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
    {
      id: 'be55c259-2415-448d-841e-f4b9d743242e',
      status: 'up',
      revision: 1,
      path: 'dc2/engine',
      name: 'engine',
      selfLink: `providers/ovirt/${OVIRT_03_UID}/vms/be55c259-2415-448d-841e-f4b9d743242e`,
      revisionValidated: 0,
      nics: [...MOCK_NICS[OVIRT_03_UID]],
      diskAttachments: [...MOCK_DISK_ATTACHMENTS[OVIRT_03_UID]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
  ],
  [OVIRT_INSECURE_UID]: [
    {
      id: 'bea5f184-972e-44e2-811a-2357829ab590',
      status: 'up',
      revision: 1,
      path: 'dc/demo-vm',
      name: 'demo-vm',
      selfLink: `providers/ovirt/${OVIRT_INSECURE_UID}/vms/bea5f184-972e-44e2-811a-2357829ab590`,
      revisionValidated: 0,
      nics: [MOCK_NICS[OVIRT_INSECURE_UID][0]],
      diskAttachments: [MOCK_DISK_ATTACHMENTS[OVIRT_INSECURE_UID][0]],
      concerns: [],
      cluster: '',
      host: '',
      providerType: 'ovirt',
    },
  ],
};

export const MOCK_OPENSHIFT_VMS: { [uid in OpenshiftProviderIDs]: OpenshiftVM[] } = {
  [OPENSHIFT_01_UID]: [],
  [OPENSHIFT_02_UID]: [],
  [OPENSHIFT_03_UID]: [],
  [OPENSHIFT_HOST_UID]: [
    // source: https://kubevirt.io/user-guide/virtual_machines/templates/
    {
      name: 'rheltinyvm',
      namespace: NAMESPACE_FORKLIFT,
      selfLink: `providers/openshift/${OPENSHIFT_HOST_UID}/vms/3dcaf3ec-6b51-4ca0-8345-6d61841731d7`,
      uid: '3dcaf3ec-6b51-4ca0-8345-6d61841731d7',
      id: '3dcaf3ec-6b51-4ca0-8345-6d61841731d7',
      version: '',
      object: {
        kind: 'VirtualMachine',
        apiVersion: 'kubevirt.io/v1',
        metadata: {
          annotations: {
            ['vm.kubevirt.io/flavor']: 'tiny',
            ['vm.kubevirt.io/os']: 'rhel8',
            ['vm.kubevirt.io/validations']: `
              {
                name: 'minimal-required-memory',
                path: 'jsonpath::.spec.domain.resources.requests.memory',
                rule: 'integer',
                message: 'This VM requires more memory.',
                min: 1610612736,
              }`,
            ['vm.kubevirt.io/workload']: 'server',
          },
          labels: {
            app: 'rheltinyvm',
            ['vm.kubevirt.io/template']: 'rhel8-server-tiny',
            ['vm.kubevirt.io/template.revision']: '45',
            ['vm.kubevirt.io/template.version']: '0.11.3',
          },
          name: 'rheltinyvm',
          namespace: NAMESPACE_FORKLIFT,
          uid: '3dcaf3ec-6b51-4ca0-8345-6d61841731d7',
        },
        spec: {
          dataVolumeTemplates: [
            {
              apiVersion: 'cdi.kubevirt.io/v1beta1',
              kind: 'DataVolume',
              metadata: {
                name: 'rheltinyvm',
              },
              spec: {
                pvc: {
                  accessModes: ['ReadWriteMany'],
                  resources: {
                    requests: {
                      storage: '30Gi',
                    },
                  },
                },
                source: {
                  pvc: {
                    name: 'rhel',
                    namespace: 'kubevirt',
                  },
                },
              },
            },
          ],
          running: false,
          template: {
            metadata: {
              labels: {
                ['kubevirt.io/domain']: 'rheltinyvm',
                ['kubevirt.io/size']: 'tiny',
              },
            },
            spec: {
              domain: {
                cpu: {
                  cores: 1,
                  sockets: 1,
                  threads: 1,
                },
                devices: {
                  disks: [
                    {
                      disk: {
                        bus: 'virtio',
                      },
                      name: 'rheltinyvm',
                    },
                    {
                      disk: {
                        bus: 'virtio',
                      },
                      name: 'cloudinitdisk',
                    },
                  ],
                  interfaces: [
                    {
                      masquerade: {},
                      name: 'default',
                    },
                  ],
                  networkInterfaceMultiqueue: true,
                  rng: {},
                },
                resources: {
                  requests: {
                    memory: '1.5Gi',
                  },
                },
              },
              networks: [{ name: 'default', pod: {} }],
              terminationGracePeriodSeconds: 180,
              volumes: [
                {
                  dataVolume: {
                    name: 'rheltinyvm',
                  },
                  name: 'rheltinyvm',
                },
              ],
            },
          },
        },
      },
      providerType: 'openshift',
    },
    {
      name: 'fedora-rival-catshark',
      namespace: NAMESPACE_FORKLIFT,
      selfLink: `providers/openshift/${OPENSHIFT_HOST_UID}/vms/029b9890-259e-4ade-b22f-3991c3359062`,
      uid: '029b9890-259e-4ade-b22f-3991c3359062',
      id: '029b9890-259e-4ade-b22f-3991c3359062',
      version: '',
      providerType: 'openshift',
      object: {
        apiVersion: 'kubevirt.io/v1',
        kind: 'VirtualMachine',
        metadata: {
          annotations: {
            'kubemacpool.io/transaction-timestamp': '2023-10-01T11:11:12.736465708Z',
            'kubevirt.io/latest-observed-api-version': 'v1',
            'kubevirt.io/storage-observed-api-version': 'v1alpha3',
            'vm.kubevirt.io/validations':
              '[\n  {\n    "name": "minimal-required-memory",\n    "path": "jsonpath::.spec.domain.resources.requests.memory",\n    "rule": "integer",\n    "message": "This VM requires more memory.",\n    "min": 1073741824\n  }\n]\n',
          },
          creationTimestamp: '2023-10-01T07:52:34Z',
          finalizers: ['kubevirt.io/virtualMachineControllerFinalize'],
          generation: 5,
          labels: {
            app: 'fedora-rival-catshark',
            'vm.kubevirt.io/template': 'fedora-server-small',
            'vm.kubevirt.io/template.namespace': 'openshift',
            'vm.kubevirt.io/template.revision': '1',
            'vm.kubevirt.io/template.version': 'v0.25.0',
          },
          name: 'fedora-rival-catshark',
          namespace: NAMESPACE_FORKLIFT,
          resourceVersion: '2002703392',
          uid: '029b9890-259e-4ade-b22f-3991c3359062',
        },
        spec: {
          dataVolumeTemplates: [
            {
              apiVersion: 'cdi.kubevirt.io/v1beta1',
              kind: 'DataVolume',
              metadata: {
                creationTimestamp: null,
                name: 'fedora-rival-catshark',
              },
              spec: {
                sourceRef: {
                  kind: 'DataSource',
                  name: 'fedora',
                  namespace: 'openshift-virtualization-os-images',
                },
                storage: {
                  resources: {
                    requests: {
                      storage: '30Gi',
                    },
                  },
                },
              },
            },
          ],
          running: false,
          template: {
            metadata: {
              annotations: {
                'vm.kubevirt.io/flavor': 'small',
                'vm.kubevirt.io/os': 'fedora',
                'vm.kubevirt.io/workload': 'server',
              },
              creationTimestamp: null,
              labels: {
                'kubevirt.io/domain': 'fedora-rival-catshark',
                'kubevirt.io/size': 'small',
              },
            },
            spec: {
              domain: {
                cpu: {
                  cores: 1,
                  sockets: 1,
                  threads: 1,
                },
                devices: {
                  disks: [
                    {
                      disk: {
                        bus: 'virtio',
                      },
                      name: 'rootdisk',
                    },
                    {
                      disk: {
                        bus: 'virtio',
                      },
                      name: 'cloudinitdisk',
                    },
                  ],
                  gpus: [
                    {
                      deviceName: 'nvidia.com/GM204GL_Tesla_M60',
                      name: 'gpu1',
                    },
                  ],
                  interfaces: [
                    {
                      macAddress: '02:26:19:00:00:70',
                      masquerade: {},
                      model: 'virtio',
                      name: 'default',
                    },
                  ],
                  networkInterfaceMultiqueue: true,
                  rng: {},
                },
                features: {
                  acpi: {},
                  smm: {
                    enabled: true,
                  },
                },
                firmware: {
                  bootloader: {
                    efi: {},
                  },
                },
                machine: {
                  type: 'pc-q35-rhel9.2.0',
                },
                resources: {
                  requests: {
                    memory: '2Gi',
                  },
                },
              },
              evictionStrategy: 'LiveMigrate',
              networks: [
                {
                  name: 'default',
                  pod: {},
                },
              ],
              terminationGracePeriodSeconds: 180,
              volumes: [
                {
                  dataVolume: {
                    name: 'fedora-rival-catshark',
                  },
                  name: 'rootdisk',
                },
                {
                  cloudInitNoCloud: {
                    userData:
                      '#cloud-config\nuser: foo\npassword: bar\nchpasswd: { expire: False }',
                  },
                  name: 'cloudinitdisk',
                },
              ],
            },
          },
        },
        status: {
          conditions: [
            {
              lastProbeTime: '2023-10-01T11:11:18Z',
              lastTransitionTime: '2023-10-01T11:11:18Z',
              message: 'VMI does not exist',
              reason: 'VMINotExists',
              status: 'False',
              type: 'Ready',
            },
            {
              lastProbeTime: null,
              lastTransitionTime: null,
              message: 'VMI uses a PCI host devices',
              reason: 'HostDeviceNotLiveMigratable',
              status: 'False',
              type: 'LiveMigratable',
            },
          ],
          printableStatus: 'Stopped',
          volumeSnapshotStatuses: [
            {
              enabled: true,
              name: 'rootdisk',
            },
            {
              enabled: false,
              name: 'cloudinitdisk',
              reason: 'Snapshot is not supported for this volumeSource type [cloudinitdisk]',
            },
          ],
        },
      },
    },
  ],
};
