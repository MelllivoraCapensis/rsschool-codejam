module.exports={
	make:function(...args){
		if(isNaN(args[args.length-1]))
      {
        var arr=args.slice(0,args.length-1);
        var func=args[args.length-1];
        var result=arr[0];
        for(var i=1;i<arr.length;i++)
           result=func(result,arr[i]);
        return result;
      }
            
      var first_args=args;
      return function(...args){
      var second_args=args;
      var args=first_args.concat(second_args);
          return module.exports.make.call(this,...args)
      }
	}
}