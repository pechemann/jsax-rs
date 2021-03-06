import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ApplicationImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/ApplicationImpl';
import { Application } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Application';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/ApplicationImplTestUtils';

// Test:
describe('ApplicationImpl class', () => {

    it('should have the same name as the name passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.AUTHORITY, utils.API_PATH, utils.VERSION);
        expect(application.name).to.equal(utils.NAME);
    });
    
    it('should have the same authority as the authority passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.AUTHORITY, utils.API_PATH, utils.VERSION);
        expect(application.authority).to.equal(utils.AUTHORITY);
    });
    
    it('should have the same api path as the api path passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.AUTHORITY, utils.API_PATH, utils.VERSION);
        expect(application.apiPath).to.equal(utils.API_PATH);
    });
    
    it('should have the same version as the version passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.AUTHORITY, utils.API_PATH, utils.VERSION);
        expect(application.version).to.equal(utils.VERSION);
    });
    
    it('protocol should be null by default', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.AUTHORITY, utils.API_PATH, utils.VERSION);
        expect(application.protocol).to.be.null;
    });

    it('should have the same protocol as the version passed in constructor parameter', () => {
        const application: Application = new ApplicationImpl(utils.NAME, utils.AUTHORITY, utils.API_PATH, utils.VERSION, utils.PROTOCOL);
        expect(application.protocol).to.equal(utils.PROTOCOL);
    });
});