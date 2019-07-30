/*!
 * This module constains utilities used by the RsApplication test  suite.
 */

import { ApplicationConfig } from '../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';

// Utilities:
// create and return a new ApplicationConfig object.
export function createConfig(): ApplicationConfig {
    return {
        name: 'app-name',
        domain: 'http://domain.com',
        apiPath: 'api',
        version: '1.0.0'
    };
}