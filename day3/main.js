// // Part 1--------------
// // 1.
// var fName = "Muhammed Magdy";
// console.log("fName has " + fName.length + " Characters");

// // 2.
// console.log("I am learning JavaScript".toUpperCase());
// console.log("I am learning JavaScript".toLowerCase());

// // 3.
// if("student@nti.com".includes('@')){
//     console.log("The Emaail contain the @ chaaracter");
// }
// else{
//     console.log("The email does not has the @ character!")
// }

// // 4.
// console.log("The first character of the string is :" + "JavaScript"[0]);
// console.log("The last character of the string is :" + "JavaScript"["JavaScript".length - 1]);

// // 5.
// var text = "This is a bad day";
// console.log(text.replace("bad","good"));

// // 6.
// var sentence = "I love coding";
// var arraySentence = sentence.split(" ");
// var newSentence = arraySentence.join("-");
// console.log(newSentence);

// // 7.
// var text7 = " nti egypt training ";
// console.log(text7.trim().toUpperCase().replace("EGYPT","CAIRO"));



// // Part 2--------------
// // 8.
// console.log(Number("45.8"));
// console.log(typeof(Number("45.8")));

// // 9.
// console.log(Math.round(7.6));
// console.log(Math.floor(7.6));
// console.log(Math.ceil(7.6));

// // 10.
// console.log("the largest number is: " + Math.max(12, 5, 28, 9));   
// console.log("the smallest number is: " + Math.min(12, 5, 28, 9));

// // 11.
// var minimumNumber = 1;
// var maximumNumber = 20;
// var randomNumber = Math.random();
// var randomInRange = Math.floor(randomNumber * (maximumNumber - minimumNumber + 1)) + minimumNumber;
// console.log("Your random nuber is: "+randomInRange);

// // 12.
// console.log(19.4567.toFixed(2));

// // 13.
// var average = 0;
// var counter = 1;
// var sTemp = 51;
// var lTemp = 0;
// var t = 5;
// while(t--){
//     var minimumNumber13 = 1;
//     var maximumNumber13 = 50;
//     var randomNumber13 = Math.random();
//     var randomInRange13 = Math.floor(randomNumber13 * (maximumNumber13 - minimumNumber13 + 1)) + minimumNumber13;
//     sTemp = Math.min(sTemp,randomInRange13);
//     lTemp = Math.max(lTemp,randomInRange13);
//     average = average + (randomInRange13 - average) / counter;
//     counter++;
// }
// average.toFixed(2);
// console.log("the smallest number is: "+sTemp);
// console.log("the largest number is: "+lTemp);
// console.log("the average is: "+average);



// // Part 3--------------
// // 14.
// for(var i = 1; i <21; i++){
//     console.log(i);
// }

// // 15.
// for(var i = 1; i <16; i++){
//     if( i & 1){
//         console.log(i);
//     }
// }

// // 16.
// var count = 10;
// while(count > 0){
//     console.log(count);
//     count--;
// }

// // 17.
// var array17 = ["Sara", "Omar", "Mona", "Youssef"]
// for(aname17 of array17){
//     console.log(aname17);
// }

// // 18.
// for(var i = 1; i < 11; i++){
//     if( i == 7){
//         break;
//     }
//     console.log(i);
// }

// // 19.
// for(var i = 1; i < 4; i++){
//     for(var j = 1; j < 11; j++){
//         console.log(i + " * " + j + " = " + i*j);
//     }
// }

// // 20.
// for(var i = 1; i < 31; i++){
//     if( i == 25){
//         break;
//     }
//     else if( i % 3 == 0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }



// Part 4--------------
// // 21.
// var word = "HELLO";
// for(var w of word){
//     console.log(w);
// }

// // 22.
// var sum = 0;
// var array22 = [10, 20, 30, 40];
// for(a of array22){
//     sum += a;
// }
// console.log(sum);

// // 23.
// var sentence23 = "JavaScript is amazing and awesome";
// var newSentence23 = sentence23.toLowerCase();
// var counter23 = 0;
// for(a23 of newSentence23){
//     if(a23 == 'a'){
//         counter23++;
//     }
// }
// console.log("'a' or 'A' Appeared "+counter23+" times");

// // 24.
// var arr24 = [70, 85, 92, 60, 77, 88];
// for(a24 of arr24){
//     if(!(a24 & 1)){
//         console.log(a24);
//     }
// }

// // 25.
// for(var i = 1; i < 5; i++){
//     var line = "";
//     for(var j = 0; j < i; j++){
//         line += "* ";
//     }
//     console.log(line);
// }

// // 26.
// var counter26 = 0
// var studentsName = ["ahmed", "sara", "omar", "laila", "hassan"];
// for(var sn of studentsName){
//     if(sn.toUpperCase().startsWith('A') || sn.toUpperCase().startsWith('S')){
//         counter26++;
//     }
// }
// console.log(counter26);