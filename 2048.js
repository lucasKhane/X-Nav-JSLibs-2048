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

fillholes = function(direction){
  //Hasta las narices del algoritmo este---MEJORAR
  for (var i=0; i<3; i++){
    console.log(direction);
      switch(direction) {
        case "right":
            if (($("#4").text() != "")||($("#3").text() != "")||($("#2").text() != "")||($("#1").text() != "")){
              if ($("#4").text() == ""){
                $("#4").text($("#3").text());
                $("#3").text($("#2").text());
                $("#2").text($("#1").text());
                $("#1").text("");
              }
              if ($("#3").text() == ""){
                $("#3").text($("#2").text());
                $("#2").text($("#1").text());
                $("#1").text("");
              }
              if ($("#2").text() == ""){
                $("#2").text($("#1").text());
                $("#1").text("");
              }
              //Y si la de la izquierda del todo esta vacia no pasa nada
            }
            if (($("#8").text() != "")||($("#7").text() != "")||($("#6").text() != "")||($("#5").text() != "")){
              if ($("#8").text() == ""){
                $("#8").text($("#7").text());
                $("#7").text($("#6").text());
                $("#6").text($("#5").text());
                $("#5").text("");
              }
              if ($("#7").text() == ""){
                $("#7").text($("#6").text());
                $("#6").text($("#5").text());
                $("#5").text("");
              }
              if ($("#6").text() == ""){
                $("#6").text($("#5").text());
                $("#5").text("");
              }
              //Y si la de la izquierda del todo esta vacia no pasa nada
            }
            if (($("#12").text() != "")||($("#11").text() != "")||($("#10").text() != "")||($("#9").text() != "")){
              if ($("#12").text() == ""){
                $("#12").text($("#11").text());
                $("#11").text($("#10").text());
                $("#10").text($("#9").text());
                $("#9").text("");
              }
              if ($("#11").text() == ""){
                $("#11").text($("#10").text());
                $("#10").text($("#9").text());
                $("#9").text("");
              }
              if ($("#10").text() == ""){
                $("#10").text($("#9").text());
                $("#9").text("");
              }
              //Y si la de la izquierda del todo esta vacia no pasa nada
            }
            if (($("#16").text() != "")||($("#15").text() != "")||($("#14").text() != "")||($("#13").text() != "")){
              if ($("#16").text() == ""){
                $("#16").text($("#15").text());
                $("#15").text($("#14").text());
                $("#14").text($("#13").text());
                $("#13").text("");
              }
              if ($("#15").text() == ""){
                $("#15").text($("#14").text());
                $("#14").text($("#13").text());
                $("#13").text("");
              }
              if ($("#14").text() == ""){
                $("#14").text($("#13").text());
                $("#13").text("");
              }
              //Y si la de la izquierda del todo esta vacia no pasa nada
            }
            break;
        case "left":
            if (($("#1").text() != "")||($("#2").text() != "")||($("#3").text() != "")||($("#4").text() != "")){
              if ($("#1").text() == ""){
                $("#1").text($("#2").text());
                $("#2").text($("#3").text());
                $("#3").text($("#4").text());
                $("#4").text("");
              }
              if ($("#2").text() == ""){
                $("#2").text($("#3").text());
                $("#3").text($("#4").text());
                $("#4").text("");
              }
              if ($("#3").text() == ""){
                $("#3").text($("#4").text());
                $("#4").text("");
              }
              //Y si la derecha del todo esta vacía no pasa nada
            }
            if (($("#5").text() != "")||($("#6").text() != "")||($("#7").text() != "")||($("#4").text() != "")){
              if ($("#5").text() == ""){
                $("#5").text($("#6").text());
                $("#6").text($("#7").text());
                $("#7").text($("#8").text());
                $("#8").text("");
              }
              if ($("#6").text() == ""){
                $("#6").text($("#7").text());
                $("#7").text($("#8").text());
                $("#8").text("");
              }
              if ($("#7").text() == ""){
                $("#7").text($("#8").text());
                $("#8").text("");
              }
              //Y si la derecha del todo esta vacía no pasa nada
            }
            if (($("#9").text() != "")||($("#10").text() != "")||($("#11").text() != "")||($("#12").text() != "")){
              if ($("#9").text() == ""){
                $("#9").text($("#10").text());
                $("#10").text($("#11").text());
                $("#11").text($("#12").text());
                $("#12").text("");
              }
              if ($("#10").text() == ""){
                $("#10").text($("#11").text());
                $("#11").text($("#12").text());
                $("#12").text("");
              }
              if ($("#11").text() == ""){
                $("#11").text($("#12").text());
                $("#12").text("");
              }
              //Y si la derecha del todo esta vacía no pasa nada
            }
            if (($("#13").text() != "")||($("#14").text() != "")||($("#15").text() != "")||($("#16").text() != "")){
              if ($("#13").text() == ""){
                $("#13").text($("#14").text());
                $("#14").text($("#15").text());
                $("#15").text($("#16").text());
                $("#16").text("");
              }
              if ($("#14").text() == ""){
                $("#14").text($("#15").text());
                $("#15").text($("#16").text());
                $("#16").text("");
              }
              if ($("#15").text() == ""){
                $("#15").text($("#16").text());
                $("#16").text("");
              }
              //Y si la derecha del todo esta vacía no pasa nada
            }
            break;
        case "top":
            if (($("#4").text() != "")||($("#8").text() != "")||($("#12").text() != "")||($("#16").text() != "")){
              if ($("#4").text() == ""){
                $("#4").text($("#8").text());
                $("#8").text($("#12").text());
                $("#12").text($("#16").text());
                $("#16").text("");
              }
              if ($("#8").text() == ""){
                $("#8").text($("#12").text());
                $("#12").text($("#16").text());
                $("#16").text("");
              }
              if ($("#12").text() == ""){
                $("#12").text($("#16").text());
                $("#16").text("");
              }
              //Y si el de abajo del todo esta vacio no pasa nada
            }
            if (($("#3").text() != "")||($("#7").text() != "")||($("#11").text() != "")||($("#15").text() != "")){
              if ($("#3").text() == ""){
                $("#3").text($("#7").text());
                $("#7").text($("#11").text());
                $("#11").text($("#15").text());
                $("#15").text("");
              }
              if ($("#7").text() == ""){
                $("#7").text($("#11").text());
                $("#11").text($("#15").text());
                $("#15").text("");
              }
              if ($("#11").text() == ""){
                $("#11").text($("#15").text());
                $("#15").text("");
              }
              //Y si el de abajo del todo esta vacio no pasa nada
            }
            if (($("#2").text() != "")||($("#6").text() != "")||($("#10").text() != "")||($("#14").text() != "")){
              if ($("#2").text() == ""){
                $("#2").text($("#6").text());
                $("#6").text($("#10").text());
                $("#10").text($("#14").text());
                $("#14").text("");
              }
              if ($("#6").text() == ""){
                $("#6").text($("#10").text());
                $("#10").text($("#14").text());
                $("#14").text("");
              }
              if ($("#10").text() == ""){
                $("#10").text($("#14").text());
                $("#14").text("");
              }
              //Y si el de abajo del todo esta vacio no pasa nada
            }
            if (($("#1").text() != "")||($("#5").text() != "")||($("#9").text() != "")||($("#13").text() != "")){
              if ($("#1").text() == ""){
                $("#1").text($("#5").text());
                $("#5").text($("#9").text());
                $("#9").text($("#13").text());
                $("#13").text("");
              }
              if ($("#5").text() == ""){
                $("#5").text($("#9").text());
                $("#9").text($("#13").text());
                $("#13").text("");
              }
              if ($("#9").text() == ""){
                $("#9").text($("#13").text());
                $("#13").text("");
              }
              //Y si el de abajo del todo esta vacio no pasa nada
            }
            break;
        case "bot":
            if (($("#16").text() != "")||($("#12").text() != "")||($("#8").text() != "")||($("#4").text() != "")){
              if ($("#16").text() == ""){
                $("#16").text($("#12").text());
                $("#12").text($("#8").text());
                $("#8").text($("#4").text());
                $("#4").text("");
              }
              if ($("#12").text() == ""){
                $("#12").text($("#8").text());
                $("#8").text($("#4").text());
                $("#4").text("");
              }
              if ($("#8").text() == ""){
                $("#8").text($("#4").text());
                $("#4").text("");
              }
              //Y si el de arriba del todo esta vacio no pasa nada
            }
            if (($("#15").text() != "")||($("#11").text() != "")||($("#7").text() != "")||($("#3").text() != "")){
              if ($("#15").text() == ""){
                $("#15").text($("#11").text());
                $("#11").text($("#7").text());
                $("#7").text($("#3").text());
                $("#3").text("");
              }
              if ($("#11").text() == ""){
                $("#11").text($("#7").text());
                $("#7").text($("#3").text());
                $("#3").text("");
              }
              if ($("#7").text() == ""){
                $("#7").text($("#3").text());
                $("#3").text("");
              }
              //Y si el de arriba del todo esta vacio no pasa nada
            }
            if (($("#14").text() != "")||($("#10").text() != "")||($("#6").text() != "")||($("#2").text() != "")){
              if ($("#14").text() == ""){
                $("#14").text($("#10").text());
                $("#10").text($("#6").text());
                $("#6").text($("#2").text());
                $("#2").text("");
              }
              if ($("#10").text() == ""){
                $("#10").text($("#6").text());
                $("#6").text($("#2").text());
                $("#2").text("");
              }
              if ($("#6").text() == ""){
                $("#6").text($("#2").text());
                $("#2").text("");
              }
              //Y si el de arriba del todo esta vacio no pasa nada
            }
            if (($("#13").text() != "")||($("#9").text() != "")||($("#5").text() != "")||($("#1").text() != "")){
              if ($("#13").text() == ""){
                $("#13").text($("#9").text());
                $("#9").text($("#5").text());
                $("#5").text($("#1").text());
                $("#1").text("");
              }
              if ($("#9").text() == ""){
                $("#9").text($("#5").text());
                $("#5").text($("#1").text());
                $("#1").text("");
              }
              if ($("#5").text() == ""){
                $("#5").text($("#1").text());
                $("#1").text("");
              }
              //Y si el de arriba del todo esta vacio no pasa nada
            }
            break;
        default:
          alert("PROBLEMA");
      }
  }
}

