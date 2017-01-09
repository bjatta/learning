
function addNewNameFromInput(){
  var textContent = document.querySelector('input[id="search"]').value;
  addNewName(textContent);
}

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

function searchOnline(ev){
  var searchablePattern = '';
  var cityesList = [].slice.call(document.getElementsByTagName('h5'));
  var foundPosition = -1;
  var hihglightedText = '';
  var changeablePattern = '';

  searchablePattern = ev.target.value;

  cityesList.forEach(function (el){
    el.innerHTML = el.innerHTML.replace('<span style="color:yellow">','');
    el.innerHTML = el.innerHTML.replace('</span>','');
    foundPosition = el.textContent.toLowerCase().indexOf(searchablePattern.toLowerCase())+1;
    if (foundPosition && searchablePattern) {
      changeablePattern = el.innerHTML.slice(foundPosition-1,foundPosition-1+searchablePattern.length);
      hihglightedText ='<span style="color:yellow">'+changeablePattern+'</span>'
      el.parentNode.parentNode.style='background-color:#007ba7;color:#FFF';
      el.innerHTML=el.innerHTML.replace(changeablePattern,hihglightedText);
    }
    else {
      el.parentNode.parentNode.style='color:#000';
    }
    });
  }

function mainInitial(){
  var allNames = [].slice.call(arguments);
  allNames.forEach(addNewName);
}

var myInput = document.getElementById('search');

myInput.addEventListener('keyup',searchOnline);

mainInitial('Афганистан','США','Германия','Россия','Беларусь','Канада','Варшава','Амстердам','Париж','Дамаск','ОАЭ','Казахстан','Замулко','Виктор','Иванович','Дорошевич');