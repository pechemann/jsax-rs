import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ApplicationImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationImpl';
import { Application } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Application';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/ApplicationImplTestUtils';

// Test:
describe('ApplicationImpl class', () => {

    it('ApplicationImpl should have the same name as the name passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.DOMAIN, utils.API_PATH, utils.VERSION);
        expect(application.name).to.equal(utils.NAME);
    });
    
    it('ApplicationImpl should have the same domain as the domain passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.DOMAIN, utils.API_PATH, utils.VERSION);
        expect(application.domain).to.equal(utils.DOMAIN);
    });
    
    it('ApplicationImpl should have the same api path as the api path passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.DOMAIN, utils.API_PATH, utils.VERSION);
        expect(application.apiPath).to.equal(utils.API_PATH);
    });
    
    it('ApplicationImpl should have the same version as the version passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.DOMAIN, utils.API_PATH, utils.VERSION);
        expect(application.version).to.equal(utils.VERSION);
    });
});