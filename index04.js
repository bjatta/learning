var matrix_names = [
'neo',
'pifia',
'morpheus',
'Jhon',
'just a man',
'white rabbit',
'button'
]

console.log(matrix_names.sort(function(a,b){return a.length<b.length}));
console.log(matrix_names.sort(function(){return arguments[0].length<arguments[1].length}));

var users = [
	{	name:'John 23',rank:23},
	{	name:'John 45',rank:45},
	{	name:'John 63',rank:63},
	{	name:'John 13',rank:13},
	{	name:'John 113',rank:113},
	{	name:'John 15',rank:15},
	{	name:'John 93',rank:93}
]

var TopUser = users.reduce(function(){
	console.log(arguments[0],arguments[1]);
	if (arguments[0].rank>arguments[1].rank) return arguments[0];
	return arguments[1];
});

console.log(users);
console.log(TopUser,TopUser.name);
