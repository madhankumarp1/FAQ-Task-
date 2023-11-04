// var button1 = document.getElementById("btn1");
// var button2 = document.getElementById("btn2");
// var button3 = document.getElementById("btn3");

// var box1 = document.getElementById("box3-1");
// var box2 = document.getElementById("box4-2");
// var box3 = document.getElementById("box5-3");

// button1.addEventListener("click", function () {
//   add(box1, button1);
//   close(box2, button2);
//   close(box3, button3);
// });

// button2.addEventListener("click", function () {
//   add(box2, button2);
//   close(box1, button1);
//   close(box3, button3);
// });

// button3.addEventListener("click", function () {
//   add(box3, button3);
//   close(box1, button1);
//   close(box2, button2);
// });


// function add(box, button) {
//   if (button.innerText === "+") {
//     box.style.display = "block";
//     button.innerText = "-";
//   } else {
//     box.style.display = "none";
//     button.innerText = "+";
//   }
// }

// function close(box, button) {
//   box.style.display = "none";
//   button.innerText = "+";
// }






// var buttons = [
//     // document.getElementById("btn1"),
//     // document.getElementById("btn2"),
//     // document.getElementById("btn3"),



//   ];


var buttons = document.querySelectorAll(".btn")

  var boxes = [
    document.getElementById("box3-1"),
    document.getElementById("box4-2"),
    document.getElementById("box5-3"),
  ];

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function(){
        open(i);
    } );
  }

  function open(index) {
      console.log("open function");
      for (let i = 0; i < buttons.length; i++) {
        if (i === index) {
          add(boxes[i], buttons[i]);
        } else {
          close(boxes[i], buttons[i]);
        }
      }
    
  }

  function add(box, button) {
    if (button.innerText === "+") {
      box.style.display = "block";
      button.innerText = "-";
    } else {
      box.style.display = "none";
      button.innerText = "+";
    }
  }

  function close(box, button) {
    box.style.display = "none";
    button.innerText = "+";
  }



