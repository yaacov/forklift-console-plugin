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
import type { IoK8sApiAppsV1DaemonSetCondition } from './IoK8sApiAppsV1DaemonSetCondition';
import {
    IoK8sApiAppsV1DaemonSetConditionFromJSON,
    IoK8sApiAppsV1DaemonSetConditionFromJSONTyped,
    IoK8sApiAppsV1DaemonSetConditionToJSON,
} from './IoK8sApiAppsV1DaemonSetCondition';

/**
 * DaemonSetStatus represents the current status of a daemon set.
 * @export
 * @interface IoK8sApiAppsV1DaemonSetStatus
 */
export interface IoK8sApiAppsV1DaemonSetStatus {
    /**
     * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    collisionCount?: number;
    /**
     * Represents the latest available observations of a DaemonSet's current state.
     * @type {Array<IoK8sApiAppsV1DaemonSetCondition>}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    conditions?: Array<IoK8sApiAppsV1DaemonSetCondition>;
    /**
     * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    currentNumberScheduled: number;
    /**
     * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    desiredNumberScheduled: number;
    /**
     * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    numberAvailable?: number;
    /**
     * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    numberMisscheduled: number;
    /**
     * numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    numberReady: number;
    /**
     * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    numberUnavailable?: number;
    /**
     * The most recent generation observed by the daemon set controller.
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    observedGeneration?: number;
    /**
     * The total number of nodes that are running updated daemon pod
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetStatus
     */
    updatedNumberScheduled?: number;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1DaemonSetStatus interface.
 */
export function instanceOfIoK8sApiAppsV1DaemonSetStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currentNumberScheduled" in value;
    isInstance = isInstance && "desiredNumberScheduled" in value;
    isInstance = isInstance && "numberMisscheduled" in value;
    isInstance = isInstance && "numberReady" in value;

    return isInstance;
}

export function IoK8sApiAppsV1DaemonSetStatusFromJSON(json: any): IoK8sApiAppsV1DaemonSetStatus {
    return IoK8sApiAppsV1DaemonSetStatusFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DaemonSetStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1DaemonSetStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collisionCount': !exists(json, 'collisionCount') ? undefined : json['collisionCount'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiAppsV1DaemonSetConditionFromJSON)),
        'currentNumberScheduled': json['currentNumberScheduled'],
        'desiredNumberScheduled': json['desiredNumberScheduled'],
        'numberAvailable': !exists(json, 'numberAvailable') ? undefined : json['numberAvailable'],
        'numberMisscheduled': json['numberMisscheduled'],
        'numberReady': json['numberReady'],
        'numberUnavailable': !exists(json, 'numberUnavailable') ? undefined : json['numberUnavailable'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'updatedNumberScheduled': !exists(json, 'updatedNumberScheduled') ? undefined : json['updatedNumberScheduled'],
    };
}

export function IoK8sApiAppsV1DaemonSetStatusToJSON(value?: IoK8sApiAppsV1DaemonSetStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collisionCount': value.collisionCount,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiAppsV1DaemonSetConditionToJSON)),
        'currentNumberScheduled': value.currentNumberScheduled,
        'desiredNumberScheduled': value.desiredNumberScheduled,
        'numberAvailable': value.numberAvailable,
        'numberMisscheduled': value.numberMisscheduled,
        'numberReady': value.numberReady,
        'numberUnavailable': value.numberUnavailable,
        'observedGeneration': value.observedGeneration,
        'updatedNumberScheduled': value.updatedNumberScheduled,
    };
}

