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
import type { IoK8sApiCoreV1PersistentVolumeClaimTemplate } from './IoK8sApiCoreV1PersistentVolumeClaimTemplate';
import {
    IoK8sApiCoreV1PersistentVolumeClaimTemplateFromJSON,
    IoK8sApiCoreV1PersistentVolumeClaimTemplateFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeClaimTemplateToJSON,
} from './IoK8sApiCoreV1PersistentVolumeClaimTemplate';

/**
 * Represents an ephemeral volume that is handled by a normal storage driver.
 * @export
 * @interface IoK8sApiCoreV1EphemeralVolumeSource
 */
export interface IoK8sApiCoreV1EphemeralVolumeSource {
    /**
     * 
     * @type {IoK8sApiCoreV1PersistentVolumeClaimTemplate}
     * @memberof IoK8sApiCoreV1EphemeralVolumeSource
     */
    volumeClaimTemplate?: IoK8sApiCoreV1PersistentVolumeClaimTemplate;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1EphemeralVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1EphemeralVolumeSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1EphemeralVolumeSourceFromJSON(json: any): IoK8sApiCoreV1EphemeralVolumeSource {
    return IoK8sApiCoreV1EphemeralVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EphemeralVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EphemeralVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'volumeClaimTemplate': !exists(json, 'volumeClaimTemplate') ? undefined : IoK8sApiCoreV1PersistentVolumeClaimTemplateFromJSON(json['volumeClaimTemplate']),
    };
}

export function IoK8sApiCoreV1EphemeralVolumeSourceToJSON(value?: IoK8sApiCoreV1EphemeralVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'volumeClaimTemplate': IoK8sApiCoreV1PersistentVolumeClaimTemplateToJSON(value.volumeClaimTemplate),
    };
}
