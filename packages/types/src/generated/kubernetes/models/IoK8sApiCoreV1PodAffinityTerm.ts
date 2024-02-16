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
import type { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector';
import {
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 * @export
 * @interface IoK8sApiCoreV1PodAffinityTerm
 */
export interface IoK8sApiCoreV1PodAffinityTerm {
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiCoreV1PodAffinityTerm
     */
    labelSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1PodAffinityTerm
     */
    matchLabelKeys?: string[];
    /**
     * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1PodAffinityTerm
     */
    mismatchLabelKeys?: string[];
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiCoreV1PodAffinityTerm
     */
    namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1PodAffinityTerm
     */
    namespaces?: string[];
    /**
     * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodAffinityTerm
     */
    topologyKey: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PodAffinityTerm interface.
 */
export function instanceOfIoK8sApiCoreV1PodAffinityTerm(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "topologyKey" in value;

    return isInstance;
}

export function IoK8sApiCoreV1PodAffinityTermFromJSON(json: any): IoK8sApiCoreV1PodAffinityTerm {
    return IoK8sApiCoreV1PodAffinityTermFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodAffinityTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PodAffinityTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelSelector': !exists(json, 'labelSelector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['labelSelector']),
        'matchLabelKeys': !exists(json, 'matchLabelKeys') ? undefined : json['matchLabelKeys'],
        'mismatchLabelKeys': !exists(json, 'mismatchLabelKeys') ? undefined : json['mismatchLabelKeys'],
        'namespaceSelector': !exists(json, 'namespaceSelector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['namespaceSelector']),
        'namespaces': !exists(json, 'namespaces') ? undefined : json['namespaces'],
        'topologyKey': json['topologyKey'],
    };
}

export function IoK8sApiCoreV1PodAffinityTermToJSON(value?: IoK8sApiCoreV1PodAffinityTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labelSelector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.labelSelector),
        'matchLabelKeys': value.matchLabelKeys,
        'mismatchLabelKeys': value.mismatchLabelKeys,
        'namespaceSelector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.namespaceSelector),
        'namespaces': value.namespaces,
        'topologyKey': value.topologyKey,
    };
}
