function check(){
  var std = document.getElementById("nostudent").value;
  console.log(std);
  var table = document.getElementById("table1");
  for(var i = 1; i <= std; i++) {
  var newrow = table.insertRow(-1);

 cell5 = newrow.insertCell(0);

var checkbox = document.createElement('input');
checkbox.setAttribute('value', 'present');
checkbox.type = 'checkbox';
var label = document.createElement('label')
    label.htmlFor = 'present';
    label.appendChild(document.createTextNode('present'));


var button = document.createElement('input');
button.type = 'button';

var container = document.getElementById('table');

cell5.appendChild(checkbox);
cell5.appendChild(label);

}


}
function getvalue(checkbox){
  for (var i = 0; i < 5; i++) {
    if(checkbox.value=="present"){
      alert("hello")
    }
    else{
      alert("noo")
    }
  }
}
