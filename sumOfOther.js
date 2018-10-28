module.exports={
	sumOfOther:(array)=>{
		var s=array.reduce((sum,element)=>{
            return sum+=element;
		})
		return array.map((element)=>{
			return s-element;
		})
	}
}