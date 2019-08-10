import 'mocha';
import { expect } from 'chai';

// Class to test:
import { HttpProtocol } from '../../../../../../../src/com/onsoft/jsaxrs/lang/net/http/HttpProtocol';

// Utilities:
import * as utils from '../../../../../../../utils/test-utils/utilities/HttpProtocolTestUtils';

// Test:
describe('HttpProtocol enum test', ()=> {

  describe('#HTTP', ()=> {
    it('HTTP should equals "http"', ()=> {
      expect(HttpProtocol.HTTP).to.equal(utils.HTTP);
    });
  });

  describe('#HTTPS', ()=> {
    it('HTTPS should equals "https"', ()=> {
      expect(HttpProtocol.HTTPS).to.equal(utils.HTTPS);
    });
  });
});