function addrow(){

  var table = document.getElementById("table");

  var newrow = table.insertRow(table.length);

 cell1 = newrow.insertCell(0);
   cell2 = newrow.insertCell(1);
  cell3 = newrow.insertCell(2);
  cell4 = newrow.insertCell(3);

  rollno = document.getElementById("rollno").value;
  fname = document.getElementById("fname").value;
  var d = document.getElementById("select1");
  var std = d.options[d.selectedIndex].text;
  document.getElementById("standard").value = std;

  var d = document.getElementById("select2");
  var sec = d.options[d.selectedIndex].text;
  document.getElementById("section").value = sec;





  cell1.innerHTML = rollno;
  cell2.innerHTML = fname;
  cell3.innerHTML = std;
  cell4.innerHTML = sec;
}

function myDeleteFunction() {
  document.getElementById("table").deleteRow(-1);
}
