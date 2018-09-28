//生产数组
var list = [];
for(var i=0;i<10;i++){
	list.push(Math.round(Math.random()*10))
}
//查找数组中最大的数，返回索引
function findSmallest(arry){
	var smallest = arry[0];
	var samllestIndex = 0;
	for(var i in list){
		if(arry[i] < smallest){
			smallest = arry[i];
			samllestIndex = i;
		}
	}
	return samllestIndex;
}

//选择排序js实现
/*function selectionSort(list){
	console.log("###start###");
	console.log("起始字符串:"+list);
	var copyList = list;
	var sortedArry = []
	var num =0;
	for(var m in list){
		num++;
		var index = findSmallest(copyList);
		console.log("第"+num+"次，最小值"+copyList[index]);
		sortedArry.push(list[index]);
		copyList.pop(index);
		console.log("第"+m+"次，copyList"+copyList);
	}
	console.log("从小到大排序："+sortedArry);
	console.log("###over###");
}*/
//勘误：js中pop()方法，是指删除数组最后一个元素，并返回值。与python不同
function selectionSort(list){
	console.log("###start###");
	console.log("起始字符串:"+list);
	var copyList = list;
	var sortedArry = []
	var num =0;
	for(var m in list){
		num++;
		var index = findSmallest(copyList);
		console.log("第"+num+"次");
		console.log("最小值"+copyList[index]);
		sortedArry.push(copyList[index]);
		copyList=popByIndex(index,copyList)
		console.log("当前copyList"+copyList);
		console.log("当前排序"+sortedArry);
		console.log("----------------------------------");
	}
	console.log("从小到大排序："+sortedArry);
	console.log("###over###");
}

function popByIndex(index,arry){
	var newArry = [];
	for(var i in arry){
		if(i != index){
			newArry.push(arry[i]);
		}
	}
	return newArry;
}

