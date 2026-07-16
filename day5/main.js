// // Task 1===============

// // 1.
// function mult(x,y){
//     return x * y;
// }
// console.log(mult(2,9));


// // 2.
// function calculate(a,b,mult){
//     var calc = (mult(a,b) + a)/b;
//     return calc;
// }
// console.log(calculate(2,5,mult));


// // 3,
// function displayResult(callback){
//     return callback;
// }
// console.log(displayResult(calculate(2,7,mult)));


// // 4.
// calculate(2,2,mult);    // مش متاكد من المطلوب محتاج اي




// // Task 2============

// // 1.
// var greetUSer = setTimeout(function () {
//   console.log("Hello User!");
// }, 3000);


// // 2.
// var limt = 0;
// var ticks = 10;
// var countdown = setInterval(
//     function(){
        
//         console.log(ticks);
//             ticks--;
//         if(ticks == limt){
//           console.log("TIme's up");
//             clearInterval(countdown);
//         } 
//     }
// ,500);


// // 3.
// limt = 5;


// // 4.
// var clearedMessege = setTimeout(
//     function() {
//         console.log("This will be cleared!");
        
// }
// , 5000);
// clearTimeout(clearedMessege);


// // Task 3 ===========

// // 1.


// var items = [];
// // a.
// items.push("key");
// // b.
// console.log(items)
// // c.
// var  index = items.indexOf("key");
// items[index] = "wrench";
// console.log(items)

// // d.
// items.splice(0,1);
// console.log(items)
