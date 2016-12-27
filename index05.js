function findWord(stringOriginal,subStr){
	position=stringOriginal.indexOf(subStr);
	beginOfWord=stringOriginal.lastIndexOf(' ',position)+1;
	endOfWord=stringOriginal.indexOf(' ',position);

	if (endOfWord==-1) endOfWord=stringOriginal.length;
	return stringOriginal.substring(beginOfWord,endOfWord);
}
//   012345678901234567890123456
str='Тактовая частота процессора';

console.log(findWord(str,'сто'));
console.log(findWord(str,'акт'));
console.log(findWord(str,'сор'));

stringTotwitter='Hellow @neo it`s me @mike';

var _RegExp=/@(\w+).*(\@\w+)/ig;
var replacment='<a href=http://twitter.com/$1>$2</a>';

console.log(stringTotwitter.replace(_RegExp,replacment));
_RegExp=/@(\w+)/ig;
replacment='<a href=http://twitter.com/$1>@$1</a>';
console.log(stringTotwitter.replace(_RegExp,replacment));
