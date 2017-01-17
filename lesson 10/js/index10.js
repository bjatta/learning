var now = new Date();
console.log(now);

function send_me(){
	var allforms = document.forms;
	var flag = true;
	for (var inp=0;inp<allforms.length-1;inp++) {
		var inputfield = allforms[inp].elements;
		for (var i=0;i<inputfield.length;i++) {
			if (inputfield[i].value.length<1) {
				inputfield[i].style='border-color: red';
				flag = false;
		}else {
			inputfield[i].style='border-color: green';
		}
	}
}
console.log(flag);
return flag;
}
