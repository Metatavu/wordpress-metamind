// tslint:disable
// eslint-disable
/**
 * Metamind API
 * Brain spec for Metamind.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum TrainingMaterialVisibility {
    STORY = 'STORY',
    LOCAL = 'LOCAL'
}

export function TrainingMaterialVisibilityFromJSON(json: any): TrainingMaterialVisibility {
    return TrainingMaterialVisibilityFromJSONTyped(json, false);
}

export function TrainingMaterialVisibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrainingMaterialVisibility {
    return json as TrainingMaterialVisibility;
}

export function TrainingMaterialVisibilityToJSON(value?: TrainingMaterialVisibility | null): any {
    return value as any;
}

