function addNewNameFromInput(){
  var textContent = document.querySelector('input[id="search"]').value;
  addNewName(textContent);
}

function searchOnline(ev){
  var searchablePattern = '';
  var cityesList = [];
  var foundPosition = -1;
  var hihglightedText = '';
  var changeablePattern = '';
  var foundTimes = new makeCounter();
  var textForTooltip = '';

    searchablePattern = ev.target.value;
    if (ev.keyCode === 13) addNewNameFromInput();
    cityesList = [].slice.call(document.getElementsByTagName('h5'));
    cityesList.forEach(function (el){
//      el.innerHTML = el.innerHTML.replace('<span style="color:yellow">','');            // fixed for IE <11
//      el.innerHTML = el.innerHTML.replace('</span>','');
      el.innerHTML = el.innerHTML.split('<span style="color: yellow;">').join('');
      el.innerHTML = el.innerHTML.split('</span>').join('');
      foundPosition = el.textContent.toLowerCase().indexOf(searchablePattern.toLowerCase())+1;
      if (foundPosition && searchablePattern) {
        changeablePattern = el.innerHTML.slice(foundPosition-1,foundPosition-1+searchablePattern.length);
        hihglightedText ='<span style="color: yellow;">'+changeablePattern+'</span>'
//        el.parentNode.parentNode.style='background-color:#007ba7;color:#FFF';            // fixed for MS EDGE
        el.parentNode.parentNode.className='btn btn-default active';
//        el.innerHTML=el.innerHTML.replace(changeablePattern,hihglightedText);            // fixed for IE <11
          el.innerHTML=el.innerHTML.split(changeablePattern).join(hihglightedText);
        foundTimes();
      }
      else {
//       el.parentNode.parentNode.style='color:#000';       // fixed for MS EDGE
        el.parentNode.parentNode.className='btn btn-default';
      }
    });
    stringWithSearch = document.querySelector('div.tooltip');
    if (searchablePattern) {
      stringWithSearch.className = 'tooltip active';
      textForTooltip = 'найдено: '+consilienceWord(foundTimes())+'...';
      stringWithSearch.innerHTML = textForTooltip+'<div class="arrow"></div>';
      stringWithSearch.style.width = '"'+(textForTooltip.length-2)+'ex"';
    } else {stringWithSearch.className='tooltip';};
  
  }

function mainInitial(){
  var allNames = [].slice.call(arguments);
  allNames.forEach(addNewName);
}

var myInput = document.getElementById('search');

myInput.addEventListener('keyup',searchOnline);

mainInitial('Афганистан','США','Германия','Россия','Беларусь','Канада','Варшава','Амстердам','Париж','Дамаск','ОАЭ','Казахстан','Замулко','Виктор','Иванович','Дамаск','Преподаватель','Дорошевич','Юрий','Михайлович');

function addNewName(textContent){
  var mainDiv = document.querySelector('div.searchable-container');
  var newDiv = {};
  
    newDiv = document.createElement('div');
    newDiv.setAttribute('class','items col-xs-5 col-sm-5 col-md-3 col-lg-3');
    mainDiv.appendChild(newDiv);
    mainDiv = newDiv;
    newDiv = document.createElement('div');
    newDiv.setAttribute('class','info-block block-info clearfix');
    mainDiv.appendChild(newDiv);
    mainDiv = newDiv;
    newDiv = document.createElement('div');
    newDiv.setAttribute('class','square-box pull-left');
    mainDiv.appendChild(newDiv);
    var workDiv = mainDiv;
    var newSpan = document.createElement('span');
    newSpan.className='glyphicon glyphicon-tags glyphicon-lg';
    newDiv.appendChild(newSpan);
    mainDiv = workDiv;
    newDiv = document.createElement('div');
    newDiv.setAttribute('data-toggle','buttons');
    newDiv.setAttribute('class','btn-group bizmoduleselect');
    mainDiv.appendChild(newDiv);
    mainDiv = newDiv;
    newDiv = document.createElement('label');
    newDiv.setAttribute('class','btn btn-default');
    mainDiv.appendChild(newDiv);
    mainDiv = newDiv;
    newDiv = document.createElement('div');
    newDiv.setAttribute('class','bizcontent');
    mainDiv.appendChild(newDiv);
    mainDiv = newDiv;
    newDiv = document.createElement('input');
    newDiv.setAttribute('type','checkbox');
    newDiv.setAttribute('name','var_id[]');
    newDiv.setAttribute('autocomplete','off');
    newDiv.setAttribute('value','');
    mainDiv.appendChild(newDiv);
    newSpan = document.createElement('span');
    newSpan.className ='glyphicon glyphicon-ok glyphicon-lg';
    mainDiv.appendChild(newSpan);
    newDiv = document.createElement('h5');
    mainDiv.appendChild(newDiv);
    newDiv.textContent = textContent;
}

function consilienceWord (number) {
  var numberForWord = 0;

  numberForWord = number;
  if (numberForWord > 100) numberForWord = number % 100;
  if (numberForWord > 20) numberForWord = number % 10;
  switch (numberForWord) {
    case 1: return ''+number+' совпадение';
    case 2:
    case 3:
    case 4: return ''+number+' совпадения';
    default: return ''+number+' совпадений';
  }

}

function makeCounter(){
  var counter=0;
  return function () {return counter++};
}