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
 * TCPSocketAction describes an action based on opening a socket
 * @export
 * @interface K8sIoApiCoreV1TCPSocketAction
 */
export interface K8sIoApiCoreV1TCPSocketAction {
    /**
     * Optional: Host name to connect to, defaults to the pod IP.
     * @type {string}
     * @memberof K8sIoApiCoreV1TCPSocketAction
     */
    host?: string;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1TCPSocketAction interface.
 */
export function instanceOfK8sIoApiCoreV1TCPSocketAction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function K8sIoApiCoreV1TCPSocketActionFromJSON(json: any): K8sIoApiCoreV1TCPSocketAction {
    return K8sIoApiCoreV1TCPSocketActionFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1TCPSocketActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1TCPSocketAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function K8sIoApiCoreV1TCPSocketActionToJSON(value?: K8sIoApiCoreV1TCPSocketAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
    };
}
