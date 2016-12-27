function findAllWords(str,subst){
	var wordDivide=/[^a-zа-яё+]/ig;
	return str.split(wordDivide).filter(function(text){
		return (text.indexOf(subst) != -1);
	})
}
console.log(findAllWords('Тактовая, частота! процессора:','т').join(', '));
