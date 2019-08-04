/*!
 * This module constains utilities used by the ApplicationUtils test  suite.
 */

import { ApplicationContext } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';

// Utilities:
export const buildContext = function(name: string, domain: string, apiPath: string, version: string): ApplicationContext {
    return new ApplicationContextImpl({ name: name, domain: domain, apiPath: apiPath, version: version });
}