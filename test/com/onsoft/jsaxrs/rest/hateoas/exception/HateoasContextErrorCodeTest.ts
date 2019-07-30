import 'mocha';
import { expect } from 'chai';

// Class to test:
import { HateoasContextErrorCode } from '../../../../../../../src/com/onsoft/jsaxrs/rest/hateoas/exception/HateoasContextErrorCode';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/HateoasContextErrorCodeTestUtils';

// Test:
describe('HateoasContextErrorCode enum test', ()=> {

  describe('#ILLEGAL_CONTEXT_OVERRIDE', ()=> {
    it('ILLEGAL_CONTEXT_OVERRIDE should equals "ILLEGAL_CONTEXT_OVERRIDE"', ()=> {
      expect(HateoasContextErrorCode.ILLEGAL_CONTEXT_OVERRIDE).to.equal(utils.ILLEGAL_CONTEXT_OVERRIDE);
    });
  });

  describe('#ILLEGAL_STATE_OPERATION', ()=> {
    it('ILLEGAL_STATE_OPERATION should equals "ILLEGAL_STATE_OPERATION"', ()=> {
      expect(HateoasContextErrorCode.ILLEGAL_STATE_OPERATION).to.equal(utils.ILLEGAL_STATE_OPERATION);
    });
  });

  describe('#ILLEGAL_TRANSITION_OPERATION', ()=> {
    it('ILLEGAL_TRANSITION_OPERATION should equals "ILLEGAL_TRANSITION_OPERATION"', ()=> {
      expect(HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION).to.equal(utils.ILLEGAL_TRANSITION_OPERATION);
    });
  });

  describe('#INVALID_STATE_CONFIG', ()=> {
    it('INVALID_STATE_CONFIG should equals "INVALID_STATE_CONFIG"', ()=> {
      expect(HateoasContextErrorCode.INVALID_STATE_CONFIG).to.equal(utils.INVALID_STATE_CONFIG);
    });
  });

  describe('#INVALID_TRANSITION_CONFIG', ()=> {
    it('INVALID_TRANSITION_CONFIG should equals "INVALID_TRANSITION_CONFIG"', ()=> {
      expect(HateoasContextErrorCode.INVALID_TRANSITION_CONFIG).to.equal(utils.INVALID_TRANSITION_CONFIG);
    });
  });

  describe('#INVALID_TRANSITION_MAPPING', ()=> {
    it('INVALID_TRANSITION_MAPPING should equals "INVALID_TRANSITION_MAPPING"', ()=> {
      expect(HateoasContextErrorCode.INVALID_TRANSITION_MAPPING).to.equal(utils.INVALID_TRANSITION_MAPPING);
    });
  });
});