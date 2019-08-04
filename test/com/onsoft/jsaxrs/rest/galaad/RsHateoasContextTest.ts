import 'mocha';
import { expect } from 'chai';

// Class to test:
import { RsHateoasContext } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/RsHateoasContext';
import { ApplicationConfig } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/config/ApplicationConfig';
import { Galaad } from '../../../../../../src/com/onsoft/jsaxrs/rest/galaad/core/Galaad';

// Utilities:
import * as galaadUtils from '../../../../../../utils/test-utils/utilities/GalaadTestUtils';

// Test:
describe('@RsHateoasContext decorator test', () => {

    afterEach(galaadUtils.destroy);

    describe('#Decorated property', () => {

        it('should set the decorated property with the HateoasContext reference', () => {
            const config: ApplicationConfig = galaadUtils.createConfig();
            Galaad.getInstance().createContext(config);
            const innerFunc: Function = RsHateoasContext();
            const decoratee: any = { context: null };
            innerFunc(decoratee, 'context');
            expect(Galaad.getInstance().getContext()).to.equal(decoratee.context);
        });

        it('should make the decorated property immmutable', () => {
            const config: ApplicationConfig = galaadUtils.createConfig();
            Galaad.getInstance().createContext(config);
            const innerFunc: Function = RsHateoasContext();
            const decoratee: any = { context: null };
            innerFunc(decoratee, 'context');
            decoratee.context = null;
            expect(Galaad.getInstance().getContext()).to.equal(decoratee.context);
        });

        it('should set decorated property to null if Galaad context has not been initialized', () => {
            const innerFunc: Function = RsHateoasContext();
            const decoratee: any = { context: null };
            innerFunc(decoratee, 'context');
            decoratee.context = null;
            expect(decoratee.context).to.equal(null);
        });
    });
});