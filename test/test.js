var assert=require('chai').assert;
var recursion=require('../recursion');
var sumOfOther=require('../sumOfOther');
var make=require('../make');
/*describe('recursion()',function(){
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
describe('recursion()',function(){
  it('should return array of arrays with tree nodes',function(){
  var tree={"value":100};
  var result=recursion.recursion(tree);
  assert.deepEqual(result,[[100]]);
    });
});
describe('sumOfOther',function(){
  it('should return sum of other element of array',function(){
  var arr=[2,4,5,1,3,8];
  var result=sumOfOther.sumOfOther(arr);
  assert.deepEqual(result,[21,19,18,22,20,15]);
    });
});
describe('sumOfOther',function(){
  it('should return sum of other element of array',function(){
  var arr=[2,4,5,1,3,5,3,11];
  var result=sumOfOther.sumOfOther(arr);
  assert.deepEqual(result,[32,30,29,33,31,29,31,23]);
    });
});
describe('sumOfOther',function(){
  it('should return sum of other element of array',function(){
  var arr=[2,4,5,1,3,52,3];
  var result=sumOfOther.sumOfOther(arr);
  assert.deepEqual(result,[68,66,65,69,67,18,67]);
    });
});*/

describe('make()',function(){
  it('should return chain function result',function(){
  var arr=[2,4,5,1,3,52,3];
  var sum=(a,b)=>{return a+b};
  var result=make.make(4)(5)(3,5,1)(sum);
  assert.deepEqual(result,18);
    });
});
describe('make()',function(){
  it('should return chain function result',function(){
  var arr=[2,4,5,1,3,52,3];
  var differ=(a,b)=>{return a-b};
  var result=make.make(14,6)(5)(3,5,1)(differ);
  assert.deepEqual(result,-6);
    });
});
describe('make()',function(){
  it('should return chain function result',function(){
  var arr=[2,4,5,1,3,52,3];
  var prod=(a,b)=>{return a*b};
  var result=make.make(2,3)(5)(3,5,1)(prod);
  assert.deepEqual(result,450);
    });
});
describe('make()',function(){
  it('should return chain function result',function(){
  var arr=[2,4,5,1,3,52,3];
  var divide=(a,b)=>{return a/b};
  var result=make.make(4)(5)(4,0.5,1)(divide);
  assert.deepEqual(result,0.4);
    });
});