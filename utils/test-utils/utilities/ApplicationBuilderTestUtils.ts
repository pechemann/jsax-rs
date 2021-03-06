/*!
 * This module constains utilities used by the ApplicationBuilder test suite.
 */

import { State } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { StateType } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HttpMethod } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';
import { ApplicationContext } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';
import { HttpProtocol } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpProtocol';

// Utilities:
export const NAME: string = 'app-name';
export const AUTHORITY: string = 'my-domain.com';
export const API_PATH: string = 'api';
export const VERSION: string = '1.0.0';
export const PROTOCOL: HttpProtocol = HttpProtocol.HTTP;
export const STATE: State = {
    type: StateType.COLLECTION,
    resource: 'resource-name',
    method: HttpMethod.GET
};
export const CONTEXT: ApplicationContext = new ApplicationContextImpl({
    name: NAME,
    authority: AUTHORITY,
    apiPath: API_PATH,
    version: VERSION,
    protocol: PROTOCOL
});