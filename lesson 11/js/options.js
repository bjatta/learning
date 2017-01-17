select = document.forms.f1.s1;
function stringop(_select_){
	var select1=[].slice.call(_select_.options);
	var detectstring=[];
	select1.forEach(function(op){detectstring.push(op.value*1)});
	return detectstring;
}

function retop(_select_){
	var select1=[].slice.call(_select_.options);
	var result;
	select1.forEach(function(op){detectstring.push(op.value*1)});
	return detectstring;
}

function deleteop(){
	var min=Math.min.apply(Math,stringop(select))-1;
	var op = new Option(min,min);
	for (var i = 0; i < select.length; i++) {
		select[i];
	}
	select.add(op,select.options[0]);
}
function insertop(){
	var max=Math.max.apply(Math,stringop(select))+1;
	var op = new Option(max,max);
	select.add(op);
}

function add_users() {
	var select1=[].slice.call(select.options);
	var opUser = document.querySelector('input[name="user_op"]').value;
	var intOp = new Option(opUser,opUser);
	var op = new Option(opUser,opUser);
	var opFound=false;
	select1.forEach(function(op){
		if(((op.value*1)>(intOp.value*1))&&(!opFound)){
			intOp=op;
			opFound=true;
		}
	});
if (opFound) select.add(op,intOp); else select.add(op);
}