var neo =
{
	age:NaN,
	canJump:false,
	wakeUp:true,
	greetings:function() {console.log('age: '+this.age+' can jump: '+this.canJump+' was waked up: '+this.wakeUp);}
}
var morpheus = {};
	morpheus.age=99;
	morpheus.canJump=true;
	morpheus.wakeUp=false;
	morpheus.greetings= function(){console.log('age: '+this.age+' can jump: '+this.canJump+' was waked up: '+this.wakeUp);}
console.log(neo);
console.log(morpheus);
neo.greetings();
morpheus.greetings();
/* - =============== - method 2 */
console.log('* method 2 *');
/* - =============== - method 2 */
var matrixman = function(age,canJump,wakeUp)
{return {age:age, canJump:canJump,wakeUp:wakeUp,greetings:function()
		{console.log('age: '+this.age+' can jump: '+this.canJump+' was waked up: '+this.wakeUp);}}
}

neo2 = matrixman(23,false,true);
morpheus2 = matrixman(48,true,false);

console.log(neo2);
console.log(morpheus2);
neo2.greetings();
morpheus2.greetings();

function average () {
	var quantity=0;
	var total=0;
	for (var i in arguments)
	{
		if (typeof(arguments[i])=='number') {
			total+=arguments[i];
			quantity++;
		}
	}
	console.log(arguments);
	return total/quantity;
}

console.log(average(1,2,3,4,5,6,7,8,9,'pupkin',14,33,'tadaaa'));
