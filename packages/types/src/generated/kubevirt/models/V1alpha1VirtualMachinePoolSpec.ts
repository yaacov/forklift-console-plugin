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
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import {
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import type { V1alpha1VirtualMachineTemplateSpec } from './V1alpha1VirtualMachineTemplateSpec';
import {
    V1alpha1VirtualMachineTemplateSpecFromJSON,
    V1alpha1VirtualMachineTemplateSpecFromJSONTyped,
    V1alpha1VirtualMachineTemplateSpecToJSON,
} from './V1alpha1VirtualMachineTemplateSpec';

/**
 * 
 * @export
 * @interface V1alpha1VirtualMachinePoolSpec
 */
export interface V1alpha1VirtualMachinePoolSpec {
    /**
     * Indicates that the pool is paused.
     * @type {boolean}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    paused?: boolean;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     * @type {number}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    replicas?: number;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {V1alpha1VirtualMachineTemplateSpec}
     * @memberof V1alpha1VirtualMachinePoolSpec
     */
    virtualMachineTemplate: V1alpha1VirtualMachineTemplateSpec;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachinePoolSpec interface.
 */
export function instanceOfV1alpha1VirtualMachinePoolSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "selector" in value;
    isInstance = isInstance && "virtualMachineTemplate" in value;

    return isInstance;
}

export function V1alpha1VirtualMachinePoolSpecFromJSON(json: any): V1alpha1VirtualMachinePoolSpec {
    return V1alpha1VirtualMachinePoolSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachinePoolSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'virtualMachineTemplate': V1alpha1VirtualMachineTemplateSpecFromJSON(json['virtualMachineTemplate']),
    };
}

export function V1alpha1VirtualMachinePoolSpecToJSON(value?: V1alpha1VirtualMachinePoolSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paused': value.paused,
        'replicas': value.replicas,
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'virtualMachineTemplate': V1alpha1VirtualMachineTemplateSpecToJSON(value.virtualMachineTemplate),
    };
}
