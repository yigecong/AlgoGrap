//创建所有对象，并初始化
var mike={name:"mike"},jack={name:"jack"},tong={name:"tong"},lily={name:"lily"},tom={name:"tom"},pig={name:"pig"},cat={name:"cat"},dog={name:"dog"},kit={name:"kit"},snack={name:"snack"};
var person = [mike,jack,tong,lily,tom,pig,cat,dog,kit,snack]
for(var i in person){
	person[i].isSeller=0;
	person[i].isSelect=0;
}
//dog是销售员
dog.isSeller=1;
//添加对象之间的关系，单向有向图
var relation=[];
relation["I"]={mike,jack,tong,lily}
relation["mike"]={jack,tom}
relation["jack"]={pig,kit}
relation["tong"]={cat,dog}
relation["lily"]={snack}



function IsSeller(){
	var search_queue = [];
	
	//var search_queue = relation["I"];这样不行哦
	for(var a in relation["I"]){
		search_queue.push(relation["I"][a]);
	}
	console.log(search_queue);	
	var num=0;
	for(var i=0;i< search_queue.length;i++){
		num++;
		console.log(num)
		if(num>500){
			console.log("执行太多了");
			return;
		}
		if(search_queue[i].isSelect==1){
			continue;
		}
		if(search_queue[i].isSeller==1){
			console.log("我是销售员，我是"+search_queue[i].name)
			return;
		}else{
			search_queue[i].isSelect==1
			for(var m in relation[search_queue[i].name]){
				search_queue.push(relation[search_queue[i].name][m])
			}
			console.log(search_queue);
		}
	}
	console.log("我没有朋友是做销售的")
	return;
}
