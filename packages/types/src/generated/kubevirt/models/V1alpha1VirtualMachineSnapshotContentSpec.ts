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
import type { V1alpha1SourceSpec } from './V1alpha1SourceSpec';
import {
    V1alpha1SourceSpecFromJSON,
    V1alpha1SourceSpecFromJSONTyped,
    V1alpha1SourceSpecToJSON,
} from './V1alpha1SourceSpec';
import type { V1alpha1VolumeBackup } from './V1alpha1VolumeBackup';
import {
    V1alpha1VolumeBackupFromJSON,
    V1alpha1VolumeBackupFromJSONTyped,
    V1alpha1VolumeBackupToJSON,
} from './V1alpha1VolumeBackup';

/**
 * VirtualMachineSnapshotContentSpec is the spec for a VirtualMachineSnapshotContent resource
 * @export
 * @interface V1alpha1VirtualMachineSnapshotContentSpec
 */
export interface V1alpha1VirtualMachineSnapshotContentSpec {
    /**
     * 
     * @type {V1alpha1SourceSpec}
     * @memberof V1alpha1VirtualMachineSnapshotContentSpec
     */
    source: V1alpha1SourceSpec;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineSnapshotContentSpec
     */
    virtualMachineSnapshotName?: string;
    /**
     * 
     * @type {Array<V1alpha1VolumeBackup>}
     * @memberof V1alpha1VirtualMachineSnapshotContentSpec
     */
    volumeBackups?: Array<V1alpha1VolumeBackup>;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineSnapshotContentSpec interface.
 */
export function instanceOfV1alpha1VirtualMachineSnapshotContentSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "source" in value;

    return isInstance;
}

export function V1alpha1VirtualMachineSnapshotContentSpecFromJSON(json: any): V1alpha1VirtualMachineSnapshotContentSpec {
    return V1alpha1VirtualMachineSnapshotContentSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineSnapshotContentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineSnapshotContentSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': V1alpha1SourceSpecFromJSON(json['source']),
        'virtualMachineSnapshotName': !exists(json, 'virtualMachineSnapshotName') ? undefined : json['virtualMachineSnapshotName'],
        'volumeBackups': !exists(json, 'volumeBackups') ? undefined : ((json['volumeBackups'] as Array<any>).map(V1alpha1VolumeBackupFromJSON)),
    };
}

export function V1alpha1VirtualMachineSnapshotContentSpecToJSON(value?: V1alpha1VirtualMachineSnapshotContentSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': V1alpha1SourceSpecToJSON(value.source),
        'virtualMachineSnapshotName': value.virtualMachineSnapshotName,
        'volumeBackups': value.volumeBackups === undefined ? undefined : ((value.volumeBackups as Array<any>).map(V1alpha1VolumeBackupToJSON)),
    };
}

