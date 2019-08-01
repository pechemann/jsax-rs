/*!
 * This module constains utilities used by the RsState test suite.
 */

import { StateConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/StateConfig';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';

// Utilities:
export const TRANSITION_REF: string = 'transitionRef';
export const METHOD_REF: string = 'methodRef';

// return a StateConfig object
export function getStateConfig(): StateConfig {
    return {
        name: 'stateName',
        type: StateType.COLLECTION,
        resource: '/path/to/resource',
        method: HttpMethod.GET
    };
};