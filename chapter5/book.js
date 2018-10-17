var book = {};
function saveMobileHash(name,mobile){
	book[name]=mobile;
}

function getMobile(name){
	return book[name]
}


var arrayname= [];
var arrayMobile= [];
function saveMobileArray(name,mobile){
	for(var i in arrayname){
		if(arrayname[i]==name){
			return "该用户已存在";
		}
	}
	arrayname.push(name);
	arrayMobile.push(mobile);
}

function getMobileByArray(name){
	for(var i in arrayname){
		if(arrayname[i]==name){
			return arrayMobile[i];
		}
	}
}
