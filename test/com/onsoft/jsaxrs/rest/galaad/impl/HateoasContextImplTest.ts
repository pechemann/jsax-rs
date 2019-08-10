import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { HateoasContextImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/HateoasContextImpl';
import { HateoasContext } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/HateoasContext';
import { Application } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Application';
import { HateoasContextError } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';
import { State } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/State';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/HateoasContextImplTestUtils';

// Test:
describe('HateoasContextImpl class', () => {

    describe('Invalid constructor parameters', () => {

        it('#HateoasContextImpl should throw an error when two states with the same name are passed in constructor parameter', () => {
            const shouldThrowError: Function = () => {
                new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_1_BIS]);
            };
            const name: string = utils.STATE_1_BIS.name;
            const errorMessage: string = `A state with the same name already exists in the application context: state=${name}`;
            assert.throws(shouldThrowError, HateoasContextError, errorMessage);
        });
    });

    describe('#getApplicationState()', () => {
            
        it('should return the application state registered with the specified name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const appState1: Application = context.getApplicationState(utils.STATE_1.name);
            expect(appState1).to.exist;
            const appState2: Application = context.getApplicationState(utils.STATE_2.name);
            expect(appState2).to.exist;
        });
        
        it('should return the application state with the correct state', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const appState1: Application = context.getApplicationState(utils.STATE_1.name);
            expect(appState1.state).to.equal(utils.STATE_1);
        });
        
        it('should throw an error when no state is registered with the specified name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const shouldThrowError: Function = () => {
                context.getApplicationState('unknown');
            };
            const errorMessage: string = 'State does not exist in the application context: state=unknown';
            assert.throws(shouldThrowError, HateoasContextError, errorMessage);
        });
    });

    describe('#getGraph()', () => {

        it('should return an array that contains all states registered in the application', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const states: State[] = context.getGraph();
            expect(states.find((item: State)=> item === utils.STATE_1)).to.not.be.undefined;
            expect(states.find((item: State)=> item === utils.STATE_2)).to.not.be.undefined;
        });
    });

    describe('#getResourceStateRepresentation()', () => {

        it('should return a resource state representation for the correct app name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation.name).to.equal(utils.CONTEXT.getName());
        });
        
        it('should return a resource state representation for the correct app authority', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation.authority).to.equal(utils.CONTEXT.getAuthority());
        });

        it('should return a resource state representation for the correct app protocol', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation.protocol).to.equal(utils.CONTEXT.getProtocol());
        });

        it('should return a resource state representation for the correct app version', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation.version).to.equal(utils.CONTEXT.getApiVersion());
        });

        it('should return a resource state representation for the correct app api path', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation.apiPath).to.equal(utils.CONTEXT.getApiPath());
        });

        it('should thrown an error when no state is registered with the specified name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const shouldThrowError: Function = () => {
                context.getResourceStateRepresentation('unknown');
            };
            const errorMessage: string = 'State does not exist in the application context: state=unknown';
            assert.throws(shouldThrowError, HateoasContextError, errorMessage);
        });
        
        it('should return a resource state representation for the specified name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation).to.exist;
        });
        
        it('should return a resource state representation with the correct state reference for the specified name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_1.name);
            expect(representation.state.type).to.equal(utils.STATE_1.type);
            expect(representation.state.resource).to.equal(utils.STATE_1.resource);
            expect(representation.state.method).to.equal(utils.STATE_1.method);
        });
        
        it('should not resolve path segments when no parameters are defined', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_2.name);
            expect(representation.state.resource).to.equal(utils.STATE_2.resource);
        });
        
        it('should resolve path segments when parameters are defined', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const parameters: any = { id: 'idTest' };
            const representation: any = context.getResourceStateRepresentation(utils.STATE_2.name, parameters);
            expect(representation.state.resource).to.equal('path/to/resource/idTest');
        });
        
        it('should return a resource state representation with the correct transitions for the specified name', () => {
            const context: HateoasContext = new HateoasContextImpl(utils.CONTEXT, [utils.STATE_1, utils.STATE_2]);
            const representation: any = context.getResourceStateRepresentation(utils.STATE_2.name);
            const transition: any = representation.state.transitions[0];
            expect(transition.type).to.equal(utils.TRANSITION.type);
            expect(transition.resource).to.equal(utils.TRANSITION.resource);
            expect(transition.method).to.equal(utils.TRANSITION.method);
        });
    });
});