import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ApplicationUtil } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/ApplicationUtil';
import { ApplicationBuilder } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/ApplicationBuilder';
import { Application } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Application';
import { ApplicationContext } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/ApplicationBuilderTestUtils';
import * as contextUtils from '../../../../../../../utils/test-utils/utilities/ApplicationUtilsTestUtils';

// Test:
describe('@ApplicationUtil class test', () => {

    describe('#createAppRepresentation()', () => {

        it('createAppRepresentation() should create an Application representation with name equals to the application name', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.name).to.equal(application.name);
        });

        it('createAppRepresentation() should create an Application representation with authority equals to the application authority', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.authority).to.equal(application.authority);
        });
        
        it('createAppRepresentation() should create an Application representation with protocol equals to the application protocol', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.protocol).to.equal(application.protocol);
        });
        
        it('createAppRepresentation() should create an Application representation with apiPath equals to the application api path', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.apiPath).to.equal(application.apiPath);
        });
        
        it('createAppRepresentation() should create an Application representation with version equals to the application version', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.version).to.equal(application.version);
        });
        
        it('createAppRepresentation() should create an Application representation without any state', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.state).to.be.null;
        });
        
        it('createAppRepresentation() should create an Application representation with state equals to the application state', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION, utils.STATE);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.state).to.equal(application.state);
        });

        it('createAppRepresentation() should create an Application representation without any authority', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, null, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.authority).to.be.undefined;
        });
        
        it('createAppRepresentation() should create an Application representation without any protocol', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, null, utils.API_PATH, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.protocol).to.be.undefined;
        });

        it('createAppRepresentation() should create an Application representation without any apiPath', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, null, utils.VERSION);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.apiPath).to.be.undefined;
        });
        
        it('createAppRepresentation() should create an Application representation without any version', () => {
            const builder: ApplicationBuilder = new ApplicationBuilder();
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const application: Application = builder.build(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, null);
            const representation: any = appUtil.createAppRepresentation(application);
            expect(representation.version).to.be.undefined;
        });
    });

    describe('#createAppRepresentationFromContext()', () => {

        it('createAppRepresentationFromContext() should create an Application representation with name equals to the context name', () => {
            const context: ApplicationContext = utils.CONTEXT;
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.name).to.equal(context.getName());
        });

        it('createAppRepresentationFromContext() should create an Application representation with authority equals to the context authority', () => {
            const context: ApplicationContext = utils.CONTEXT;
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.authority).to.equal(context.getAuthority());
        });
        
        it('createAppRepresentationFromContext() should create an Application representation with protocol equals to the context protocol', () => {
            const context: ApplicationContext = utils.CONTEXT;
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.protocol).to.equal(context.getProtocol());
        });
        
        it('createAppRepresentationFromContext() should create an Application representation with apiPath equals to the context api path', () => {
            const context: ApplicationContext = utils.CONTEXT;
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.apiPath).to.equal(context.getApiPath());
        });
        
        it('createAppRepresentationFromContext() should create an Application representation with version equals to the context version', () => {
            const context: ApplicationContext = utils.CONTEXT;
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.version).to.equal(context.getApiVersion());
        });
        
        it('createAppRepresentationFromContext() should create an Application representation without any state', () => {
            const context: ApplicationContext = utils.CONTEXT;
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.state).to.be.undefined;
        });

        it('createAppRepresentationFromContext() should create an Application representation without any name', () => {
            const context: ApplicationContext = contextUtils.buildContext(null, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.name).to.be.undefined;
        });
        
        it('createAppRepresentationFromContext() should create an Application representation without any authority', () => {
            const context: ApplicationContext = contextUtils.buildContext(utils.NAME, null, utils.PROTOCOL, utils.API_PATH, utils.VERSION);
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.authority).to.be.undefined;
        });
        
        it('createAppRepresentationFromContext() should create an Application representation without any protocol', () => {
            const context: ApplicationContext = contextUtils.buildContext(utils.NAME, utils.AUTHORITY, null, utils.API_PATH, utils.VERSION);
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.protocol).to.be.undefined;
        });
        
        it('createAppRepresentationFromContext() should create an Application representation without any apiPath', () => {
            const context: ApplicationContext = contextUtils.buildContext(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, null, utils.VERSION);
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.apiPath).to.be.undefined;
        });
        
        it('createAppRepresentationFromContext() should create an Application representation without any version', () => {
            const context: ApplicationContext = contextUtils.buildContext(utils.NAME, utils.AUTHORITY, utils.PROTOCOL, utils.API_PATH, null);
            const appUtil: ApplicationUtil = new ApplicationUtil();
            const representation: any = appUtil.createAppRepresentationFromContext(context);
            expect(representation.version).to.be.undefined;
        });
    });
});