sumNum= function(direction){
    //Casos:
    //Primero igual segundo -> y/o tercero igual cuarto
    //Segundo igual tercero
    //Tercero igual cuarto
    switch (direction) {
      case "right":
        if (($("#4").text() == $("#3").text()) && ($("#4").text() != "")){
          $("#4").text(parseInt($("#4").text())+parseInt($("#3").text()));
          $("#3").text("");
          if (($("#2").text() == $("#1").text()) && ($("#2").text() != "")){
            $("#2").text(parseInt($("#2").text())+parseInt($("#1").text()));
            $("#1").text("");
          }
        }else if (($("#3").text() == $("#2").text()) && ($("#3").text() != "")){
          $("#3").text(parseInt($("#3").text())+parseInt($("#2").text()));
          $("#2").text("");
        }else if (($("#2").text() == $("#1").text()) && ($("#2").text() != "")){
          $("#2").text(parseInt($("#2").text())+parseInt($("#1").text()));
          $("#1").text("");
        }

        if (($("#8").text() == $("#7").text()) && ($("#8").text() != "")){
          $("#8").text(parseInt($("#8").text())+parseInt($("#7").text()));
          $("#7").text("");
          if (($("#6").text() == $("#5").text()) && ($("#6").text() != "")){
            $("#6").text(parseInt($("#6").text())+parseInt($("#5").text()));
            $("#5").text("");
          }
        }else if (($("#7").text() == $("#6").text()) && ($("#7").text() != "")){
          $("#7").text(parseInt($("#7").text())+parseInt($("#6").text()));
          $("#6").text("");
        }else if (($("#6").text() == $("#5").text()) && ($("#6").text() != "")){
          $("#6").text(parseInt($("#5").text())+parseInt($("#5").text()));
          $("#5").text("");
        }

        if (($("#12").text() == $("11").text()) && ($("#12").text() != "")){
          $("#12").text(parseInt($("#12").text())+parseInt($("#11").text()));
          $("#11").text("");
          if (($("#10").text() == $("#9").text()) && ($("#10").text() != "")){
            $("#10").text(parseInt($("#10").text())+parseInt($("#9").text()));
            $("#9").text("");
          }
        }else if (($("#11").text() == $("#10").text()) && ($("#11").text() != "")){
          $("#11").text(parseInt($("#11").text())+parseInt($("#10").text()));
          $("#10").text("");
        }else if (($("#10").text() == $("#9").text()) && ($("#10").text() != "")){
          $("#10").text(parseInt($("#10").text())+parseInt($("#9").text()));
          $("#9").text("");
        }

        if (($("#16").text() == $("#15").text()) && ($("#16").text() != "")){
          $("#16").text(parseInt($("#16").text())+parseInt($("#15").text()));
          $("#15").text("");
          if (($("#14").text() == $("#13").text()) && ($("#14").text() != "")){
            $("#14").text(parseInt($("#14").text())+parseInt($("#13").text()));
            $("#13").text("");
          }
        }else if (($("#15").text() == $("#14").text()) && ($("#15").text() != "")){
          $("#15").text(parseInt($("#15").text())+parseInt($("#14").text()));
          $("#14").text("");
        }else if (($("#14").text() == $("#13").text()) && ($("#14").text() != "")){
          $("#14").text(parseInt($("#14").text())+parseInt($("#13").text()));
          $("#13").text("");
        }
        break;

      case "left":
          if (($("#1").text() == $("#2").text()) && ($("#1").text() != "")){
            $("#1").text(parseInt($("#1").text())+parseInt($("#2").text()));
            $("#2").text("");
            if (($("#3").text() == $("#4").text()) && ($("#3").text() != "")){
              $("#3").text(parseInt($("#3").text())+parseInt($("#4").text()));
              $("#4").text("");
            }
          }else if (($("#2").text() == $("#3").text()) && ($("#2").text() != "")){
            $("#2").text(parseInt($("#2").text())+parseInt($("#3").text()));
            $("#3").text("");
          }else if (($("#3").text() == $("#4").text()) && ($("#3").text() != "")){
            $("#3").text(parseInt($("#3").text())+parseInt($("#4").text()));
            $("#4").text("");
          }

          if (($("#5").text() == $("#6").text()) && ($("#5").text() != "")){
            $("#5").text(parseInt($("#5").text())+parseInt($("#6").text()));
            $("#6").text("");
          if (($("#7").text() == $("#8").text()) && ($("#7").text() != "")){
              $("#7").text(parseInt($("#7").text())+parseInt($("#8").text()));
              $("#8").text("");
            }
          }else if (($("#6").text() == $("#7").text()) && ($("#6").text() != "")){
            $("#6").text(parseInt($("#6").text())+parseInt($("#7").text()));
            $("#7").text("");
          }else if (($("#7").text() == $("#8").text()) && ($("#7").text() != "")){
            $("#7").text(parseInt($("#7").text())+parseInt($("#8").text()));
            $("#8").text("");
          }

          if (($("#9").text() == $("#10").text()) && ($("#9").text() != "")){
            $("#9").text(parseInt($("#9").text())+parseInt($("#10").text()));
            $("#10").text("");
            if (($("#11").text() == $("#12").text()) && ($("#11").text() != "")){
              $("#11").text(parseInt($("#11").text())+parseInt($("#12").text()));
              $("#12").text("");
            }
          }else if (($("#10").text() == $("#11").text()) && ($("#10").text() != "")){
            $("#10").text(parseInt($("#10").text())+parseInt($("#11").text()));
            $("#11").text("");
          }else if (($("#11").text() == $("#12").text()) && ($("#11").text() != "")){
            $("#11").text(parseInt($("#11").text())+parseInt($("#12").text()));
            $("#12").text("");
          }

          if (($("#13").text() == $("#14").text()) && ($("#13").text() != "")){
            $("#13").text(parseInt($("#13").text())+parseInt($("#14").text()));
            $("#14").text("");
            if (($("#15").text() == $("#16").text()) && ($("#15").text() != "")){
              $("#15").text(parseInt($("#15").text())+parseInt($("#16").text()));
              $("#16").text("");
            }
          }else if (($("#14").text() == $("#15").text()) && ($("#14").text() != "")){
            $("#14").text(parseInt($("#14").text())+parseInt($("#15").text()));
            $("#15").text("");
          }else if (($("#15").text() == $("#16").text()) && ($("#15").text() != "")){
            $("#15").text(parseInt($("#15").text())+parseInt($("#16").text()));
            $("#16").text("");
          }
          break;
      case "top":
          if (($("#4").text() == $("#8").text()) && ($("#4").text() != "")){
            $("#4").text(parseInt($("#4").text())+parseInt($("#8").text()));
            $("#8").text("");
            if (($("#12").text() == $("#16").text()) && ($("#12").text() != "")){
              $("#12").text(parseInt($("#12").text())+parseInt($("#16").text()));
              $("#16").text("");
            }
          }else if (($("#8").text() == $("#12").text()) && ($("#8").text() != "")){
            $("#8").text(parseInt($("#8").text())+parseInt($("#12").text()));
            $("#12").text("");
          }else if (($("#12").text() == $("#16").text()) && ($("#12").text() != "")){
            $("#12").text(parseInt($("#12").text())+parseInt($("#16").text()));
            $("#16").text("");
          }

          if (($("#3").text() == $("#7").text()) && ($("#3").text() != "")){
            $("#3").text(parseInt($("#3").text())+parseInt($("#7").text()));
            $("#7").text("");
            if (($("#11").text() == $("#15").text()) && ($("#11").text() != "")){
              $("#11").text(parseInt($("#11").text())+parseInt($("#15").text()));
              $("#15").text("");
            }
          }else if (($("#7").text() == $("#11").text()) && ($("#7").text() != "")){
            $("#7").text(parseInt($("#7").text())+parseInt($("#11").text()));
            $("#11").text("");
          }else if (($("#11").text() == $("#15").text()) && ($("#11").text() != "")){
            $("#11").text(parseInt($("#11").text())+parseInt($("#15").text()));
            $("#15").text("");
          }

          if (($("#2").text() == $("#6").text()) && ($("#2").text() != "")){
            $("#2").text(parseInt($("#2").text())+parseInt($("#6").text()));
            $("#6").text("");
            if (($("#10").text() == $("#14").text()) && ($("#10").text() != "")){
              $("#10").text(parseInt($("#10").text())+parseInt($("#14").text()));
              $("#14").text("");
            }
          }else if (($("#6").text() == $("#10").text()) && ($("#6").text() != "")){
            $("#6").text(parseInt($("#6").text())+parseInt($("#10").text()));
            $("#10").text("");
          }else if (($("#10").text() == $("#14").text()) && ($("#10").text() != "")){
            $("#10").text(parseInt($("#10").text())+parseInt($("#14").text()));
            $("#14").text("");
          }

          if (($("#1").text() == $("#5").text()) && ($("#1").text() != "")){
            $("#1").text(parseInt($("#1").text())+parseInt($("#5").text()));
            $("#5").text("");
            if (($("#9").text() == $("#13").text()) && ($("#9").text() != "")){
              $("#9").text(parseInt($("#9").text())+parseInt($("#13").text()));
              $("#12").text("");
            }
          }else if (($("#5").text() == $("#9").text()) && ($("#5").text() != "")){
            $("#5").text(parseInt($("#5").text())+parseInt($("#9").text()));
            $("#9").text("");
          }else if (($("#9").text() == $("#13").text()) && ($("#9").text() != "")){
            $("#9").text(parseInt($("#9").text())+parseInt($("#13").text()));
            $("#13").text("");
          }
          break;
      case "bot":
          if (($("#16").text() == $("#12").text()) && ($("#16").text() != "")){
            $("#16").text(parseInt($("#16").text())+parseInt($("#12").text()));
            $("#12").text("");
            if (($("#8").text() == $("#4").text()) && ($("#8").text() != "")){
              $("#8").text(parseInt($("#8").text())+parseInt($("#4").text()));
              $("#4").text("");
            }
          }else if (($("#12").text() == $("#8").text()) && ($("#12").text() != "")){
            $("#12").text(parseInt($("#12").text())+parseInt($("#8").text()));
            $("#8").text("");
          }else if (($("#8").text() == $("#4").text()) && ($("#8").text() != "")){
            $("#8").text(parseInt($("#8").text())+parseInt($("#4").text()));
            $("#4").text("");
          }

          if (($("#15").text() == $("#11").text()) && ($("#15").text() != "")){
            $("#15").text(parseInt($("#15").text())+parseInt($("#11").text()));
            $("#11").text("");
          if (($("#7").text() == $("#3").text()) && ($("#7").text() != "")){
              $("#7").text(parseInt($("#7").text())+parseInt($("#3").text()));
              $("#3").text("");
            }
          }else if (($("#11").text() == $("#7").text()) && ($("#11").text() != "")){
            $("#11").text(parseInt($("#11").text())+parseInt($("#7").text()));
            $("#7").text("");
          }else if (($("#7").text() == $("#3").text()) && ($("#7").text() != "")){
            $("#7").text(parseInt($("#7").text())+parseInt($("#3").text()));
            $("#3").text("");
          }

          if (($("#14").text() == $("#10").text()) && ($("#14").text() != "")){
            $("#14").text(parseInt($("#14").text())+parseInt($("#10").text()));
            $("#10").text("");
            if (($("#6").text() == $("#2").text()) && ($("#6").text() != "")){
              $("#6").text(parseInt($("#6").text())+parseInt($("#2").text()));
              $("#2").text("");
            }
          }else if (($("#10").text() == $("#6").text()) && ($("#10").text() != "")){
            $("#10").text(parseInt($("#10").text())+parseInt($("#6").text()));
            $("#6").text("");
          }else if (($("#6").text() == $("#2").text()) && ($("#6").text() != "")){
            $("#6").text(parseInt($("#6").text())+parseInt($("#2").text()));
            $("#2").text("");
          }

          if (($("#13").text() == $("#9").text()) && ($("#13").text() != "")){
            $("#13").text(parseInt($("#13").text())+parseInt($("#9").text()));
            $("#9").text("");
            if (($("#5").text() == $("#1").text()) && ($("#5").text() != "")){
              $("#5").text(parseInt($("#5").text())+parseInt($("#1").text()));
              $("#1").text("");
            }
          }else if (($("#9").text() == $("#5").text()) && ($("#9").text() != "")){
            $("#9").text(parseInt($("#9").text())+parseInt($("#5").text()));
            $("#5").text("");
          }else if (($("#5").text() == $("#1").text()) && ($("#5").text() != "")){
            $("#5").text(parseInt($("#5").text())+parseInt($("#1").text()));
            $("#1").text("");
          }
          break;
      default:
          alert("PROBLEMA");
    }
}

