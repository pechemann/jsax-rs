import 'mocha';
import { expect } from 'chai';

// Class to test:
import { TransitionImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/TransitionImpl';
import { Transition } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/Transition';

// Utilities:

// Test:
describe('TransitionImpl class', () => {

    it('TransitionImpl should have a type property initialized to null', () => {
        const transition: Transition = new TransitionImpl();
        expect(transition.type).to.be.null;
    });

    it('TransitionImpl should have a resource property initialized to null', () => {
        const transition: Transition = new TransitionImpl();
        expect(transition.resource).to.be.null;
    });
    
    it('TransitionImpl should have a method property initialized to null', () => {
        const transition: Transition = new TransitionImpl();
        expect(transition.method).to.be.null;
    });
    
    it('TransitionImpl should have a rel property initialized to null', () => {
        const transition: Transition = new TransitionImpl();
        expect(transition.rel).to.be.null;
    });
});