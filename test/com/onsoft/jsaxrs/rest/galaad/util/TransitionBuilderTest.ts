import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { TransitionBuilder } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionBuilder';
import { TransitionConfig } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/TransitionConfig';
import { Transition } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { StateType } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/StateType';
import { HateoasContextError } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/TransitionBuilderTestUtils';

// Test:
describe('@TransitionBuilder class test', () => {

    describe('#buildFromState()', () => {

        it('buildFromState() should create a Transition object with the same type as the state type', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const result: Transition = builder.buildFromState(utils.STATE);
            expect(result.type).to.equal(utils.STATE.type);
        });
        
        it('buildFromState() should create a Transition object with the same resource as the state resource', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const result: Transition = builder.buildFromState(utils.STATE);
            expect(result.resource).to.equal(utils.STATE.resource);
        });
        
        it('buildFromState() should create a Transition object with the same method as the state method', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const result: Transition = builder.buildFromState(utils.STATE);
            expect(result.method).to.equal(utils.STATE.method);
        });
    });

    describe('#buildFromConfig()', () => {

        it('buildFromConfig() should create a Transition object with the same type as the config type', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const config: TransitionConfig = utils.getTransitionConfig();
            const result: Transition = builder.buildFromConfig(config);
            expect(result.type).to.equal(config.type);
        });
        
        it('buildFromConfig() should create a Transition object with the same resource as the config resource', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const config: TransitionConfig = utils.getTransitionConfig();
            const result: Transition = builder.buildFromConfig(config);
            expect(result.resource).to.equal(config.resource);
        });

        it('buildFromConfig() should create a Transition object with the same relation as the config relation', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const config: TransitionConfig = utils.getTransitionConfig();
            const result: Transition = builder.buildFromConfig(config);
            expect(result.rel).to.equal(config.rel);
        });

        it('buildFromConfig() should create a Transition object with the same method as the config method', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const config: TransitionConfig = utils.getTransitionConfig();
            const result: Transition = builder.buildFromConfig(config);
            expect(result.method).to.equal(config.method);
        });
        
        it('buildFromConfig() should create a Transition object without any method', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            let config: TransitionConfig = utils.getTransitionConfig();
            delete config.method;
            const result: Transition = builder.buildFromConfig(config);
            expect(result.method).to.be.null;
        });

        it('buildFromConfig() should throw an error if type is "controller" and method is not "POST"', () => {
            const builder: TransitionBuilder = new TransitionBuilder();
            const config: TransitionConfig = utils.getTransitionConfig();
            config.type = StateType.CONTROLLER;
            const shouldThrowError: Function = () => {
                builder.buildFromConfig(config);
            };
            assert.throws(shouldThrowError, HateoasContextError, 'CONTROLLER reources must be called with HTTP POST methods.');
        });
    });
});