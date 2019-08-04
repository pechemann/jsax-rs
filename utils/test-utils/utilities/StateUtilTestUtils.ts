/*!
 * This module constains utilities used by the StateUtil test suite.
 */

import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { Transition } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';

export const TRANSITION: Transition = {
   type: StateType.COLLECTION,
   resource: '/path/to/resource',
   method: HttpMethod.GET
}

export const STATE: State = {
   name: 'name',
   type: StateType.COLLECTION,
   resource: '/path/to/resource',
   method: HttpMethod.GET
}