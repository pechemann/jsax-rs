import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ApplicationBuilder } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/ApplicationBuilder';
import { Application } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Application';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/ApplicationBuilderTestUtils';

// Test:
describe('@ApplicationBuilder class test', () => {

    describe('#build()', () => {

        it('build() should create an Application object with name equals to the name passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            expect(application.name).to.equal(utils.NAME);
        });

        it('build() should create an Application object with authority equals to the authority passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            expect(application.authority).to.equal(utils.AUTHORITY);
        });
        
        it('build() should create an Application object with protocol equals to the protocol passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            expect(application.protocol).to.equal(utils.PROTOCOL);
        });
        
        it('build() should create an Application object with apiPath equals to the api path passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            expect(application.apiPath).to.equal(utils.API_PATH);
        });
        
        it('build() should create an Application object with version equals to the version passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            expect(application.version).to.equal(utils.VERSION);
        });
        
        it('build() should create an Application object without any state', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            expect(application.state).to.be.null;
        });
        
        it('build() should create an Application object with state equals to the state passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application =
                                    builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION, utils.STATE);
            expect(application.state).to.equal(utils.STATE);
        });
    });

    describe('#buildFromContext()', () => {

        it('buildFromContext() should create an Application object with name equals to the context name', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT);
            expect(application.name).to.equal(utils.CONTEXT.getName());
        });
        
        it('buildFromContext() should create an Application object with authority equals to the context authority', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT);
            expect(application.authority).to.equal(utils.CONTEXT.getAuthority());
        });
        
        it('buildFromContext() should create an Application object with protocol equals to the context protocol', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT);
            expect(application.protocol).to.equal(utils.CONTEXT.getProtocol());
        });
        
        it('buildFromContext() should create an Application object with version equals to the context version', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT);
            expect(application.version).to.equal(utils.CONTEXT.getApiVersion());
        });
        
        it('buildFromContext() should create an Application object with apiPath equals to the context api path', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT);
            expect(application.apiPath).to.equal(utils.CONTEXT.getApiPath());
        });
        
        it('build() should create an Application object without any state', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT);
            expect(application.state).to.be.null;
        });
        
        it('build() should create an Application object with state equals to the state passed as parameter', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const application: Application = builder.buildFromContext(utils.CONTEXT, utils.STATE);
            expect(application.state).to.equal(utils.STATE);
        });
    });
});