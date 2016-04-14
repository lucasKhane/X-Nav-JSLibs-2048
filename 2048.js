//We see if get a 2 or a 4. 2 have more probability than 4
newnumber = function(){
  var randint= Math.floor(Math.random() * 10);
  if (randint>7){
    randint = 4;
  }else{
    randint = 2;
  }
  return randint;
}

getemptycell = function(){
  var cellnumber = Math.floor(Math.random() * 16)+1;
  var cellname = "#"+cellnumber;
  var cellvalue = $(cellname).text();
  var arraytiles = [];
  var contmax = 0;
  while (cellvalue != ""){
    cellnumber = Math.floor(Math.random() * 16)+1;
    cellname = "#"+cellnumber;
    cellvalue = $(cellname).text();
    contmax = contmax + 1;
    if (contmax == 15){
      alert("GAMEOVER");
      return "GAMEOVER";
    }
  }
  return cellname
}

$(document).ready(function(){
  var cellname = getemptycell();
  $(cellname).text(newnumber());
  cellname = getemptycell();
  $(cellname).text(newnumber());
  //Keyboard
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          console.log("Izquierda");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        case 38: // up
          console.log("Arriba");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        case 39: // right
          console.log("Derecha");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        case 40: // down
          console.log("Abajo");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

});
