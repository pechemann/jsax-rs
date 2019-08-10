/*!
 * This module constains utilities used by the ApplicationUtils test  suite.
 */

import { ApplicationContext } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';
import { HttpProtocol } from '../../../src/com/onsoft/jsaxrs/lang/net/http/HttpProtocol';

// Utilities:
export const buildContext = function(name: string, authority: string, protocol: HttpProtocol | any, apiPath: string, version: string): ApplicationContext {
    return new ApplicationContextImpl({ name: name, authority: authority, apiPath: apiPath, version: version, protocol: protocol });
}