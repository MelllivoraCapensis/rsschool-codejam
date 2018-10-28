module.exports={
	sumOfOther:(array)=>{
		return array.reduce((sum,element)=>{
            return sum+=element;
		})
	}
}