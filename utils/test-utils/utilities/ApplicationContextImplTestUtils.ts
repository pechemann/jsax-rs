/*!
 * This module constains utilities used by the ApplicationContextImpl test suite.
 */

import { ApplicationConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';

// Utilities:
export const CONFIG: ApplicationConfig = {
    name: 'app-name',
    domain: 'http://my-domain.com',
    apiPath: 'api',
    version: '1.0.0'
};