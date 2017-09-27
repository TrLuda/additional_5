module.exports = function check(str, bracketsConfig) {
var s;
 for (let i = str.length - 1; i >= 0; i--){
	for (let j = 0; j < bracketsConfig.length; j++){
	  	s = bracketsConfig[j].join('');
	    str = str.replace(s,"");
	  }
}  
	if (str == ""){
		return true;
	}
	return false;
}
