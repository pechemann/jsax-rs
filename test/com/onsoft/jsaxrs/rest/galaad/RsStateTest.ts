import 'mocha';
import { expect } from 'chai';

// Class to test:
import { RsState } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/RsState';
import { StateConfig } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/StateConfig';
import { State } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/State';

// Utilities:
import * as galaadUtils from '../../../../../../utils/test-utils/utilities/GalaadTestUtils';
import * as utils from '../../../../../../utils/test-utils/utilities/RsStateTestUtils';

// Test:
describe('@RsState decorator test', () => {

    afterEach(galaadUtils.destroy);

    describe('#Decorator factory', () => {

        it('@RsState should return a factory that returns the same property descriptor as passed as parameter', () => {
            const innerFunc: Function = RsState(utils.getStateConfig());
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const result: PropertyDescriptor = innerFunc(decoratee, utils.METHOD_REF, descriptor);
            expect(result).to.equal(descriptor);
        });
    });

    describe('#Gallad', () => {

        it('@RsState should create a state with name equals to the method name', () => {
            const config: StateConfig = utils.getStateConfig();
            config.name = null;
            const innerFunc: Function = RsState(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const states: Array<State> = galaadUtils.getInitStates();
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const state: State = states.find((item: State)=> {
                return item.name === utils.METHOD_REF;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('@RsState should create a state with name equals to the config name', () => {
            const config: StateConfig = utils.getStateConfig();
            const innerFunc: Function = RsState(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const states: Array<State> = galaadUtils.getInitStates();
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const state: State = states.find((item: State)=> {
                return item.name === config.name;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('@RsState should create a state with type equals to the config type', () => {
            const config: StateConfig = utils.getStateConfig();
            const innerFunc: Function = RsState(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const states: Array<State> = galaadUtils.getInitStates();
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const state: State = states.find((item: State)=> {
                return item.type === config.type;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('@RsState should create a state with resource equals to the config resource', () => {
            const config: StateConfig = utils.getStateConfig();
            const innerFunc: Function = RsState(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const states: Array<State> = galaadUtils.getInitStates();
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const state: State = states.find((item: State)=> {
                return item.type === config.type;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('@RsState should create a state with method equals to the config method', () => {
            const config: StateConfig = utils.getStateConfig();
            const innerFunc: Function = RsState(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const states: Array<State> = galaadUtils.getInitStates();
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const state: State = states.find((item: State)=> {
                return item.method === config.method;
            });
            expect(state).to.not.equal(undefined);
        });
    });
});