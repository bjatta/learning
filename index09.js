function send_me(){
	var p = [].slice.call(document.getElementsByClassName('forSwipe'));
	p.forEach(function(smallNode){
		if (smallNode.nodeType==1){
			if (smallNode.align=='right') smallNode.align='left';
			else smallNode.align='right';
	}
});
}

function multiple(){
	//document.body.style.padding='none';
	//document.body.style.border='none';
	row=document.getElementById('row').value*1;
	lines=document.getElementById('lines').value*1;
	table=document.getElementById('multiple');
	table.innerHTML='';
	var td_width=''+((row*lines).toString().length+2)+'ex';
	//console.log(td_width+' '+(row*lines).toString().length+' '+(row*lines));
	for (var i = 0; i <= row; i++) {
		var tr = document.createElement('tr');
		if (i==0) tr.style.background='#369';
		table.appendChild(tr);
		for (var j = 0; j <= lines; j++) {
			var td = document.createElement('td');
			var cell=''+j*i;
			if (i==0) cell=''+j;
			if (j==0) {cell=''+i;td.style.background='#369';}
			if (i==j) td.style.background='#369';
			if (i==0&&j==0) cell='\u00A0'+'*';
			var text = document.createTextNode(cell+'\u00A0');
			td.appendChild(text);
			td.setAttribute('align','right');
			tr.appendChild(td);
			td.style.width=td_width;//console.log(td_width);
		}
	}
}
