import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { RsTransition } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/RsTransition';
import { TransitionConfig } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/TransitionConfig';
import { HateoasContextError } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';
import { Transition } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { TransitionMapping } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';

// Utilities:
import * as galaadUtils from '../../../../../../utils/test-utils/utilities/GalaadTestUtils';
import * as utils from '../../../../../../utils/test-utils/utilities/RsTransitionTestUtils';

// Test:
describe('@RsTransition decorator test', () => {

    afterEach(galaadUtils.destroy);

    describe('#Decorator factory', () => {

        it('@RsTransition should return a factory that throws an error if you use it as a class decorator', () => {
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const shouldThrowError: Function = () => {
                innerFunc(decoratee);
            };
            assert.throws(shouldThrowError, HateoasContextError, '@RsTransition can only be applied to methods and properties.');
        });

        it('@RsTransition should return a factory that throws an error if you use it as a parameter decorator', () => {
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const shouldThrowError: Function = () => {
                innerFunc(decoratee, utils.PROPERTY_REF, 3);
            };
            assert.throws(shouldThrowError, HateoasContextError, '@RsTransition can only be applied to methods and properties.');
        });

        it('@RsTransition should return a factory that treturns the transition config when you use it as a property decorator', () => {
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const result: TransitionConfig = innerFunc(decoratee, utils.PROPERTY_REF);
            expect(result).to.equal(config);
        });
        
        it('@RsTransition should return a factory that returns the same property descriptor as passed as parameter when you use it as a method decorator', () => {
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const result: PropertyDescriptor = innerFunc(decoratee, utils.METHOD_REF, descriptor);
            expect(result).to.equal(descriptor);
        });
    });

    describe('#Method decorator', () => {

        it('@RsTransition should create a transition with reference equals to the config name', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            expect(transitions.has(config.name)).to.equal(true);
        });
        
        it('@RsTransition should create a transition with reference equals to the method name', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            config.name = null;
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            expect(transitions.has(utils.METHOD_REF)).to.equal(true);
        });
        
        it('@RsTransition should create a transition mapper with transitionRef equals to the config name', () => {
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.transitionRef === config.name;
            });
            expect(mapper).to.not.equal(undefined);
        });

        it('@RsTransition should create a transition mapper with transitionRef equals to the method name', () => {
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            config.name = null;
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.transitionRef === utils.METHOD_REF;
            });
            expect(mapper).to.not.equal(undefined);
        });

        it('@RsTransition should create a transition mapper with stateRef equals to the config stateRef', () => {
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.stateRef === config.stateRef;
            });
            expect(mapper).to.not.equal(undefined);
        });

        it('@RsTransition should create a transition mapper with stateRef equals to the method name', () => {
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            config.stateRef = null;
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.stateRef === utils.METHOD_REF;
            });
            expect(mapper).to.not.equal(undefined);
        });
        
        it('@RsTransition should create a transition with type equals to the config type', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const transition: Transition = transitions.get(config.name);
            expect(transition.type).to.equal(config.type);
        });

        it('@RsTransition should create a transition with resource equals to the config resource', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const transition: Transition = transitions.get(config.name);
            expect(transition.resource).to.equal(config.resource);
        });
        
        it('@RsTransition should create a transition with method equals to the config method', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const transition: Transition = transitions.get(config.name);
            expect(transition.method).to.equal(config.method);
        });
        
        it('@RsTransition should create a transition with rel equals to the config rel', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            innerFunc(decoratee, utils.METHOD_REF, descriptor);
            const transition: Transition = transitions.get(config.name);
            expect(transition.rel).to.equal(config.rel);
        });
    });

    describe('#Property decorator', () => {

        it('@RsTransition should create a transition with reference equals to the config name', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            expect(transitions.has(config.name)).to.equal(true);
        });
        
        it('@RsTransition should create a transition with reference equals to the property name', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            config.name = null;
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            expect(transitions.has(utils.PROPERTY_REF)).to.equal(true);
        });
        
        it('@RsTransition should create a transition mapper with stateRef equals to the config stateRef', () => {
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.stateRef === config.stateRef;
            });
            expect(mapper).to.not.equal(undefined);
        });
        
        it('@RsTransition should create a transition with type equals to the config type', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            const transition: Transition = transitions.get(config.name);
            expect(transition.type).to.equal(config.type);
        });

        it('@RsTransition should create a transition with resource equals to the config resource', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            const transition: Transition = transitions.get(config.name);
            expect(transition.resource).to.equal(config.resource);
        });
        
        it('@RsTransition should create a transition with method equals to the config method', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            const transition: Transition = transitions.get(config.name);
            expect(transition.method).to.equal(config.method);
        });
        
        it('@RsTransition should create a transition with rel equals to the config rel', () => {
            const transitions: Map<string, Transition> = galaadUtils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            const innerFunc: Function = RsTransition(config);
            const decoratee: any = {};
            innerFunc(decoratee, utils.PROPERTY_REF);
            const transition: Transition = transitions.get(config.name);
            expect(transition.rel).to.equal(config.rel);
        });
    });
});