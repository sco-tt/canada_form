//canadaform.js

function selectinput(a){
  if(document.getElementById('responsive_payment_typepay_typeradio'+a)){
  document.getElementById('responsive_payment_typepay_typeradio'+a).checked = true;
  return true;
}else{
  return false;
}
}
// ask org
var askorg = ['level_flexiblegift_type_Row','form-donation-level','level_flexibleduration_row'];
for(var x=0;x<askorg.length;x+=1){
  if(askorg[x]=='form-donation-level'){
    if(document.querySelectorAll('.don-standard-levels')[0]){
      document.querySelectorAll('.don-standard-levels')[0].parentNode.appendChild(document.querySelectorAll('.'+askorg[x])[0].parentNode);
    }
} else {
  if(document.querySelectorAll('.don-standard-levels')[0]){
    document.querySelectorAll('.don-standard-levels')[0].parentNode.appendChild(document.getElementById(askorg[x]));
  }
}
}
if(document.getElementById('level_flexibleduration_row')){
  document.getElementById('level_flexibleduration_row').style.visibility = "hidden";
  document.getElementById('level_flexibleduration_row').style.display = "none";
}
// checks if monthly flex duration field visibility is correct
function level_flex(a){
  var a = Number(a);
  if(document.getElementById('level_flexiblegift_type2').checked==true){
    document.getElementById('level_flexibleduration_row').style.visibility="visible";
    document.getElementById('level_flexibleduration_row').style.display="inline-block";
    return true;
  } else {
    document.getElementById('level_flexibleduration_row').style.visibility="hidden";
    document.getElementById('level_flexibleduration_row').style.display="none";
  return false;
  }
}
for(var z=0;z<document.querySelectorAll('input[name=level_flexiblegift_type]').length;z+=1){
  document.querySelectorAll('input[name=level_flexiblegift_type]')[z].addEventListener('change',function(){level_flex(z)})
}
// in case of reload with presel
if(document.getElementById('level_flexiblegift_type2')){
  level_flex();
}
// askcheck
function askcheck(){
  for(var y=0;y<document.querySelectorAll('input[name=level_flexibleexpanded]').length;y+=1){
    if(document.querySelectorAll('input[name=level_flexibleexpanded]')[y].checked == true){
      if(document.querySelectorAll('.donation-level-amount-container')[y]){
        document.querySelectorAll('.donation-level-amount-container')[y].classList.add("chosenask");
      } else {
        //console.log(y+' other true');
          if(document.querySelectorAll('input[name=level_flexibleexpanded]')[y].parentNode.parentNode.children[2]){
            if(document.querySelectorAll('input[name=level_flexibleexpanded]')[y].parentNode.parentNode.children[2].getAttribute('class')=="donation-level-user-entered"){
              document.querySelectorAll('.donation-level-label-container')[y].classList.add("chosenask");
              //document.querySelectorAll('.donation-level-amount-container')[y].classList.remove("chosenask");
            } else {
              document.querySelectorAll('.donation-level-amount-container')[y].classList.add("chosenask");
              document.querySelectorAll('.donation-level-label-container')[y].classList.remove("chosenask");
            }
        }
      }
    }else{
      document.querySelectorAll('.donation-level-label-container')[y].classList.remove("chosenask");
      if(document.querySelectorAll('.donation-level-amount-container')[y]){
        document.querySelectorAll('.donation-level-amount-container')[y].classList.remove("chosenask");
      }
    }
  }
}
if(document.querySelectorAll('.donation-level-label-input-container input')){
  for(var w=0;w<document.querySelectorAll('.donation-level-label-input-container input').length;w+=1){
    document.querySelectorAll('.donation-level-label-input-container input')[w].addEventListener('change',askcheck);
  }
}
function cssape(b,a){
  //console.log(a);
  var a = Number(a);
  //console.log(b);
  if(b==false||b=="false"){
    document.querySelectorAll('.donation-level-user-entered')[a].parentNode.children[1].children[0].classList.remove("hoverask");
  } else {
    document.querySelectorAll('.donation-level-user-entered')[a].parentNode.children[1].children[0].classList.add("hoverask");
  }
  return true;
}
// the 'other' selection couldn't be done with only css
if(document.querySelectorAll('.donation-level-user-entered').length>0){
  for(var v=0;v<document.querySelectorAll('.donation-level-user-entered').length;v+=1){
    (function(v){
      document.querySelectorAll('.donation-level-user-entered')[v].parentNode.children[1].children[0].classList.add('standardask');
      document.querySelectorAll('.donation-level-user-entered')[v].parentNode.children[1].style.cursor = "pointer";
      document.querySelectorAll('.donation-level-user-entered')[v].parentNode.children[1].children[0].style.cursor = "pointer";
      document.querySelectorAll('.donation-level-user-entered')[v].parentNode.children[1].children[0].addEventListener('mouseover',function(){cssape(true,v)});
      document.querySelectorAll('.donation-level-user-entered')[v].parentNode.children[1].children[0].addEventListener('mouseout',function(){cssape(false,v)});
    }(v));
  }
}
// closures...
function typgo(a){
  return function(){
      typcheck(a);
  }
}
// check one time vs monthly selection
function typcheck(a){
  var a = a;
  for(var u=0;u<document.querySelectorAll('.designated-giving-recurring-row').length;u+=1){
    document.querySelectorAll('.designated-giving-recurring-row label')[u].classList.remove('chosenask');
    //document.querySelectorAll('label[for=level_flexiblegift_type'+u+']')[0].classList.add('standardask');
  }
  document.querySelectorAll('label[for=level_flexiblegift_type'+a+']')[0].classList.add('chosenask');
  document.querySelectorAll('label[for=level_flexiblegift_type'+a+']')[0].classList.remove('standardask');
  // show hide asks
  if(a==1){
    for(var m=0;m<document.querySelectorAll('.monthly_only_ask').length;m+=1){
      if(document.querySelectorAll('.monthly_only_ask input[type=radio]')[m].checked==true){
        document.querySelectorAll('.once_only_ask input[type=radio]')[m].click();
      }
      document.querySelectorAll('.monthly_only_ask')[m].style.display = "none";
    }
    for(var n=0;n<document.querySelectorAll('.once_only_ask').length;n+=1){
      document.querySelectorAll('.once_only_ask')[n].style.display = "block";
    }
  } else {
    for(var m=0;m<document.querySelectorAll('.once_only_ask').length;m+=1){
      if(document.querySelectorAll('.once_only_ask input[type=radio]')[m].checked==true){
        document.querySelectorAll('.monthly_only_ask input[type=radio]')[m].click();
      }
      document.querySelectorAll('.once_only_ask')[m].style.display = "none";
    }
    for(var n=0;n<document.querySelectorAll('.monthly_only_ask').length;n+=1){
      document.querySelectorAll('.monthly_only_ask')[n].style.display = "block";
    }
  }
  document.querySelectorAll('.other_ask')[0].style.display = "block";
  //askcheck();
  return true
}
if(document.querySelectorAll('.designated-giving-recurring-row')){
  for(var u=0;u<document.querySelectorAll('.designated-giving-recurring-row').length;u+=1){
    (function(){
      var t = u + 1;
      document.getElementById('level_flexiblegift_type'+t).addEventListener('change',typgo(t),false);
    })();
  }
}
function einesCheck(){
  for(var x=0;x<document.querySelectorAll('.designated-giving-recurring-row').length;x+=1){
    var y = x + 1;
      if(document.querySelectorAll('#level_flexiblegift_type'+y)[0].checked==true){
        typcheck(y);
      }
  }
  return true;
}
function accessUpdate(){
  if(document.getElementById('skiptocontent')){
    return true;
  }else{
    document.querySelectorAll('.donation-form-content')[0].id = "maincontent";
    var skipelement = document.createElement('p');
    skipelement.id = "skiptomaincontent";
    skipelement.className = "screenreader-only";
    skipelement.innerHTML = "Welcome to Guide Dogs for the Blind. <a href='#maincontent'>Skip to main content</a>";
    var parentNodeEl = document.getElementById('gdbHeaderWrapper');
    parentNodeEl.insertBefore(skipelement, parentNodeEl.childNodes[0]);  // Insert <li> before the first child of <ul>
  }
  return true;
}

