(function(){
/*

Initial value for effects of animation

*/
var typeOffAnimatedEffect 	= 'bounceInDown';  // appearance
var typeOffAnimatedChecked	= 'bounceIn';      // selection (press or focus)
var buttonWidthPercent      = '10%';           // size for button around input

function twelve(ev) {                          // count and make lower status string
  if (ev)
    if (ev.target.checked)
      $(ev.target).attr('checked','checked').parent().removeClass(typeOffAnimatedEffect).addClass(typeOffAnimatedChecked).addClass('checked');
    else
      $(ev.target).removeAttr('checked','checked').parent().removeClass(typeOffAnimatedChecked).addClass(typeOffAnimatedEffect).removeClass('checked');
  $('span.infoField').text(' total: ' + $('li').length + ' done: ' + $('li>input:checked').length);
  localStorage.setItem('ToDoList.BelHard.allUl',JSON.stringify(document.querySelector('ul').innerHTML));
}

function span () {                             // Just add span (for compacting code only). Add span before all elements in div.
  $('<span>',{html:'&nbsp'}).prependTo('div.bjattaToDoList');
}

function taskDo(ev){
  var textForNewItem = $('div.bjattaToDoList > input:text').val();
  if (textForNewItem.length) $('<li>',{text:textForNewItem,class:'bounceInDown animated'}).appendTo('div.bjattaToDoList>ul').prepend($('<input>',{'type':'checkbox'}));
    pulseOn($(ev.target));
    setTimeout(pulseOff,1000,$(ev.target));
  twelve();
  $('div.bjattaToDoList > input:text').val('');// clearing main input field when new task added
}

function pulseOff (ev) {  $(ev.target).removeClass(typeOffAnimatedChecked+' animated');}

function pulseOn  (ev) {  $(ev.target).addClass   (typeOffAnimatedChecked+' animated');}

$('<button>',{text:'»',width: buttonWidthPercent,padding: '2px'})
  .prependTo('div.bjattaToDoList')
  .on('click',function(ev){
    $('li>input:checked').parent().remove();
    pulseOn(ev);
    setTimeout(pulseOff,1000,ev);
    twelve();
  });

span();

$('<input>',{
    type:'text',
    placeholder:' just type U task here...',
    width: '70%',
    padding: '5px'
  }).prependTo('div.bjattaToDoList')
  .on('keypress',function (ev) { if (13 === ev.keyCode) taskDo(ev);})
  .on('focus',pulseOn)
  .on('blur',pulseOff);

span();

$('<button>',{text:'+',width: buttonWidthPercent,padding: '2px'}).prependTo('div.bjattaToDoList').on('click',taskDo);

span();

$('ul').on('change','li',twelve).html(JSON.parse(localStorage.getItem('ToDoList.BelHard.allUl')));twelve();
})();