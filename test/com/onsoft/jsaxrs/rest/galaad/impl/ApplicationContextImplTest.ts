import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ApplicationContextImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationContextImpl';
import { ApplicationContext } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/ApplicationContextImplTestUtils';

// Test:
describe('ApplicationContextImpl class', () => {

    it('#getName() should return the same name as the config name', () => {
        const context: ApplicationContext = new ApplicationContextImpl(utils.CONFIG);
        expect(context.getName()).to.equal(utils.CONFIG.name);
    });
    
    it('#getApiPath() should return the same api path as the config api path', () => {
        const context: ApplicationContext = new ApplicationContextImpl(utils.CONFIG);
        expect(context.getApiPath()).to.equal(utils.CONFIG.apiPath);
    });
    
    it('#getName() should return the same api version as the config api version', () => {
        const context: ApplicationContext = new ApplicationContextImpl(utils.CONFIG);
        expect(context.getApiVersion()).to.equal(utils.CONFIG.version);
    });
    
    it('#getName() should return the same domain as the config domain', () => {
        const context: ApplicationContext = new ApplicationContextImpl(utils.CONFIG);
        expect(context.getDomain()).to.equal(utils.CONFIG.domain);
    });
});