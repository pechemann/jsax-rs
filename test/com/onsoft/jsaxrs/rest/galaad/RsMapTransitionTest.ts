import 'mocha';
import { expect } from 'chai';

// Class to test:
import { RsMapTransition } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/RsMapTransition';
import { TransitionMapping } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';

// Utilities:
import * as galaadUtils from '../../../../../../utils/test-utils/utilities/GalaadTestUtils';
import * as utils from '../../../../../../utils/test-utils/utilities/RsMapTransitionTestUtils';


// Test:
describe('@RsMapTransition decorator test', () => {

    afterEach(galaadUtils.destroy);

    describe('#Decorator factory', () => {

        it('@RsMapTransition should return a factory that returns the same property descriptor as passed as parameter', () => {
            const innerFunc: Function = RsMapTransition(utils.TRANSITION_REF);
            const decoratee: any = {};
            const descriptor: PropertyDescriptor = {};
            const result: PropertyDescriptor = innerFunc(decoratee, utils.METHOD_REF, descriptor);
            expect(result).to.equal(descriptor);
        });
    });

    describe('#Gallad', () => {

        it('@RsMapTransition should create a transition mapper with stateRef equals to the method name', () => {
            const innerFunc: Function = RsMapTransition(utils.TRANSITION_REF);
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            innerFunc({}, utils.METHOD_REF, {});
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.stateRef === utils.METHOD_REF;
            });
            expect(mapper).to.not.equal(undefined);
        });
        
        it('@RsMapTransition should create a transition mapper with transitionRef equals to the reference passed as parameter', () => {
            const innerFunc: Function = RsMapTransition(utils.TRANSITION_REF);
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();;
            innerFunc({}, utils.METHOD_REF, {});
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return item.transitionRef === utils.TRANSITION_REF;
            });
            expect(mapper).to.not.equal(undefined);
        });
        
        it('@RsMapTransition should create a transition mapper with rel equals to undefined', () => {
            const innerFunc: Function = RsMapTransition(utils.TRANSITION_REF);
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            innerFunc({}, utils.METHOD_REF, {});
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return (item.stateRef === utils.METHOD_REF && item.transitionRef === utils.TRANSITION_REF && item.rel === undefined);
            });
            expect(mapper).to.not.equal(undefined);
        });
        
        it('@RsMapTransition should create a transition mapper with rel equals to the reference passed as parameter', () => {
            const innerFunc: Function = RsMapTransition(utils.TRANSITION_REF, utils.LINK_REL_TYPE);
            const initTransitionList: Array<TransitionMapping> = galaadUtils.getInitTransitionList();
            innerFunc({}, utils.METHOD_REF, {});
            const mapper: TransitionMapping = initTransitionList.find((item: TransitionMapping)=> {
                return (item.stateRef === utils.METHOD_REF && item.transitionRef === utils.TRANSITION_REF && item.rel === utils.LINK_REL_TYPE);
            });
            expect(mapper).to.not.equal(undefined);
        });
    });
});