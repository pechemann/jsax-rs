import 'mocha';
import { expect } from 'chai';

// Class to test:
import { StateUtil } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/StateUtil';
import { State } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/State';
import { Transition } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';
import { LinkType } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/LinkType';

// Utilities:

import * as utils from '../../../../../../../utils/test-utils/utilities/StateUtilTestUtils';

// Test:
describe('@StateUtil class test', () => {

    describe('#createTransitionRepresentation()', () => {

        it('createTransitionRepresentation() should create a transition representation with the same type as the transition type', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createTransitionRepresentation(utils.TRANSITION);
            expect(result.type).to.equal(utils.TRANSITION.type);
        });
        
        it('createTransitionRepresentation() should create a transition representation with the same resource as the transition resource', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createTransitionRepresentation(utils.TRANSITION);
            expect(result.resource).to.equal(utils.TRANSITION.resource);
        });
        
        it('createTransitionRepresentation() should create a transition representation with the same method as the transition method', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createTransitionRepresentation(utils.TRANSITION);
            expect(result.method).to.equal(utils.TRANSITION.method);
        });
        
        it('createTransitionRepresentation() should create a transition representation with no rel property', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createTransitionRepresentation(utils.TRANSITION);
            expect(result.rel).to.be.undefined;
        });
        
        it('createTransitionRepresentation() should create a transition representation with the same relation as the transition relation', () => {
            const stateUtil: StateUtil = new StateUtil();
            let transition: Transition = Object.assign({}, utils.TRANSITION);
            transition.rel = LinkType.NEXT;
            const result: any = stateUtil.createTransitionRepresentation(transition);
            expect(result.rel).to.equal(transition.rel);
        });
    });
    
    describe('#createStateRepresentation()', () => {
        
        it('createStateRepresentation() should create a state representation with the same type as the state type', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createStateRepresentation(utils.STATE);
            expect(result.type).to.equal(utils.STATE.type);
        });
        
        it('createStateRepresentation() should create a state representation with the same resource as the state resource', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createStateRepresentation(utils.STATE);
            expect(result.resource).to.equal(utils.STATE.resource);
        });
        
        it('createStateRepresentation() should create a state representation with the same method as the state method', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createStateRepresentation(utils.STATE);
            expect(result.method).to.equal(utils.STATE.method);
        });
        
        it('createStateRepresentation() should create a state representation without any transition', () => {
            const stateUtil: StateUtil = new StateUtil();
            const result: any = stateUtil.createStateRepresentation(utils.STATE);
            expect(result.transitions).to.be.undefined;
        });

        it('createStateRepresentation() should create a state representation with transition representations built from the state transitions', () => {
            const stateUtil: StateUtil = new StateUtil();
            let state: State = Object.assign({}, utils.STATE);
            state.transitions = [ utils.TRANSITION ];
            const transitionRepresentation: any = stateUtil.createTransitionRepresentation(utils.TRANSITION);
            const result: any = stateUtil.createStateRepresentation(state).transitions[0];
            expect(result.type).to.equal(transitionRepresentation.type);
            expect(result.resource).to.equal(transitionRepresentation.resource);
            expect(result.method).to.equal(transitionRepresentation.method);
            expect(result.rel).to.be.undefined;
        });
    });
});