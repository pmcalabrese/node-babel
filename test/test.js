import assert from 'assert';
import { square_area } from '../src/lib/my_functions';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('my_functions', function() {
  describe('#square_area(x)', function() {
    it('should return 9 when x is 3', function() {
      assert.equal(square_area(3), 9);
    });


    it('should return 0 when x is 0', function() {
        assert.equal(square_area(0), 0);
      });
  });
});