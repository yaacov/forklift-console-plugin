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
import type { IoK8sApiStorageV1VolumeAttachment } from './IoK8sApiStorageV1VolumeAttachment';
import {
    IoK8sApiStorageV1VolumeAttachmentFromJSON,
    IoK8sApiStorageV1VolumeAttachmentFromJSONTyped,
    IoK8sApiStorageV1VolumeAttachmentToJSON,
} from './IoK8sApiStorageV1VolumeAttachment';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 * @export
 * @interface IoK8sApiStorageV1VolumeAttachmentList
 */
export interface IoK8sApiStorageV1VolumeAttachmentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachmentList
     */
    apiVersion?: string;
    /**
     * items is the list of VolumeAttachments
     * @type {Array<IoK8sApiStorageV1VolumeAttachment>}
     * @memberof IoK8sApiStorageV1VolumeAttachmentList
     */
    items: Array<IoK8sApiStorageV1VolumeAttachment>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachmentList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiStorageV1VolumeAttachmentList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiStorageV1VolumeAttachmentList interface.
 */
export function instanceOfIoK8sApiStorageV1VolumeAttachmentList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiStorageV1VolumeAttachmentListFromJSON(json: any): IoK8sApiStorageV1VolumeAttachmentList {
    return IoK8sApiStorageV1VolumeAttachmentListFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1VolumeAttachmentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1VolumeAttachmentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiStorageV1VolumeAttachmentFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiStorageV1VolumeAttachmentListToJSON(value?: IoK8sApiStorageV1VolumeAttachmentList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiStorageV1VolumeAttachmentToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

