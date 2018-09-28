/*
二分查找，JavaScript排序算法
author：yigecong
*/

//生成一个长为100的数组
var list = [0];
for(var i=0;list.length<100;i++)(
	list.push(list[i]+Math.round(Math.random()*5));
)
dir(list);

//用于查找元素位置的函数
function binaryChop(item){
	var mid,low=0,high=list.length-1,num=1;
	console.log("###start###");
	for(;low<=high;mid =Math.round((low+high)/2,num++)){
		console.log("ChopNum--第"+num+"查找");		
		mid = Math.round((low+high)/2);
		//console.log("当前查找的是第"+mid+"位");
		if(item==list[mid]){
			console.log("result--数字"+item+"在list的第"+mid+"位");
			return;
		}else if(item>list[mid]){
			low=mid+1;
			console.log("result--数字"+item+"大于list的第"+mid+"位"+list[mid]);
		}else if(item<list[mid]){
			high=mid-1;
			console.log("result--数字"+item+"小于list的第"+mid+"位"+list[mid]);
		}	
		console.log("--------------------------------------");		
	}
	console.log("result--数字"+item+"不在数组list中");
	console.log("###over###");
}






