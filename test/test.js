var assert=require('chai').assert;
var recursion=require('../recursion');

describe('recursion()',function(){
	it('should return array of arrays with tree nodes',function(){
	var tree={"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},
"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
	var result=recursion.recursion(tree);
	assert.deepEqual(result,[[100],[90,120],[70,99,110,130]]);
    });
});
describe('recursion()',function(){
  it('should return array of arrays with tree nodes',function(){
  var tree={"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99,"left":{"value":434}}},
"right":{"value":120,"left":{"value":110},"right":{"value":130,"left":{"value":234,"left":{"value":55}}}}};
  var result=recursion.recursion(tree);
  assert.deepEqual(result,[[100],[90,120],[70,99,110,130],[434,234],[55]]);
    });
});
describe('recursion()',function(){
  it('should return array of arrays with tree nodes',function(){
  var tree={"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99,"left":{"value":434}}},
"right":{"value":120,"left":{"value":110},"right":{"value":130,"left":{"value":234}}}};
  var result=recursion.recursion(tree);
  assert.deepEqual(result,[[100],[90,120],[70,99,110,130],[434,234]]);
    });
});
