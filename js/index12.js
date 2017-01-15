function twelve(ev) {
  if (ev.target.checked) $(ev.target).attr('checked','checked'); else $(ev.target).removeAttr('checked','checked');
  $('p').text(' total: ' + $('li').length + ' done: ' + $('li>input:checked').length);
  localStorage.setItem('ToDoList.BelHard.allUl',JSON.stringify(document.querySelector('ul').innerHTML));
}

function taskDo(event){
  $('<li>').text($('input:first').val()).appendTo('ul').prepend($('<input>',{'type':'checkbox'}));
  $('li>input:checkbox').trigger('change');
}

$('<button>',{text:'-'}).prependTo('body').on('click',function(){$('li>input:checked').parent().remove();});
$('<button>',{text:'+'}).prependTo('body').on('click',taskDo);
$('<input>',{
    type:'text',
    placeholder:'+ add U task here...'
  }).prependTo('body');

$('ul').on('change','li',twelve).html(JSON.parse(localStorage.getItem('ToDoList.BelHard.allUl')));
$('li>input:checkbox').trigger('change');