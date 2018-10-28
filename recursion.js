module.exports={
   recursion: function(tree)
{
  
  if(tree.value===undefined)
      return [];
  if(!tree.left&&!tree.right)
      return [[tree.value]];
  var arr=[];
  arr.push([tree.value]);
  var arr_1=module.exports.recursion(tree.left||{});
  var arr_2=module.exports.recursion(tree.right||{});
  var len=Math.max(arr_1.length,arr_2.length);
  for(var i=0;i<len;i++)
      {
        arr.push((arr_1[i]||[]).concat(arr_2[i]||[]));
      }
  return arr;
}
};
