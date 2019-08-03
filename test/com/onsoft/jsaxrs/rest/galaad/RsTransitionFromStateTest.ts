import 'mocha';
import { expect } from 'chai';

// Class to test:
import { RsTransitionFromState } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/RsTransitionFromState';
import { TransitionMapping } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/TransitionMapping';

// Utilities:
import * as galaadUtils from '../../../../../../utils/test-utils/utilities/GalaadTestUtils';
import * as utils from '../../../../../../utils/test-utils/utilities/RsTransitionFromStateTestUtils';

// Test:
describe('@RsTransitionFromState decorator test', () => {

    afterEach(galaadUtils.destroy);

    describe('#Decorated property', () => {

        it('@RsTransitionFromState should set the decorated property with a TransitionMapping reference', () => {
            const innerFunc: Function = RsTransitionFromState(utils.STATE_REF);
            const decoratee: any = { declaration: null };
            innerFunc(decoratee, utils.PROPERTY_REF);
            const result: TransitionMapping = decoratee.declaration;
            expect(result.stateRef).to.exist;
            expect(result.transitionRef).to.exist;
            expect(result.rel).to.be.undefined;
        });

        it('@RsTransitionFromState should make the decorated property immmutable', () => {
            const innerFunc: Function = RsTransitionFromState(utils.STATE_REF);
            const decoratee: any = { declaration: null };
            innerFunc(decoratee, utils.PROPERTY_REF);
            decoratee.declaration = null;
            expect(decoratee.declaration).to.not.be.null;
        });
    });

    describe('#Galaad', () => {
        
        it('@RsTransitionFromState should create a TransitionMapping reference with stateRef equals to the stateRef parameter', () => {
            const mappingList: Array<TransitionMapping> = galaadUtils.getCreateTransitionList();
            const innerFunc: Function = RsTransitionFromState(utils.STATE_REF);
            const decoratee: any = { declaration: null };
            innerFunc(decoratee, utils.PROPERTY_REF);
            const result: TransitionMapping = mappingList.find((item: TransitionMapping)=> {
                return item.stateRef === utils.STATE_REF;
            });
            expect(result).to.not.equal(undefined);
        });

        it('@RsTransitionFromState should create a TransitionMapping reference with transitionRef equals to the property name', () => {
            const mappingList: Array<TransitionMapping> = galaadUtils.getCreateTransitionList();
            const innerFunc: Function = RsTransitionFromState(utils.STATE_REF);
            const decoratee: any = { declaration: null };
            innerFunc(decoratee, utils.PROPERTY_REF);
            const result: TransitionMapping = mappingList.find((item: TransitionMapping)=> {
                return item.transitionRef === utils.PROPERTY_REF;
            });
            expect(result).to.not.equal(undefined);
        });
        
        it('@RsTransitionFromState should create a TransitionMapping reference with rel to be undefined', () => {
            const mappingList: Array<TransitionMapping> = galaadUtils.getCreateTransitionList();
            const innerFunc: Function = RsTransitionFromState(utils.STATE_REF);
            const decoratee: any = { declaration: null };
            innerFunc(decoratee, utils.PROPERTY_REF);
            const result: TransitionMapping = mappingList.find((item: TransitionMapping)=> {
                return item.transitionRef === utils.PROPERTY_REF && item.rel === undefined;
            });
            expect(result).to.not.equal(undefined);
        });
        
        it('@RsTransitionFromState should create a TransitionMapping reference with rel equals to the rel optional parameter', () => {
            const mappingList: Array<TransitionMapping> = galaadUtils.getCreateTransitionList();
            const innerFunc: Function = RsTransitionFromState(utils.STATE_REF, utils.LINK_REL_TYPE);
            const decoratee: any = { declaration: null };
            innerFunc(decoratee, utils.PROPERTY_REF);
            const result: TransitionMapping = mappingList.find((item: TransitionMapping)=> {
                return item.rel === utils.LINK_REL_TYPE;
            });
            expect(result).to.not.equal(undefined);
        });
    });
});