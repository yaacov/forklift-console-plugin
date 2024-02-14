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
import type { IoK8sApimachineryPkgApisMetaV1Condition } from './IoK8sApimachineryPkgApisMetaV1Condition';
import {
    IoK8sApimachineryPkgApisMetaV1ConditionFromJSON,
    IoK8sApimachineryPkgApisMetaV1ConditionFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ConditionToJSON,
} from './IoK8sApimachineryPkgApisMetaV1Condition';

/**
 * ServiceCIDRStatus describes the current state of the ServiceCIDR.
 * @export
 * @interface IoK8sApiNetworkingV1alpha1ServiceCIDRStatus
 */
export interface IoK8sApiNetworkingV1alpha1ServiceCIDRStatus {
    /**
     * conditions holds an array of metav1.Condition that describe the state of the ServiceCIDR. Current service state
     * @type {Array<IoK8sApimachineryPkgApisMetaV1Condition>}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDRStatus
     */
    conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1alpha1ServiceCIDRStatus interface.
 */
export function instanceOfIoK8sApiNetworkingV1alpha1ServiceCIDRStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRStatusFromJSON(json: any): IoK8sApiNetworkingV1alpha1ServiceCIDRStatus {
    return IoK8sApiNetworkingV1alpha1ServiceCIDRStatusFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1alpha1ServiceCIDRStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ConditionFromJSON)),
    };
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRStatusToJSON(value?: IoK8sApiNetworkingV1alpha1ServiceCIDRStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ConditionToJSON)),
    };
}

