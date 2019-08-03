/*!
 * This module constains utilities used by the RsTransition test suite.
 */

import { LinkType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/LinkType';
import { TransitionConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/TransitionConfig';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';

// Utilities:
export const METHOD_REF: string = 'methodRef';
export const PROPERTY_REF: string = 'propertyRef';
export const LINK_REL_TYPE: LinkType = LinkType.NEXT;

// return a TransitionConfig object
export function getTransitionConfig(): TransitionConfig {
    return {
        name: 'transitionName',
        type: StateType.COLLECTION,
        resource: '/path/to/resource',
        method: HttpMethod.GET,
        stateRef: 'stateRef',
        rel: LINK_REL_TYPE
    };
};