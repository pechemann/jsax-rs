import 'mocha';
import { expect } from 'chai';

// Class to test:
import { ResourcePathUtil } from '../../../../../../../src/com/onsoft/jsaxrs/rest/galaad/util/ResourcePathUtil';

// Utilities:

// Test:
describe('@ResourcePathUtil class test', () => {

    describe('#setSegmentParams()', () => {

        it('setSegmentParams() should not change the resource path whether no parameters are set', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api/:id/name?';
            const result: string = pathUtil.setSegmentParams(path);
            expect(result).to.equal(result);
        });

        it('setSegmentParams() should replace all segment values by parameter values', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api/:id/groups/:groupId';
            const params: any = { id: 'idtest', groupId: 'gidTest' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api/idtest/groups/gidTest');
        });
        
        it('setSegmentParams() should replace segment values by parameter values only if they exist', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api/:id/groups/:groupId';
            const params: any = { groupId: 'gidTest' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api/:id/groups/gidTest');
        });
        
        it('setSegmentParams() should replace only the first segment value by the same parameter if there are identical segments', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api/:id/groups/:id';
            const params: any = { id: 'idTest' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api/idTest/groups/:id');
        });
    });

    describe('#queryParams', () => {
        
        it('setSegmentParams() should final mark character whether parameters are set', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api?';
            const result: string = pathUtil.setSegmentParams(path, {});
            expect(result).to.equal('path/to/api');
        });

        it('setSegmentParams() should replace all query values by parameter values', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api?:param1&:param2';
            const params: any = { param1: 'param1Test', param2: 'param2Test' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api?param1=param1Test&param2=param2Test');
        });
        
        it('setSegmentParams() should replace query values by parameter values only if they exist', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api?:param1&:param2';
            const params: any = { param2: 'param2Test' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api?:param1&param2=param2Test');
        });
        
        it('setSegmentParams() should replace only the first query value by the same parameter if there are identical query parameters', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api?:param1&:param1';
            const params: any = { param1: 'param1Test' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api?param1=param1Test&:param1');
        });
        
        it('setSegmentParams() should roume query params whether parameter values are null or empty', () => {
            const pathUtil: ResourcePathUtil = new ResourcePathUtil();
            const path: string = 'path/to/api?:param1&:param2';
            const params: any = { param1: null, param2: '' };
            const result: string = pathUtil.setSegmentParams(path, params);
            expect(result).to.equal('path/to/api');
        });
        
    });
});