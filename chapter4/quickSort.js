//生成一个数组，没有重复
var list = [];
for(var i=0;list.length<20;i++)(
	list.push(Math.round(Math.random()*50))
)


function quickSort(array,num){
	//安全保障
	num++;
	if(num==500){
		console.log("超过五百次了");
		return 
	}
	//基线条件
	if(array.length<2){
		console.log("到了最后了");
		return array;
	}else{
		//递归条件
		var pivot = array[0]
		var less=[],more=[];
		//注意点：与参考值相同且，不是参考值的数，需要考虑存入的位置
		for(var i=1;i< array.length;i++){
			if(array[i]>pivot){
				more.push(array[i]);
			}else if(array[i]<=pivot){
				less.push(array[i]);
			}
		}	
		
		console.log("参照值"+pivot);
		console.log("less"+less);
		console.log("more"+more);
		var resultMix = quickSort(less,num)
		var resultMax = quickSort(more,num)
		
		resultMix.push(pivot);
		for(var m in resultMax){
			resultMix.push(resultMax[m]);
		}
		console.log("result"+resultMix);
		return resultMix
	}
}
