/*!
 * This module constains utilities used by the TransitionBuilder test suite.
 */

import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { TransitionConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/TransitionConfig';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { LinkType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/LinkType';

export const STATE: State = {
    name: 'name',
    type: StateType.COLLECTION,
    resource: '/path/to/resource',
    method: HttpMethod.GET
}
 
// return a TransitionConfig object
export function getTransitionConfig(): TransitionConfig {
    return {
        name: 'transitionName',
        type: StateType.COLLECTION,
        resource: '/path/to/resource',
        method: HttpMethod.GET,
        stateRef: 'stateRef',
        rel: LinkType.NEXT
    };
};