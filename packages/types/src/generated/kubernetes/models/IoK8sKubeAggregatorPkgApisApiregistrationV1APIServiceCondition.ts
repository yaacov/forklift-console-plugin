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
/**
 * APIServiceCondition describes the state of an APIService at a particular point
 * @export
 * @interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
 */
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
     */
    lastTransitionTime?: string;
    /**
     * Human-readable message indicating details about last transition.
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
     */
    message?: string;
    /**
     * Unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
     */
    reason?: string;
    /**
     * Status is the status of the condition. Can be True, False, Unknown.
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
     */
    status: string;
    /**
     * Type is the type of the condition.
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition
     */
    type: string;
}

/**
 * Check if a given object implements the IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition interface.
 */
export function instanceOfIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionFromJSON(json: any): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {
    return IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionFromJSONTyped(json, false);
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : json['lastTransitionTime'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionToJSON(value?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

