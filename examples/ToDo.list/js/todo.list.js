(function($,pluginNumber){
/* Initial value for effects of animation */
var typeOffAnimatedDelete   = 'bounceOutRight animated',// archiving
    typeOffAnimatedEffect 	= 'bounceInDown animated',  // appearance
    typeOffAnimatedChecked	= 'bounceIn animated',      // selection (press or focus)
    buttonWidthPercent      = '10%',           // size for button around input
    animationTime           = 900,
    div                     = 'div.bjattaToDoList',
    liInputs                = 'div.bjattaToDoList > ul.bjattaToDoList > li > input',
    li                      = 'div.bjattaToDoList > ul.bjattaToDoList > li';

function storeUI () {
  localStorage.setItem('ToDoList.BelHard.allUl',JSON.stringify(document.querySelector(div+'>ul.bjattaToDoList').innerHTML));
}

function summryInfo() {                            // count and make lower status string  
  $('span.infoField').text(' total: '
    + $(liInputs).length
    + ' done: ' + $(liInputs+':checked').length);
  setTimeout(storeUI,animationTime);
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
    setTimeout(summryInfo,animationTime*1.01);
}

function addTask(ev){
  var textForNewItem = $('input[name="bjattaToDoListInputTextField"]').val();
  if (textForNewItem.length)
    $('<li>',{text:textForNewItem, class:'roundedTwo bounceInDown animated'})
      .css({'white-space':'pre-wrap',
            'hyphens':'auto',
            'list-style-position':'inside',
            'white-space': 'nowrap',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis'
            })
      .appendTo(div+'>ul')
      .prepend($('<input>',{'type':'checkbox'}))
      .append($('<label>'))
      .on('click',toggleInputCheckbox);
    pulseOn(ev.target);
    setTimeout(pulseOff,animationTime,ev.target);
    setTimeout(summryInfo,animationTime*1.1);
  $('input[name="bjattaToDoListInputTextField"]').val('');// clearing main input field when new task added
}

function pulseOff (el) {$(el).removeClass(typeOffAnimatedChecked);}
function pulseOn  (el) {$(el).addClass(typeOffAnimatedChecked);}

function deleteOff() {
  var checkedLi = $(liInputs+':checked').parent();
  for (var i = checkedLi.length - 1; i >= 0; i--) {
    setTimeout(function(el){$(el).addClass(typeOffAnimatedDelete);},i*150,checkedLi[i]);
    setTimeout(function(el){$(el).remove();summryInfo();},(i-1)*160+animationTime*.9,checkedLi[i])
  }
}

if (!pluginNumber) {pluginNumber='';}

$('<div>',{ class:'bjattaToDoListMain ui-draggable ui-draggable-handle',
            name:'bjattaToDoListMainDiv',
            id:'bjattaToDoListMainDiv'})
  .appendTo('body')
  .append($('<p>',{class:'titleTop',text:'ToDo list'}));

$('<div>',{class:'bjattaToDoList'}).appendTo('div[name="bjattaToDoListMainDiv"]')
  .append($('<div>',{'name':'bjattaToDoListPlusDiv'}))
  .append($('<div>',{'name':'bjattaToDoListArchiveDiv'}))
  .append($('<div>',{'name':'bjattaToDoListInputDiv'}))
  .append($('<ul>',{'name':'bjattaToDoListUl',class:'bjattaToDoList',id:'bjattaToDoListUl'}))
  .append($('<p>',{'name':'bjattaToDoListStatusString',class:'bjattaToDoList statusString'}));

$('<span>',{'name':'bjattaToDoListInfoField',class:'infoField'})
  .appendTo('div[name="bjattaToDoListMainDiv"]');

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
  .on('mouseup',
    function(){
      localStorage.setItem('ToDoList.BelHard.LastPosition',
        JSON.stringify($('#bjattaToDoListMainDiv').attr('style')));
      summryInfo();
    })
  .attr('style',JSON.parse(localStorage.getItem('ToDoList.BelHard.LastPosition')));
$('#bjattaToDoListUl')
  .sortable()
  .on('change','li',summryInfo)
  .html(JSON.parse(localStorage.getItem('ToDoList.BelHard.allUl')));
$('#bjattaToDoListUl > li').addClass(typeOffAnimatedEffect);
summryInfo();
$(li).on('click',toggleInputCheckbox);
})(jQuery);
