function GoodsForText(_GoodsNumber_)
{
	if (_GoodsNumber_>100) _GoodsNumber_=_GoodsNumber_ % 100;
	if (_GoodsNumber_>20) _GoodsNumber_=_GoodsNumber_ % 10;
	if (_GoodsNumber_ == 1) return "";
	if (_GoodsNumber_ < 5 && _GoodsNumber_ != 0) return "a";
	return 'ов';
}

// for (var i=1; i < 505; i++) console.log( i + ". В корзине " + i + " товар" + GoodsForText(i));

function multi(number)
{
	switch (number) {
		case 0:
			return 1;
		default:
			return number*multi(number - 1);
	}
}

console.log(multi(5));
