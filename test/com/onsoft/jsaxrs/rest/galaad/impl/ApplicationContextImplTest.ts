import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ApplicationContextImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';
import { ApplicationContext } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { ApplicationConfig } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/GalaadTestUtils';

// Test:
describe('ApplicationContextImpl class', () => {

    it('#getName() should return the same name as the config name', () => {
        const config: ApplicationConfig = utils.createConfig();
        const context: ApplicationContext = new ApplicationContextImpl(config);
        expect(context.getName()).to.equal(config.name);
    });
    
    it('#getApiPath() should return the same api path as the config api path', () => {
        const config: ApplicationConfig = utils.createConfig();
        const context: ApplicationContext = new ApplicationContextImpl(config);
        expect(context.getApiPath()).to.equal(config.apiPath);
    });
    
    it('#getApiVersion() should return the same api version as the config api version', () => {
        const config: ApplicationConfig = utils.createConfig();
        const context: ApplicationContext = new ApplicationContextImpl(config);
        expect(context.getApiVersion()).to.equal(config.version);
    });
    
    it('#getAuthority() should return the same authority as the config authority', () => {
        const config: ApplicationConfig = utils.createConfig();
        const context: ApplicationContext = new ApplicationContextImpl(config);
        expect(context.getAuthority()).to.equal(config.authority);
    });
    
    it('#getProtocol() should return the same protocol as the config protocol', () => {
        const config: ApplicationConfig = utils.createConfig();
        const context: ApplicationContext = new ApplicationContextImpl(config);
        expect(context.getProtocol()).to.equal(config.protocol);
    });
});