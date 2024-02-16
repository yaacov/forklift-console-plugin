/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1alpha1VirtualMachineSnapshotSpec } from './V1alpha1VirtualMachineSnapshotSpec';
import {
    V1alpha1VirtualMachineSnapshotSpecFromJSON,
    V1alpha1VirtualMachineSnapshotSpecFromJSONTyped,
    V1alpha1VirtualMachineSnapshotSpecToJSON,
} from './V1alpha1VirtualMachineSnapshotSpec';
import type { V1alpha1VirtualMachineSnapshotStatus } from './V1alpha1VirtualMachineSnapshotStatus';
import {
    V1alpha1VirtualMachineSnapshotStatusFromJSON,
    V1alpha1VirtualMachineSnapshotStatusFromJSONTyped,
    V1alpha1VirtualMachineSnapshotStatusToJSON,
} from './V1alpha1VirtualMachineSnapshotStatus';

/**
 * VirtualMachineSnapshot defines the operation of snapshotting a VM
 * @export
 * @interface V1alpha1VirtualMachineSnapshot
 */
export interface V1alpha1VirtualMachineSnapshot {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineSnapshot
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineSnapshot
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachineSnapshot
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1alpha1VirtualMachineSnapshotSpec}
     * @memberof V1alpha1VirtualMachineSnapshot
     */
    spec: V1alpha1VirtualMachineSnapshotSpec;
    /**
     * 
     * @type {V1alpha1VirtualMachineSnapshotStatus}
     * @memberof V1alpha1VirtualMachineSnapshot
     */
    status?: V1alpha1VirtualMachineSnapshotStatus;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineSnapshot interface.
 */
export function instanceOfV1alpha1VirtualMachineSnapshot(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1alpha1VirtualMachineSnapshotFromJSON(json: any): V1alpha1VirtualMachineSnapshot {
    return V1alpha1VirtualMachineSnapshotFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineSnapshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1VirtualMachineSnapshotSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1alpha1VirtualMachineSnapshotStatusFromJSON(json['status']),
    };
}

export function V1alpha1VirtualMachineSnapshotToJSON(value?: V1alpha1VirtualMachineSnapshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': V1alpha1VirtualMachineSnapshotSpecToJSON(value.spec),
        'status': V1alpha1VirtualMachineSnapshotStatusToJSON(value.status),
    };
}
