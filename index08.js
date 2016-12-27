var now = new Date();
console.log(now);

function send_me(){
	var allforms = document.forms;
	var flag = true;
	for (var inp=0;inp<allforms.length;inp++) {
		var inputfield = allforms[inp].elements;
		for (var i=0;i<inputfield.length;i++) {
			if (inputfield[i].value.length<1) {
				console.log(i,'.',inputfield[i],' ',typeof(inputfield[i]));
				inputfield[i].style='border-color: red';
				flag = false;
		}else {
			inputfield[i].style='border-color: green';
		}
	}
}
}
