import 'mocha';
import { expect } from 'chai';

// Class to test:
import { HateoasContextError } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextError';
import { HateoasContextErrorCode } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextErrorCode';

// Test:
describe('HateoasContextError class test', () => {

    describe('#code', () => {
        it('"code" property should return the same value as passed to constructor', () => {
            const code: HateoasContextErrorCode = HateoasContextErrorCode.ILLEGAL_CONTEXT_OVERRIDE;
            const message: string = 'Error message';
            const error: HateoasContextError = new HateoasContextError(code, message);
            expect(error.code).to.equal(code);
        });
    });

    describe('#message', () => {
        it('"message" property should return the same value as passed to constructor', () => {
            const code: HateoasContextErrorCode = HateoasContextErrorCode.ILLEGAL_CONTEXT_OVERRIDE;
            const message: string = 'Error message';
            const error: HateoasContextError = new HateoasContextError(code, message);
            expect(error.message).to.equal(message);
        });
    });
});