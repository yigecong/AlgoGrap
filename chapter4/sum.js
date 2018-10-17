var arr = [2,4,5,7];

function sum(arr){
	//基线条件，数组为空，或为1时候
	if(arr.length==0){
		return 0;
	}else if(arr.length==1){
		return arr[0];
	}
	//pop()函数，删除数组最后一个，并返回其值
	return arr.pop()+sum(arr);
}
