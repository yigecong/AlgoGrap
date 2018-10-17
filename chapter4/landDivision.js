var x=1680,y=640;

//初版
function landDivision(x,y,num){
	//避免无解，导致占用过量内存，最多500
	num++;
	if(num>500){
		console.log("超过500，返回");
		return;
	}else{
		console.log("第"+num+"次调用");
	}
	//余数
	var xBigger = x%y;
	var yBigger = y%x;
	//基线条件，x与y呈倍数关系	
	if(xBigger==0){
		console.log("最小正方形的边为"+y);
		return y;
	}else if(yBigger==0){
		console.log("最小正方形的边为"+x);
		return x;
	}
	//计算
	if(x>y){
		var ret = landDivision(xBigger,y,num);
	}else if(x<y){
		var ret = landDivision(x,yBigger,num);
	}
	return ret
}

//优化版
function landDivision(x,y,num){
	//避免无解，导致占用过量内存，最多500
	num++;
	if(num>500){
		console.log("超过500，返回");
		return;
	}else{
		console.log("第"+num+"次调用");
	}
	//比较x与y，保证x>y
	if(x<y){
		var mid = x;
		x=y;
		y=mid;
	}
	//余数
	var remainder = x%y;
	if(remainder ==0){
		console.log("最小正方形的边为"+y);
		return y;
	}
	return	landDivision(remainder,y,num);
}
