/*!
 * This module constains utilities used by the ApplicationBuilder test suite.
 */

import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { ApplicationContext } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';

// Utilities:
export const NAME: string = 'app-name';
export const DOMAIN: string = 'http://my-domain.com';
export const API_PATH: string = 'api';
export const VERSION: string = '1.0.0';
export const STATE: State = {
    type: StateType.COLLECTION,
    resource: 'resource-name',
    method: HttpMethod.GET
};
export const CONTEXT: ApplicationContext = new ApplicationContextImpl({
    name: NAME,
    domain: DOMAIN,
    apiPath: API_PATH,
    version: VERSION
});