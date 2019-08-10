import 'mocha';
import { expect, assert } from 'chai';

// Class to test:
import { Galaad } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';
import { ApplicationConfig } from '../../../../../../..//src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';
import { HateoasContextError } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';
import { ApplicationContext } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/ApplicationContext';
import { StateConfig } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/StateConfig';
import { State } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { Transition } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { TransitionConfig } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/TransitionConfig';
import { TransitionMapping } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';

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
        
        it('should throw an error whether a context already exists for this application', () => {
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
            expect(context.getAuthority()).to.equal(config.authority);
            expect(context.getProtocol()).to.equal(config.protocol);
        });
    });

    describe('#registerStateConfig()', () => {

        it('should throw an error whether a context already exists for this application', () => {
            const galaad: Galaad = Galaad.getInstance();
            const appConfig: ApplicationConfig = utils.createConfig();
            const config: StateConfig = utils.getStateConfig();
            galaad.createContext(appConfig);
            const shouldThrowError: Function = () => {
                galaad.registerStateConfig(config);
            };
            assert.throws(shouldThrowError, HateoasContextError, 'You cannot add state config after application context initialization.');
        });
        
        it('should create a state with name equals to the config name', () => {
            const config: StateConfig = utils.getStateConfig();
            const states: Array<State> = utils.getInitStates();
            Galaad.getInstance().registerStateConfig(config);
            const state: State = states.find((item: State)=> {
                return item.name === config.name;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('should create a state with type equals to the config type', () => {
            const config: StateConfig = utils.getStateConfig();
            const states: Array<State> = utils.getInitStates();
            Galaad.getInstance().registerStateConfig(config);
            const state: State = states.find((item: State)=> {
                return item.type === config.type;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('should create a state with resource equals to the config resource', () => {
            const config: StateConfig = utils.getStateConfig();
            const states: Array<State> = utils.getInitStates();
            Galaad.getInstance().registerStateConfig(config);
            const state: State = states.find((item: State)=> {
                return item.type === config.type;
            });
            expect(state).to.not.equal(undefined);
        });
        
        it('should create a state with method equals to the config method', () => {
            const config: StateConfig = utils.getStateConfig();
            const states: Array<State> = utils.getInitStates();
            Galaad.getInstance().registerStateConfig(config);
            const state: State = states.find((item: State)=> {
                return item.method === config.method;
            });
            expect(state).to.not.equal(undefined);
        });
    });

    describe('#registerTransitionConfig()', () => {

        it('should throw an error whether a context already exists for this application', () => {
            const galaad: Galaad = Galaad.getInstance();
            const appConfig: ApplicationConfig = utils.createConfig();
            const config: TransitionConfig = utils.getTransitionConfig();
            galaad.createContext(appConfig);
            const shouldThrowError: Function = () => {
                galaad.registerTransitionConfig(config);
            };
            assert.throws(shouldThrowError, HateoasContextError, 'You cannot add transition config after application context initialization.');
        });

        it('should create a transition with reference equals to the config name', () => {
            const transitions: Map<string, Transition> = utils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            expect(transitions.has(config.name)).to.equal(true);
        });

        it('should create a transition mapper with transitionRef equals to the config name', () => {
            const initTransitionList: Array<TransitionMapping> = utils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.transitionRef === config.name;
            });
            expect(mapper).to.not.equal(undefined);
        });

        it('should create a transition mapper with stateRef equals to the config stateRef', () => {
            const initTransitionList: Array<TransitionMapping> = utils.getInitTransitionList();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.stateRef === config.stateRef;
            });
            expect(mapper).to.not.equal(undefined);
        });
        
        it('should create a transition with type equals to the config type', () => {
            const transitions: Map<string, Transition> = utils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            const transition: Transition = transitions.get(config.name);
            expect(transition.type).to.equal(config.type);
        });

        it('should create a transition with resource equals to the config resource', () => {
            const transitions: Map<string, Transition> = utils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            const transition: Transition = transitions.get(config.name);
            expect(transition.resource).to.equal(config.resource);
        });
        
        it('should create a transition with method equals to the config method', () => {
            const transitions: Map<string, Transition> = utils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            const transition: Transition = transitions.get(config.name);
            expect(transition.method).to.equal(config.method);
        });
        
        it('should create a transition with rel equals to the config rel', () => {
            const transitions: Map<string, Transition> = utils.getInitransitionMap();
            const config: TransitionConfig = utils.getTransitionConfig();
            Galaad.getInstance().registerTransitionConfig(config);
            const transition: Transition = transitions.get(config.name);
            expect(transition.rel).to.equal(config.rel);
        });
    });

    describe('#addTransitionMappper()', () => {

        it('should throw an error whether a context already exists for this application', () => {
            const galaad: Galaad = Galaad.getInstance();
            const appConfig: ApplicationConfig = utils.createConfig();
            const mapper: TransitionMapping = utils.getTransitionMapping();
            galaad.createContext(appConfig);
            const shouldThrowError: Function = () => {
                Galaad.getInstance().addTransitionMappper(mapper);
            };
            assert.throws(shouldThrowError, HateoasContextError, 'You cannot map transitions after application context initialization.');
        });

        it('should add the transition mapper to the application', () => {
            const initTransitionList: Array<TransitionMapping> = utils.getInitTransitionList();
            const mapper: TransitionMapping = utils.getTransitionMapping();
            Galaad.getInstance().addTransitionMappper(mapper);
            expect(initTransitionList.indexOf(mapper)).to.not.equal(-1);
        });
    });
});