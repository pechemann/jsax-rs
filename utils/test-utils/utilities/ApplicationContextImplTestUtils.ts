/*!
 * This module constains utilities used by the ApplicationContextImpl test suite.
 */

import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { ApplicationConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';

// Utilities:
export const STATE: State = {
    type: StateType.COLLECTION,
    resource: 'resource-name',
    method: HttpMethod.GET
};
export const CONFIG: ApplicationConfig = {
    name: 'app-name',
    domain: 'http://my-domain.com',
    apiPath: 'api',
    version: '1.0.0'
};