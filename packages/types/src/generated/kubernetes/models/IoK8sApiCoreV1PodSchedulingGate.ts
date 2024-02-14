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
 * PodSchedulingGate is associated to a Pod to guard its scheduling.
 * @export
 * @interface IoK8sApiCoreV1PodSchedulingGate
 */
export interface IoK8sApiCoreV1PodSchedulingGate {
    /**
     * Name of the scheduling gate. Each scheduling gate must have a unique name field.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodSchedulingGate
     */
    name: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PodSchedulingGate interface.
 */
export function instanceOfIoK8sApiCoreV1PodSchedulingGate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiCoreV1PodSchedulingGateFromJSON(json: any): IoK8sApiCoreV1PodSchedulingGate {
    return IoK8sApiCoreV1PodSchedulingGateFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodSchedulingGateFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PodSchedulingGate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function IoK8sApiCoreV1PodSchedulingGateToJSON(value?: IoK8sApiCoreV1PodSchedulingGate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

