import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { StateBuilder } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/StateBuilder';
import { StateConfig } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/StateConfig';
import { State } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { StateType } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HateoasContextError } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';
import { HttpMethod } from '../../../../../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/StateBuilderTestUtils';

// Test:
describe('@StateBuilder class test', () => {

    describe('#buildFromConfig()', () => {

        it('buildFromConfig() should create a State object with the same name as the config name', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, utils.TYPE, utils.RESOURCE, utils.METHOD);
            const result: State = builder.buildFromConfig(config);
            expect(result.name).to.equal(config.name);
        });

        it('buildFromConfig() should create a State object with the same type as the config type', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, utils.TYPE, utils.RESOURCE, utils.METHOD);
            const result: State = builder.buildFromConfig(config);
            expect(result.type).to.equal(config.type);
        });
        
        it('buildFromConfig() should create a State object with the same resource as the config resource', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, utils.TYPE, utils.RESOURCE, utils.METHOD);
            const result: State = builder.buildFromConfig(config);
            expect(result.resource).to.equal(config.resource);
        });
        
        it('buildFromConfig() should create a State object with the same method as the config method', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, utils.TYPE, utils.RESOURCE, utils.METHOD);
            const result: State = builder.buildFromConfig(config);
            expect(result.method).to.equal(config.method);
        });
        
        it('buildFromConfig() should create a State object without any transition', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, utils.TYPE, utils.RESOURCE, utils.METHOD);
            const result: State = builder.buildFromConfig(config);
            expect(result.transitions).to.be.null;
        });
        
        it('buildFromConfig() should create a State object with the same transition passed as parameter', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, utils.TYPE, utils.RESOURCE, utils.METHOD);
            const result: State = builder.buildFromConfig(config, utils.TRANSITIONS);
            expect(result.transitions).to.equal(utils.TRANSITIONS);
        });
        
        it('buildFromConfig() should throw an error if type is "controller" and method  is not "POST"', () => {
            const builder: StateBuilder = new StateBuilder();
            const config: StateConfig = utils.buildStateConfig(utils.NAME, StateType.CONTROLLER, utils.RESOURCE, HttpMethod.GET);
            const shouldThrowError: Function = () => {
                builder.buildFromConfig(config, utils.TRANSITIONS);
            };
            assert.throws(shouldThrowError, HateoasContextError, 'CONTROLLER reources must be called with HTTP POST methods.');
        });
    });
});