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
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 * @export
 * @interface IoK8sApiCoreV1Taint
 */
export interface IoK8sApiCoreV1Taint {
    /**
     * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
     * @type {string}
     * @memberof IoK8sApiCoreV1Taint
     */
    effect: string;
    /**
     * Required. The taint key to be applied to a node.
     * @type {string}
     * @memberof IoK8sApiCoreV1Taint
     */
    key: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1Taint
     */
    timeAdded?: string;
    /**
     * The taint value corresponding to the taint key.
     * @type {string}
     * @memberof IoK8sApiCoreV1Taint
     */
    value?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1Taint interface.
 */
export function instanceOfIoK8sApiCoreV1Taint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "effect" in value;
    isInstance = isInstance && "key" in value;

    return isInstance;
}

export function IoK8sApiCoreV1TaintFromJSON(json: any): IoK8sApiCoreV1Taint {
    return IoK8sApiCoreV1TaintFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1TaintFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1Taint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effect': json['effect'],
        'key': json['key'],
        'timeAdded': !exists(json, 'timeAdded') ? undefined : json['timeAdded'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function IoK8sApiCoreV1TaintToJSON(value?: IoK8sApiCoreV1Taint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'effect': value.effect,
        'key': value.key,
        'timeAdded': value.timeAdded === undefined ? undefined : (value.timeAdded),
        'value': value.value,
    };
}
