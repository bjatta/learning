(function(){
/*
Initial value for effects of animation
*/
var typeOffAnimatedDelete   = 'bounceOutRight';// archiving
var typeOffAnimatedEffect 	= 'bounceInDown';  // appearance
var typeOffAnimatedChecked	= 'bounceIn';      // selection (press or focus)
var buttonWidthPercent      = '10%';           // size for button around input
var animationTime           = 800;
var div                     = 'div.bjattaToDoList';
var liInputs                = 'div.bjattaToDoList > ul.bjattaToDoList > li > input';
var li                      = 'div.bjattaToDoList > ul.bjattaToDoList > li';

function twelve() {                            // count and make lower status string  
  $('span.infoField').text(' total: '
    + $(liInputs).length
    + ' done: ' + $(liInputs+':checked').length);
  localStorage.setItem('ToDoList.BelHard.allUl',JSON.stringify(document.querySelector(div+'>ul.bjattaToDoList').innerHTML));
}

function toggleInputCheckbox (ev) {
  if (ev)
    if (!ev.currentTarget.firstChild.checked)
      $(ev.currentTarget.firstChild).attr('checked','checked').parent().removeClass(typeOffAnimatedEffect).addClass(typeOffAnimatedChecked).addClass('checked');
    else
      $(ev.currentTarget.firstChild).removeAttr('checked','checked').parent().removeClass(typeOffAnimatedChecked).addClass(typeOffAnimatedEffect).removeClass('checked');
    pulseOn(ev.currentTarget);
    setTimeout(pulseOff,animationTime,ev.currentTarget);
    setTimeout(twelve,animationTime*1.01);
}

function span () {                             // Just add span (for compacting code only). Add span before all elements in div.
  $('<span>',{html:'&nbsp'}).prependTo(div);
}

function addTask(ev){
  var textForNewItem = $(div+' > input:text').val();
  if (textForNewItem.length)
    $('<li>',{text:textForNewItem, class:'roundedTwo bounceInDown animated'})
      .appendTo(div+'>ul')
      .prepend($('<input>',{'type':'checkbox'}))
      .append($('<label>'))
      .on('click',toggleInputCheckbox);
    pulseOn(ev.target);
    setTimeout(pulseOff,animationTime,ev.target);
    setTimeout(twelve,animationTime*1.01);
  $(div+' > input:text').val('');// clearing main input field when new task added
}

function pulseOff (ev) {  $(ev).removeClass(typeOffAnimatedChecked+' animated');}
function pulseOn  (ev) {  $(ev).addClass(typeOffAnimatedChecked+' animated');}

function deleteOff() {
  var checkedLi = $(liInputs+':checked').parent();
  for (var i = checkedLi.length - 1; i >= 0; i--) {
    setTimeout(function(el){$(el).addClass(typeOffAnimatedDelete+' animated');},i*150,checkedLi[i]);
    setTimeout(function(el){$(el).remove();twelve();},(i-1)*150+animationTime*1.05,checkedLi[i])
  }
}

$('<button>',{text:'»',width: buttonWidthPercent,padding: '2px'})
  .prependTo(div)
  .on('click',deleteOff);

span();

$('<input>',{
    type:'text',
    placeholder:' just type U task here...',
    width: '69%',
    padding: '5px'
  }).prependTo(div)
  .on('keypress',function (ev) { if (13 === ev.keyCode) addTask(ev);})
  .on('focus',pulseOn)
  .on('blur',pulseOff);

span();

$('<button>',{text:'+',width: buttonWidthPercent,padding: '2px'}).prependTo(div).on('click',addTask);

span();

$(div+'>ul.bjattaToDoList').on('change','li',twelve).html(JSON.parse(localStorage.getItem('ToDoList.BelHard.allUl')));
twelve();
$(li).on('click',toggleInputCheckbox);
})();