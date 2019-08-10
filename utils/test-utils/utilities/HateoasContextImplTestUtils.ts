/*!
 * This module constains utilities used by the HateoasContextImpl test suite.
 */

// Utilities:
import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { Transition } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { ApplicationContext } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';
import { HttpProtocol } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpProtocol';

// Utilities:

export const TRANSITION: Transition = {
    type: StateType.COLLECTION,
    resource: '/path/to/resource/1',
    method: HttpMethod.GET
 }
 
export const STATE_1: State = {
    name: 'state1',
    type: StateType.COLLECTION,
    resource: 'path/to/resource/1',
    method: HttpMethod.GET
};
export const STATE_1_BIS: State = {
    name: 'state1',
    type: StateType.COLLECTION,
    resource: 'path/to/resource/1',
    method: HttpMethod.PUT
};
export const STATE_2: State = {
    name: 'state2',
    type: StateType.DOCUMENT,
    resource: 'path/to/resource/:id',
    method: HttpMethod.GET,
    transitions: [ TRANSITION ]
};
export const CONTEXT: ApplicationContext = new ApplicationContextImpl({
    name: 'app-name',
    authority: 'my-domain.com',
    apiPath: 'api',
    version: '1.0.0',
    protocol: HttpProtocol.HTTP
});