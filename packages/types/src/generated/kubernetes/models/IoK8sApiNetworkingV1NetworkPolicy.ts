/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { IoK8sApiNetworkingV1NetworkPolicySpec } from './IoK8sApiNetworkingV1NetworkPolicySpec';
import {
    IoK8sApiNetworkingV1NetworkPolicySpecFromJSON,
    IoK8sApiNetworkingV1NetworkPolicySpecFromJSONTyped,
    IoK8sApiNetworkingV1NetworkPolicySpecToJSON,
} from './IoK8sApiNetworkingV1NetworkPolicySpec';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 * @export
 * @interface IoK8sApiNetworkingV1NetworkPolicy
 */
export interface IoK8sApiNetworkingV1NetworkPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiNetworkingV1NetworkPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiNetworkingV1NetworkPolicy
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiNetworkingV1NetworkPolicy
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiNetworkingV1NetworkPolicySpec}
     * @memberof IoK8sApiNetworkingV1NetworkPolicy
     */
    spec?: IoK8sApiNetworkingV1NetworkPolicySpec;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1NetworkPolicy interface.
 */
export function instanceOfIoK8sApiNetworkingV1NetworkPolicy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiNetworkingV1NetworkPolicyFromJSON(json: any): IoK8sApiNetworkingV1NetworkPolicy {
    return IoK8sApiNetworkingV1NetworkPolicyFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1NetworkPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1NetworkPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiNetworkingV1NetworkPolicySpecFromJSON(json['spec']),
    };
}

export function IoK8sApiNetworkingV1NetworkPolicyToJSON(value?: IoK8sApiNetworkingV1NetworkPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiNetworkingV1NetworkPolicySpecToJSON(value.spec),
    };
}

