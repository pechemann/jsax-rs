import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { Galaad } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';
import { ApplicationConfig } from '../../../../../../..//src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';
import { HateoasContextError } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';
import { ApplicationContext } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/GalaadTestUtils';

// Test:
describe('@Galaad test', () => {

    afterEach(utils.destroy);

    describe('#getInstance()', () => {

        it('should return an instance of the type of Galaad', () => {
            expect(Galaad.getInstance() instanceof Galaad).to.be.true;
        });
        
        it('should always return the same object reference', () => {
            const obj1: Galaad = Galaad.getInstance();
            const obj2: Galaad = Galaad.getInstance();
            expect(obj1).to.equal(obj2);
        });
    });

    describe('#createContext()', () => {

        it('should create a HATEOAS context from the specified config', () => {
            const galaad: Galaad = Galaad.getInstance();
            const config: ApplicationConfig = utils.createConfig();
            const createContext: Function = (): boolean => {
                galaad.createContext(config);
                return true;
            };
            expect(createContext()).to.be.true;
        });
        
        it('should throw an error wether a context already exists for this application', () => {
            const galaad: Galaad = Galaad.getInstance();
            const config: ApplicationConfig = utils.createConfig();
            const shouldThrowError: Function = () => {
                galaad.createContext(config);
            };
            galaad.createContext(config);
            assert.throws(shouldThrowError, HateoasContextError, 'A context already exists for this application.');
        });
    });

    describe('#getContext()', () => {
        
        it('should return a HATEOAS context built from the specified config', () => {
            const galaad: Galaad = Galaad.getInstance();
            const config: ApplicationConfig = utils.createConfig();
            galaad.createContext(config);
            const context: ApplicationContext = galaad.getContext().getApplicationContext();
            expect(context.getName()).to.equal(config.name);
            expect(context.getApiPath()).to.equal(config.apiPath);
            expect(context.getApiVersion()).to.equal(config.version);
            expect(context.getDomain()).to.equal(config.domain);
        });
    });
});