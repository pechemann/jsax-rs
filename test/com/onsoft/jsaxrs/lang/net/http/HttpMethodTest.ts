import 'mocha';
import { expect } from 'chai';

// Class to test:
import { HttpMethod } from '../../../../../../../src/com/onsoft/jsaxrs/lang/net/http/HttpMethod';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/HttpMethodTestUtils';

// Test:
describe('HttpMethod enum test', ()=> {

  describe('#GET', ()=> {
    it('GET should equals "GET"', ()=> {
      expect(HttpMethod.GET).to.equal(utils.GET);
    });
  });

  describe('#POST', ()=> {
    it('POST should equals "POST"', ()=> {
      expect(HttpMethod.POST).to.equal(utils.POST);
    });
  });

  describe('#PUT', ()=> {
    it('PUT should equals "PUT"', ()=> {
      expect(HttpMethod.PUT).to.equal(utils.PUT);
    });
  });

  describe('#DELETE', ()=> {
    it('DELETE should equals "DELETE"', ()=> {
      expect(HttpMethod.DELETE).to.equal(utils.DELETE);
    });
  });

  describe('#HEAD', ()=> {
    it('HEAD should equals "HEAD"', ()=> {
      expect(HttpMethod.HEAD).to.equal(utils.HEAD);
    });
  });

  describe('#OPTIONS', ()=> {
    it('OPTIONS should equals "OPTIONS"', ()=> {
      expect(HttpMethod.OPTIONS).to.equal(utils.OPTIONS);
    });
  });

  describe('#TRACE', ()=> {
    it('TRACE should equals "TRACE"', ()=> {
      expect(HttpMethod.TRACE).to.equal(utils.TRACE);
    });
  });

  describe('#CONNECT', ()=> {
    it('CONNECT should equals "CONNECT"', ()=> {
      expect(HttpMethod.CONNECT).to.equal(utils.CONNECT);
    });
  });
});