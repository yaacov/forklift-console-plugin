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
 * Variable is the definition of a variable that is used for composition. A variable is defined as a named expression.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1Variable
 */
export interface IoK8sApiAdmissionregistrationV1beta1Variable {
    /**
     * Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1Variable
     */
    expression: string;
    /**
     * Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1Variable
     */
    name: string;
}

/**
 * Check if a given object implements the IoK8sApiAdmissionregistrationV1beta1Variable interface.
 */
export function instanceOfIoK8sApiAdmissionregistrationV1beta1Variable(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expression" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiAdmissionregistrationV1beta1VariableFromJSON(json: any): IoK8sApiAdmissionregistrationV1beta1Variable {
    return IoK8sApiAdmissionregistrationV1beta1VariableFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1beta1VariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1beta1Variable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expression': json['expression'],
        'name': json['name'],
    };
}

export function IoK8sApiAdmissionregistrationV1beta1VariableToJSON(value?: IoK8sApiAdmissionregistrationV1beta1Variable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expression': value.expression,
        'name': value.name,
    };
}

