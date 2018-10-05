//用于返回阶乘状态
var str="";
//递归阶乘
function factorial(x){
	if(x==1){
		str = str+"*"+1;
		console.log(str);
		return 1;
	}else{
		if(str==""){
			str = str+x;
		}else{
			str = str+"*"+x;
		}
		console.log(str);
		return x*factorial(x-1)
	}
}
