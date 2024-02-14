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
import type { V1alpha1VirtualMachineRestoreSpec } from './V1alpha1VirtualMachineRestoreSpec';
import {
    V1alpha1VirtualMachineRestoreSpecFromJSON,
    V1alpha1VirtualMachineRestoreSpecFromJSONTyped,
    V1alpha1VirtualMachineRestoreSpecToJSON,
} from './V1alpha1VirtualMachineRestoreSpec';
import type { V1alpha1VirtualMachineRestoreStatus } from './V1alpha1VirtualMachineRestoreStatus';
import {
    V1alpha1VirtualMachineRestoreStatusFromJSON,
    V1alpha1VirtualMachineRestoreStatusFromJSONTyped,
    V1alpha1VirtualMachineRestoreStatusToJSON,
} from './V1alpha1VirtualMachineRestoreStatus';

/**
 * VirtualMachineRestore defines the operation of restoring a VM
 * @export
 * @interface V1alpha1VirtualMachineRestore
 */
export interface V1alpha1VirtualMachineRestore {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineRestore
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineRestore
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1alpha1VirtualMachineRestore
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1alpha1VirtualMachineRestoreSpec}
     * @memberof V1alpha1VirtualMachineRestore
     */
    spec: V1alpha1VirtualMachineRestoreSpec;
    /**
     * 
     * @type {V1alpha1VirtualMachineRestoreStatus}
     * @memberof V1alpha1VirtualMachineRestore
     */
    status?: V1alpha1VirtualMachineRestoreStatus;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineRestore interface.
 */
export function instanceOfV1alpha1VirtualMachineRestore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1alpha1VirtualMachineRestoreFromJSON(json: any): V1alpha1VirtualMachineRestore {
    return V1alpha1VirtualMachineRestoreFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineRestoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineRestore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1alpha1VirtualMachineRestoreSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1alpha1VirtualMachineRestoreStatusFromJSON(json['status']),
    };
}

export function V1alpha1VirtualMachineRestoreToJSON(value?: V1alpha1VirtualMachineRestore | null): any {
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
        'spec': V1alpha1VirtualMachineRestoreSpecToJSON(value.spec),
        'status': V1alpha1VirtualMachineRestoreStatusToJSON(value.status),
    };
}

