var audio = new Audio('Super Mario Bros Official Theme Song.mp3');
audio.play();
const img = document.getElementById("mario");
const {style} = img;

style.position = "absolute";
style.left = "32px";
style.top = "32px";

addEventListener("keydown", event => {
    if(event.keyCode >= 37
    && event.keyCode <= 40){
      const {style} = img;


      let x = parseInt(style.left, 10),
          y = parseInt(style.top, 10);
      switch(event.keyCode){
        case 37:
              x -= 10;
              break;
        case 38:
              y -= 10;
              break;
        case 39:
              x += 10;
              break;
        case 40:
              y += 10;
              break;
      }
      style.left = `${x}px`;
      style.top = `${y}px`;
    }
});



// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
