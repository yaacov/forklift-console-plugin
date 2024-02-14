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
 * PauseOptions may be provided on pause request.
 * @export
 * @interface V1PauseOptions
 */
export interface V1PauseOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1PauseOptions
     */
    apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @type {Array<string>}
     * @memberof V1PauseOptions
     */
    dryRun?: Array<string>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1PauseOptions
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1PauseOptions interface.
 */
export function instanceOfV1PauseOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PauseOptionsFromJSON(json: any): V1PauseOptions {
    return V1PauseOptionsFromJSONTyped(json, false);
}

export function V1PauseOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PauseOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'dryRun': !exists(json, 'dryRun') ? undefined : json['dryRun'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1PauseOptionsToJSON(value?: V1PauseOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'dryRun': value.dryRun,
        'kind': value.kind,
    };
}

