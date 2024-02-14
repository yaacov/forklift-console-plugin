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
import type { V1CustomBlockSize } from './V1CustomBlockSize';
import {
    V1CustomBlockSizeFromJSON,
    V1CustomBlockSizeFromJSONTyped,
    V1CustomBlockSizeToJSON,
} from './V1CustomBlockSize';
import type { V1FeatureState } from './V1FeatureState';
import {
    V1FeatureStateFromJSON,
    V1FeatureStateFromJSONTyped,
    V1FeatureStateToJSON,
} from './V1FeatureState';

/**
 * BlockSize provides the option to change the block size presented to the VM for a disk. Only one of its members may be specified.
 * @export
 * @interface V1BlockSize
 */
export interface V1BlockSize {
    /**
     * 
     * @type {V1CustomBlockSize}
     * @memberof V1BlockSize
     */
    custom?: V1CustomBlockSize;
    /**
     * 
     * @type {V1FeatureState}
     * @memberof V1BlockSize
     */
    matchVolume?: V1FeatureState;
}

/**
 * Check if a given object implements the V1BlockSize interface.
 */
export function instanceOfV1BlockSize(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1BlockSizeFromJSON(json: any): V1BlockSize {
    return V1BlockSizeFromJSONTyped(json, false);
}

export function V1BlockSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1BlockSize {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'custom': !exists(json, 'custom') ? undefined : V1CustomBlockSizeFromJSON(json['custom']),
        'matchVolume': !exists(json, 'matchVolume') ? undefined : V1FeatureStateFromJSON(json['matchVolume']),
    };
}

export function V1BlockSizeToJSON(value?: V1BlockSize | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'custom': V1CustomBlockSizeToJSON(value.custom),
        'matchVolume': V1FeatureStateToJSON(value.matchVolume),
    };
}

