var typeOffAnimatedEffect 	= 'bounceInDown';
var typeOffAnimatedChecked	= 'pulse';

function twelve(ev) {
  if (ev) if (ev.target.checked) $(ev.target).attr('checked','checked').parent().removeClass(typeOffAnimatedEffect).addClass(typeOffAnimatedChecked);
  else $(ev.target).removeAttr('checked','checked');
  $('span.infoField').text(' total: ' + $('li').length + ' done: ' + $('li>input:checked').length);
  localStorage.setItem('ToDoList.BelHard.allUl',JSON.stringify(document.querySelector('ul').innerHTML));
}

function taskDo(event){
  $('<li>',{text:$('input:first').val(),class:'bounceInDown animated'}).appendTo('div.bjattaToDoList>ul').prepend($('<input>',{'type':'checkbox'}));
  twelve();
}

$('<button>',{text:'-',width: '9%',padding: '2px'}).prependTo('div.bjattaToDoList').on('click',function(){$('li>input:checked').parent().remove();twelve();});
$('<button>',{text:'+',width: '9%',padding: '2px'}).prependTo('div.bjattaToDoList').on('click',taskDo);
$('<input>',{
    type:'text',
    placeholder:' just type U task here...',
    width: '80%',
    padding: '5px'
  }).prependTo('div.bjattaToDoList').on('keypress',function (ev){ if (13 === ev.keyCode) taskDo(ev);});
$('ul').on('change','li',twelve).html(JSON.parse(localStorage.getItem('ToDoList.BelHard.allUl')));twelve();