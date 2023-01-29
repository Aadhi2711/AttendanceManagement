function check(){
  var std = document.getElementById("nostudent").value;
  console.log(std);
  var table = document.getElementById("table1");
  for(var i = 1; i <= std; i++) {
  var newrow = table.insertRow(-1);

 cell5 = newrow.insertCell(0);

checkbox = document.getElementById("check").value;
var label = document.createElement('label')
    label.htmlFor = 'present';
    label.appendChild(document.createTextNode('present'));



var container = document.getElementById('table');

cell5.innerHTML(checkbox);
cell5.appendChild(label);





}
for (var i = 0; i < std; i++) {
    if (checkboxes[i].checked) {
        result += checkboxes[i].value
            + " " + " present, ";
    }
}
for (var i = 0; i < std; i++) {
  document.write("<h1>"
          + result + "</h1>");
}

}
