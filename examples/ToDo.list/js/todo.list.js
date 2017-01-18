(function(){
/* Initial value for effects of animation */
var typeOffAnimatedDelete   = 'bounceOutRight animated';// archiving
var typeOffAnimatedEffect 	= 'bounceInDown animated';  // appearance
var typeOffAnimatedChecked	= 'bounceIn animated';      // selection (press or focus)
var buttonWidthPercent      = '10%';           // size for button around input
var animationTime           = 900;
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
      $(ev.currentTarget.firstChild)
        .attr('checked','checked')
        .parent()
        .removeClass(typeOffAnimatedEffect)
        .addClass(typeOffAnimatedChecked)
        .addClass('checked');
    else
      $(ev.currentTarget.firstChild)
    .removeAttr('checked','checked')
    .parent()
    .removeClass(typeOffAnimatedChecked)
    .addClass(typeOffAnimatedEffect)
    .removeClass('checked');

    pulseOn(ev.currentTarget);
    setTimeout(pulseOff,animationTime,ev.currentTarget);
    setTimeout(twelve,animationTime*1.01);
}

function addTask(ev){
  var textForNewItem = $('input[name="bjattaToDoListInputTextField"]').val();
  if (textForNewItem.length)
    $('<li>',{text:textForNewItem, class:'roundedTwo bounceInDown animated'})
      .appendTo(div+'>ul')
      .prepend($('<input>',{'type':'checkbox'}))
      .append($('<label>'))
      .on('click',toggleInputCheckbox);
    pulseOn(ev.target);
    setTimeout(pulseOff,animationTime,ev.target);
    setTimeout(twelve,animationTime*1.01);
  $('input[name="bjattaToDoListInputTextField"]').val('');// clearing main input field when new task added
}

function pulseOff (el) {$(el).removeClass(typeOffAnimatedChecked);}
function pulseOn  (el) {$(el).addClass(typeOffAnimatedChecked);}

function deleteOff() {
  var checkedLi = $(liInputs+':checked').parent();
  for (var i = checkedLi.length - 1; i >= 0; i--) {
    setTimeout(function(el){$(el).addClass(typeOffAnimatedDelete);},i*150,checkedLi[i]);
    setTimeout(function(el){$(el).remove();twelve();},(i-1)*150+animationTime*1.05,checkedLi[i])
  }
}

$('<div>',{class:'bjattaToDoListMain',name:'bjattaToDoListMainDiv',id:'bjattaToDoListMainDiv'}).appendTo('body')
  .append($('<p>',{class:'titleTop',text:'ToDo list'}));

$('<div>',{class:'bjattaToDoList'}).appendTo('div[name="bjattaToDoListMainDiv"]')
  .append($('<div>',{'name':'bjattaToDoListPlusDiv'}))
  .append($('<div>',{'name':'bjattaToDoListArchiveDiv'}))
  .append($('<div>',{'name':'bjattaToDoListInputDiv'}))
  .append($('<ul>',{'name':'bjattaToDoListUl',class:'bjattaToDoList',id:'bjattaToDoListUl'}))
  .append($('<p>',{'name':'bjattaToDoListStatusString',class:'bjattaToDoList statusString'}));

  ($('<span>',{'name':'bjattaToDoListInfoField',class:'infoField'})).appendTo('div[name="bjattaToDoListMainDiv"]');

$('<button>',{
  name:'bjattaToDoListArchiveButton',
  text:'»'})
  .prependTo('div[name="bjattaToDoListArchiveDiv"]')
  .on('click',deleteOff)
  .on('focus',function(ev){pulseOn(ev.target);})
  .on('blur',function(ev){pulseOff(ev.target);});

$('<input>',{
    name:'bjattaToDoListInputTextField',
    type:'text',
    placeholder:' just type U task here...'
  }).prependTo('div[name="bjattaToDoListInputDiv"]')
  .on('keypress',function (ev) { if (13 === ev.keyCode) addTask(ev);})
  .on('focus',function(ev){pulseOn(ev.target);})
  .on('blur',function(ev){pulseOff(ev.target);});

$('<button>',{
  name:'bjattaToDoListPlusButton',
  text:'+'
}).prependTo('div[name="bjattaToDoListPlusDiv"]')
  .on('click',addTask)
  .on('focus',function(ev){pulseOn(ev.target);})
  .on('blur',function(ev){pulseOff(ev.target);});

$('#bjattaToDoListMainDiv')
  .draggable()
  .on('mouseout',
    function(){
      localStorage.setItem('ToDoList.BelHard.LastPosition',
        JSON.stringify($('#bjattaToDoListMainDiv').attr('style')));
    })
  .attr('style',JSON.parse(localStorage.getItem('ToDoList.BelHard.LastPosition')));
$('#bjattaToDoListUl')
  .sortable()
  .on('change','li',twelve)
  .html(JSON.parse(localStorage.getItem('ToDoList.BelHard.allUl')));
$('#bjattaToDoListUl > li').addClass(typeOffAnimatedEffect);
twelve();
$(li).on('click',toggleInputCheckbox);
})();
