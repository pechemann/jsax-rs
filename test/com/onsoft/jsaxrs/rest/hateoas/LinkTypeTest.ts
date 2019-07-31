import 'mocha';
import { expect } from 'chai';

// Class to test:
import { LinkType } from '../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/LinkType';

// Utilities:
import * as utils from '../../../../../../utils/test-utils/utilities/LinkTypeTestUtils';

// Test:
describe('LinkType enum test', () => {

    describe('#ALTERNATE', () => {
        it('ALTERNATE should equals "alternate"', () => {
            expect(LinkType.ALTERNATE).to.equal(utils.ALTERNATE);
        });
    });

    describe('#AUTHOR', () => {
        it('AUTHOR should equals "author"', () => {
            expect(LinkType.AUTHOR).to.equal(utils.AUTHOR);
        });
    });

    describe('#BOOKMARK', () => {
        it('BOOKMARK should equals "bookmark"', () => {
            expect(LinkType.BOOKMARK).to.equal(utils.BOOKMARK);
        });
    });

    describe('#HELP', () => {
        it('HELP should equals "help"', () => {
            expect(LinkType.HELP).to.equal(utils.HELP);
        });
    });

    describe('#LICENSE', () => {
        it('LICENSE should equals "license"', () => {
            expect(LinkType.LICENSE).to.equal(utils.LICENSE);
        });
    });

    describe('#NEXT', () => {
        it('NEXT should equals "next"', () => {
            expect(LinkType.NEXT).to.equal(utils.NEXT);
        });
    });

    describe('#PREV', () => {
        it('PREV should equals "prev"', () => {
            expect(LinkType.PREV).to.equal(utils.PREV);
        });
    });

    describe('#SEARCH', () => {
        it('SEARCH should equals "search"', () => {
            expect(LinkType.SEARCH).to.equal(utils.SEARCH);
        });
    });

    describe('#TAG', () => {
        it('TAG should equals "tag"', () => {
            expect(LinkType.TAG).to.equal(utils.TAG);
        });
    });
});