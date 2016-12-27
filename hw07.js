var myNumber;
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

var counter = new makeCounter();

function guessNumber(){
var userNumber=document.f1.myNumber.value*1;
  if (userNumber> myNumber) {
    addStepToLog(' Ваше число '+userNumber+' больше!');
    bigger.push(userNumber);
    bigger.sort(sortNumber);
  }
  if (userNumber< myNumber) {
    addStepToLog(' Ваше число '+userNumber+' меньше!');
    less.push(userNumber);
    less.sort(sortNumber);
  }

  var counterBorder=document.querySelector('#counterBorder');
  counterBorder.innerHTML=less.join(', ')+'...'+bigger.join(', ');

  if (userNumber==myNumber) {
    addStepToLog(' Угадали ! '+userNumber,1);
    myNumber=getRandomArbitary(0,99);
    counter = makeCounter();
    bigger=[];less=[];
  }
}

function addStepToLog(src='',winner=0){
    var div = document.querySelector("div");
    style='';
    if (winner) style=' style="color:red;font:bold"';
    if (src!='') div.innerHTML+='<p'+style+'>'+counter()+'. '+src+'</p>';
    else {
      div.innerHTML='';
      counterBorder.innerHTML='';
    }
}

function getRandomArbitary(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

if (!myNumber) myNumber=getRandomArbitary(0,99);