animate = function(){
  for (var i=1; i<17; i++){
    var tag = "#"+i;
    var num = parseInt($(tag).text());
    switch (num) {
      case 2:
        $(tag).animate({
          color: "Navy",
        });
        break;
      case 4:
        $(tag).animate({
          color: "Orange",
        });
        break;
      case 8:
        $(tag).animate({
          color: "DarkSlateGray",
        });
        break;
      case 16:
        $(tag).animate({
          color: "DodgerBlue",
        });
        break;
      case 32:
        $(tag).animate({
          color: "Indigo",
        });
        break;
      case 64:
        $(tag).animate({
          color: "LawnGreen",
          backgroundColor: "Indigo"
        });
        break;
      case 128:
        $(tag).animate({
          color: "LightGreen",
          backgroundColor: "LawnGreen"
        });
        break;
      case 256:
        $(tag).animate({
          color: "Maroon",
          backgroundColor: "LightGreen"
        });
        break;
      case 512:
        $(tag).animate({
          color: "Red",
          backgroundColor: "Maroon"
        });
        break;
      case 1024:
        $(tag).animate({
          color: "Salmon",
          backgroundColor: "Red"
        });
        break;
      case 2048:
        $(tag).animate({
          color: "Silver",
          backgroundColor: "Salmon"
        });
        break;
      case 4096:
        $(tag).animate({
          color: "Gold",
          backgroundColor: "Silver"
        });
        break;

      /**
      //Irreal para la funcion de este ejercicio
      case 8192:
      $(tag).animate({
        color: "",
        backgroundColor: "rgb(,,)"
      });
        break;
      case 16384:
      $(tag).animate({
        color: "",
        backgroundColor: "rgb(,,)"
      });
        break;
      case 32768:
      $(tag).animate({
        color: "",
        backgroundColor: "rgb(,,)"
      });
        break;
      case 65536:
      $(tag).animate({
        color: "",
        backgroundColor: "rgb(,,)"
      });
        break;**/
      default:
        //Se trata del caso que al parsear el "" tenemos el NaN
        //La dejamos como al principio!!!!!!!!!!!
        $(tag).animate({
          color: "black"
        });
    }
  }
}

$(document).ready(function(){
  var cellname = getemptycell();
  $(cellname).text(newnumber());
  cellname = getemptycell();
  $(cellname).text(newnumber());
  animate();
  //Keyboard
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          console.log("Izquierda");
          fillholes("left");
          sumNum("left");
          fillholes("left");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        case 38: // up
          console.log("Arriba");
          fillholes("top");
          sumNum("top");
          fillholes("top");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        case 39: // right
          console.log("Derecha");
          fillholes("right");
          sumNum("right");
          fillholes("right");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        case 40: // down
          console.log("Abajo");
          fillholes("bot");
          sumNum("bot");
          fillholes("bot");
          cellname = getemptycell();
          $(cellname).text(newnumber());
          break;
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
    animate();
  });
});
