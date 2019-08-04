import 'mocha';
import { expect } from 'chai';

// Class to test:
import { StateImpl } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/impl/StateImpl';
import { State } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/State';

// Utilities:

// Test:
describe('StateImpl class', () => {

    it('StateImpl should have a name property initialized to null', () => {
        const state: State = new StateImpl();
        expect(state.name).to.be.null;
    });

    it('StateImpl should have a type property initialized to null', () => {
        const state: State = new StateImpl();
        expect(state.type).to.be.null;
    });

    it('StateImpl should have a resource property initialized to null', () => {
        const state: State = new StateImpl();
        expect(state.resource).to.be.null;
    });
    
    it('StateImpl should have a method property initialized to null', () => {
        const state: State = new StateImpl();
        expect(state.method).to.be.null;
    });
    
    it('StateImpl should have a transitions property initialized to null', () => {
        const state: State = new StateImpl();
        expect(state.transitions).to.be.null;
    });
});