var someString = "'asdf$lskd1234$asdo$$$'";

var delim = function (string, x) {
	var ct = [];
	var temp = '';
	for (i in string) {
		if (string[i] == x) {
          if (temp.length > 1){
            ct.push(temp);
            temp = '';
          }
		}
      else {temp += string[i];}
	}
  return ct
};