// check which ask level is selected (#eee)
// if monthly, then hide the non-monthlies

function nullCheck(){
  for(var x = 0;x<document.querySelectorAll('.donation-level-label-container').length;x+=1){
    var currentChecked = document.querySelectorAll('.donation-level-label-container')[x].innerHTML;
    if(currentChecked.indexOf('monthly giving level')>0){
      // this is monthly
      document.querySelectorAll('.donation-level-label-container')[x].style.color = "#eee";
      document.querySelectorAll('.donation-level-label-container')[x].parentNode.parentNode.parentNode.parentNode.classList.add('monthly_only_ask');
    } else {
      // not monthly
      document.querySelectorAll('.donation-level-label-container')[x].parentNode.parentNode.parentNode.parentNode.classList.add('once_only_ask');
    }
  }
  if(document.querySelectorAll('.donation-level-user-entered')[0]){
    document.querySelectorAll('.donation-level-user-entered')[0].parentNode.parentNode.parentNode.classList.remove('monthly_only_ask');
    document.querySelectorAll('.donation-level-user-entered')[0].parentNode.parentNode.parentNode.classList.remove('once_only_ask');
    document.querySelectorAll('.donation-level-user-entered')[0].parentNode.parentNode.parentNode.classList.add('other_ask');
  }
setTimeout(function(){einesCheck()},20);
}

// still to do: if one time or monthly is preselected, then the function needs to check for that at page load
askcheck();
nullCheck();
//accessUpdate();

