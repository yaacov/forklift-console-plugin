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
import type { V1beta1VirtualMachinePreferenceSpec } from './V1beta1VirtualMachinePreferenceSpec';
import {
    V1beta1VirtualMachinePreferenceSpecFromJSON,
    V1beta1VirtualMachinePreferenceSpecFromJSONTyped,
    V1beta1VirtualMachinePreferenceSpecToJSON,
} from './V1beta1VirtualMachinePreferenceSpec';

/**
 * VirtualMachinePreference resource contains optional preferences related to the VirtualMachine.
 * @export
 * @interface V1beta1VirtualMachinePreference
 */
export interface V1beta1VirtualMachinePreference {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachinePreference
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachinePreference
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1beta1VirtualMachinePreference
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1beta1VirtualMachinePreferenceSpec}
     * @memberof V1beta1VirtualMachinePreference
     */
    spec: V1beta1VirtualMachinePreferenceSpec;
}

/**
 * Check if a given object implements the V1beta1VirtualMachinePreference interface.
 */
export function instanceOfV1beta1VirtualMachinePreference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1beta1VirtualMachinePreferenceFromJSON(json: any): V1beta1VirtualMachinePreference {
    return V1beta1VirtualMachinePreferenceFromJSONTyped(json, false);
}

export function V1beta1VirtualMachinePreferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachinePreference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1VirtualMachinePreferenceSpecFromJSON(json['spec']),
    };
}

export function V1beta1VirtualMachinePreferenceToJSON(value?: V1beta1VirtualMachinePreference | null): any {
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
        'spec': V1beta1VirtualMachinePreferenceSpecToJSON(value.spec),
    };
}
