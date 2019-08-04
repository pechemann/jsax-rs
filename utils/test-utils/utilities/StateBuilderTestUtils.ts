/*!
 * This module constains utilities used by the StateBuilder test suite.
 */

import { StateConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/StateConfig';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { Transition } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';


// Utilities:
export const METHOD: HttpMethod = HttpMethod.GET;
export const RESOURCE: string = 'path/to/resource';
export const TYPE: StateType = StateType.COLLECTION;
export const NAME: string = 'name';
export const TRANSITIONS: Transition[] = [];

// return a StateConfig object
export function buildStateConfig(name: string, type: StateType, resource: string, method: HttpMethod): StateConfig {
    return {
        name: name,
        type: type,
        resource: resource,
        method: method
    };
};