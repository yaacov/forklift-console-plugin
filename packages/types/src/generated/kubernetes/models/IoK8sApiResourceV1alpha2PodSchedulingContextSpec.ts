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
 * PodSchedulingContextSpec describes where resources for the Pod are needed.
 * @export
 * @interface IoK8sApiResourceV1alpha2PodSchedulingContextSpec
 */
export interface IoK8sApiResourceV1alpha2PodSchedulingContextSpec {
    /**
     * PotentialNodes lists nodes where the Pod might be able to run.
     * 
     * The size of this field is limited to 128. This is large enough for many clusters. Larger clusters may need more attempts to find a node that suits all pending resources. This may get increased in the future, but not reduced.
     * @type {Array<string>}
     * @memberof IoK8sApiResourceV1alpha2PodSchedulingContextSpec
     */
    potentialNodes?: string[];
    /**
     * SelectedNode is the node for which allocation of ResourceClaims that are referenced by the Pod and that use "WaitForFirstConsumer" allocation is to be attempted.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2PodSchedulingContextSpec
     */
    selectedNode?: string;
}

/**
 * Check if a given object implements the IoK8sApiResourceV1alpha2PodSchedulingContextSpec interface.
 */
export function instanceOfIoK8sApiResourceV1alpha2PodSchedulingContextSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiResourceV1alpha2PodSchedulingContextSpecFromJSON(json: any): IoK8sApiResourceV1alpha2PodSchedulingContextSpec {
    return IoK8sApiResourceV1alpha2PodSchedulingContextSpecFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2PodSchedulingContextSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2PodSchedulingContextSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'potentialNodes': !exists(json, 'potentialNodes') ? undefined : json['potentialNodes'],
        'selectedNode': !exists(json, 'selectedNode') ? undefined : json['selectedNode'],
    };
}

export function IoK8sApiResourceV1alpha2PodSchedulingContextSpecToJSON(value?: IoK8sApiResourceV1alpha2PodSchedulingContextSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'potentialNodes': value.potentialNodes,
        'selectedNode': value.selectedNode,
    };
}

