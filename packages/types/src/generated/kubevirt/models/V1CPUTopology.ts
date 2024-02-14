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
 * CPUTopology allows specifying the amount of cores, sockets and threads.
 * @export
 * @interface V1CPUTopology
 */
export interface V1CPUTopology {
    /**
     * Cores specifies the number of cores inside the vmi. Must be a value greater or equal 1.
     * @type {number}
     * @memberof V1CPUTopology
     */
    cores?: number;
    /**
     * Sockets specifies the number of sockets inside the vmi. Must be a value greater or equal 1.
     * @type {number}
     * @memberof V1CPUTopology
     */
    sockets?: number;
    /**
     * Threads specifies the number of threads inside the vmi. Must be a value greater or equal 1.
     * @type {number}
     * @memberof V1CPUTopology
     */
    threads?: number;
}

/**
 * Check if a given object implements the V1CPUTopology interface.
 */
export function instanceOfV1CPUTopology(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CPUTopologyFromJSON(json: any): V1CPUTopology {
    return V1CPUTopologyFromJSONTyped(json, false);
}

export function V1CPUTopologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CPUTopology {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cores': !exists(json, 'cores') ? undefined : json['cores'],
        'sockets': !exists(json, 'sockets') ? undefined : json['sockets'],
        'threads': !exists(json, 'threads') ? undefined : json['threads'],
    };
}

export function V1CPUTopologyToJSON(value?: V1CPUTopology | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cores': value.cores,
        'sockets': value.sockets,
        'threads': value.threads,
    };
}

