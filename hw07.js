var My_Number;
var bigger=[];
var less=[];

function sortNumber(a,b) {
    return a - b;
}

function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();

function guess_wat(){
var user_number=document.f1.my_number.value*1;
  if (user_number> My_Number) {
    add_div(' Ваше число '+user_number+' больше!');
    bigger.push(user_number);
    bigger.sort(sortNumber);
  }
  if (user_number< My_Number) {
    add_div(' Ваше число '+user_number+' меньше!');
    less.push(user_number);
    less.sort(sortNumber);
  }

  var counterBorder=document.querySelector('#counterBorder');
  counterBorder.innerHTML=less.join(', ')+'...'+bigger.join(', ');

  if (user_number==My_Number) {
    add_div(' Угадали ! '+user_number,1);
    My_Number=getRandomArbitary(0,99);
    user_number=My_Number;
    counter = makeCounter();
    bigger=[];less=[];
  }
}

function add_div(src='',winner=0){
    var div = document.querySelector("div");
    style='';
    if (winner) style=' style="color:red;font:bold"';
    if (src!='') div.innerHTML+='<p'+style+'>'+counter()+'. '+src+'</p>';
    else {div.innerHTML='';counterBorder.innerHTML='';}
}

function getRandomArbitary(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

if (!My_Number) My_Number=getRandomArbitary(0,99);