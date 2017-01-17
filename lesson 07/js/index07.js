var now = new Date();
console.log(now);

function calc_me(){
	source = prompt(" Введите выражение: ","2 + 2");
	digit_reg=/[-?\d*\.?\d*]+/g;
	expression_list = source.match(digit_reg);
	console.log(expression_list);
	action_reg=/[^\d*]/g;
	action_sign = source.match(action_reg);
	action_sign = action_sign.join('').trim();
	console.log(action_sign);
	switch (action_sign) {
		case	'+' : result_text= (+expression_list[0]) + (+expression_list[1]);break;
		case	'-' : result_text= (+expression_list[0]) - (+expression_list[1]);break;
		case	'*' : result_text= (+expression_list[0]) * (+expression_list[1]);break;
		case	'/' : result_text= (+expression_list[0]) / (+expression_list[1]);break;
		default: result_text=''; alert(action_sign); break;
	}
alert(''+expression_list[0]+''+action_sign+''+expression_list[1]+' = '+result_text);
}

function ticktak (){
	ss = new Date().getSeconds();
	mm = new Date().getMinutes();
	hh = new Date().getHours();
	document.open();
	document.write(''+hh+':'+mm+':'+ss);
	document.close();
}

setInterval(ticktak,1000);
