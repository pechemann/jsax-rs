import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { RsApplication } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/RsApplication';
import { ApplicationConfig } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';
import { Galaad } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';
import { HateoasContextError } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';

// Utilities:
import * as galaadUtils from '../../../../../../utils/test-utils/utilities/GalaadTestUtils';
import * as utils from '../../../../../../utils/test-utils/utilities/RsApplicationTestUtils';

// Test:
describe('@RsApplication decorator test', () => {

    afterEach(galaadUtils.destroy);

    describe('#Decorator factory', () => {

        it('@RsApplication should return a factory that does not modify constructor function', () => {
            const config: ApplicationConfig = utils.createConfig();
            const innerFunc: Function = RsApplication(config);
            const constructorFunc: Function = () => { };
            Object.seal(constructorFunc);
            expect(innerFunc(constructorFunc)).to.equal(constructorFunc);
        });

        it('@RsApplication should throw an error when called twice', () => {
            const config: ApplicationConfig = utils.createConfig();
            const shouldThrowError: Function = () => {
                RsApplication(config);
            };
            RsApplication(config);
            assert.throws(shouldThrowError, HateoasContextError, 'A context already exists for this application.');
        });
    });

    describe('#Gallad initialization', () => {

        it('@RsApplication should create an application context with name equals to config name', () => {
            const config: ApplicationConfig = utils.createConfig();
            RsApplication(config);
            expect(Galaad.getInstance().getContext().getApplicationContext().getName()).to.equal(config.name);
        });

        it('@RsApplication should create an application context with domain equals to config domain', () => {
            const config: ApplicationConfig = utils.createConfig();
            RsApplication(config);
            expect(Galaad.getInstance().getContext().getApplicationContext().getDomain()).to.equal(config.domain);
        });

        it('@RsApplication should create an application context with API path equals to config API path', () => {
            const config: ApplicationConfig = utils.createConfig();
            RsApplication(config);
            expect(Galaad.getInstance().getContext().getApplicationContext().getApiPath()).to.equal(config.apiPath);
        });

        it('@RsApplication should create an application context with API version equals to config version', () => {
            const config: ApplicationConfig = utils.createConfig();
            RsApplication(config);
            expect(Galaad.getInstance().getContext().getApplicationContext().getApiVersion()).to.equal(config.version);
        });
    });
});