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
/**
 * KernelInfo show info about the kernel image
 * @export
 * @interface V1KernelInfo
 */
export interface V1KernelInfo {
    /**
     * Checksum is the checksum of the kernel image
     * @type {number}
     * @memberof V1KernelInfo
     */
    checksum?: number;
}

/**
 * Check if a given object implements the V1KernelInfo interface.
 */
export function instanceOfV1KernelInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1KernelInfoFromJSON(json: any): V1KernelInfo {
    return V1KernelInfoFromJSONTyped(json, false);
}

export function V1KernelInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KernelInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checksum': !exists(json, 'checksum') ? undefined : json['checksum'],
    };
}

export function V1KernelInfoToJSON(value?: V1KernelInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checksum': value.checksum,
    };
}

