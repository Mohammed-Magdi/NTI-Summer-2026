// // // PartA:

// // 1.
// var car = {
//     brand : "BMW",
//     model : "1515",
//     year : "2020",
//     color : "Gray"
// }
// console.log(car);

// // 2.
// console.log(car.brand);
// console.log(car["year"]);

// // 3.
// car.color = "black";
// car.price = "20,000";
// console.log(car);

// // 4.
// delete car.year;
// console.log(car.year); //printing undefined as the key 'year' was removed from the list

// // 5.
// var student = {
    
// }
// student["student-name"] = "Sara";
// student.age = 20;
// console.log(student["student-name"]);

// // 6.
// var book = {
//     title : "JS",
//     author : {
//         fName : "ahmed",
//         lName: "abraham"
//     }
// }
// console.log(book.author.lName);

// // 7.
// var person = { name: "Ali", age: 25, city: "Cairo" } ;
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(person.hasOwnProperty("job"));

// // 8.
// var settings = {
//     theme : "dark",
//     lang : "en" 
// }
// Object.freeze(settings);
// settings.theme = "light";
// settings.fontsize = 16;
// console.log(settings); // prints the original obeject attributes as freeze method maakes the object immutabel



// // partB:

// // 9.
// var citys = ["cairo", "alex", "tanta", "mansoura", "giza"];
// console.log(citys);
// console.log(citys.length);

// // 10.
// console.log(citys[0]);
// console.log(citys[1]);
// console.log(citys[citys.length - 1]);

// // 11.
// citys.push("el-mahala");
// console.log(citys);
// citys.unshift("asuit");
// console.log(citys);

// // 12.
// citys.pop();
// console.log(citys);
// citys.shift();
// console.log(citys);

// // 13.
// var web =  ["HTML", "CSS", "JS", "React"];
// console.log(web.indexOf("JS"));
// console.log(web.includes("python"));

// // 14.
// var backpack = ["pen", "book", "bag"];
// backpack.forEach(function (item, i) {
//     console.log(item, "i = ", i);
// });

// // 15.
// var colors = ["red", "green", "blue", "yellow"];
// for (var color of colors) {
//   if (color === "blue") {
//     break;
//   }
//   console.log(color); 
// }

// // 16.
// var letters = ["A", "B", "C"] ;
// letters.push("D");
// letters.push("E");
// letters.shift();
// console.log(letters);
// console.log(letters.length);

// // 17.
// var fruits = ["apple", "banana", "cherry"];
// var upperCasedFruits = fruits.map(function (fruit) {
//   return fruit.toUpperCase();
// });
// console.log(upperCasedFruits);
// console.log(fruits);




// partC:

// // 18.
// var numbers = [10, 55, 30, 80, 45, 90] ;
// var filterdNumbers = numbers.filter(function(number){
//     return number > 50 ;
// }
// )
// console.log(filterdNumbers);

// // 19.
// citys = ["Cairo", "Giza", "Alex", "Aswan"];
// var found = citys.find(function (f) {
//     return f.startsWith("A");
// });
// console.log(found);

// // 20.
// var letters = ["a", "b", "c", "d", "e"];
// var copyletters = letters.slice(1,4);
// console.log(letters);
// console.log(copyletters);

// // 21.
// var nums =["one", "two","three", "four", "five"];
// nums.splice(1,2);
// console.log(nums)

// // 22.
// var unsorted = [40, 100, 1, 5, 25];
// unsorted.sort(function (a, b) { return a - b; 
// }
// );
// console.log(unsorted);

// // 23.
// var ages = [16, 21, 17, 19];
// console.log(ages.some(function (a) { return a >= 18; }));
// console.log(ages.every(function (a) { return a >= 18; }));
 
// // 24.
// var arr = [5, 10, 15, 20];
// var sum = arr.reduce(function (acc, n) {
//   return acc + n;
// }, 0);

// console.log(sum);




// // partD:

// // 25.
// var students = [{ name: "Omar", grade: 80 },
//                 { name: "Mona",grade: 90 }, 
//                 { name: "Ali", grade: 70 }];
// students.forEach(function (item, index) {
//      console.log(index, item);
// });

// // 26.
// var filteredStudents = students.filter(
//     function(f){
//         return f.grade >= 80;
//     }
// )
// console.log(filteredStudents);

// // 27.
// var product = [
//     {name : "headphone", price : 100 },
//     {name : "ram", price : 500 }
// ]
// var total = product.reduce(
//     function(acc,n){
//         return acc + n.price;
//     }
//     ,0)
// console.log(total);

// // 28.
// var arr = ["js", "html", "css", "js", "react", "js"];
// var counter = 0;
// arr.forEach(
//     function(a){
//         if(a === "js"){
//             return counter++;
//         }
//     }

// )
// console.log(counter);

// // 29.
// var classroom = {
//     teacher : "Ahmed",
//     students : ["ali", "omar", "muhammed", "osama"],
// }
// console.log(classroom.teacher);
// console.log(classroom.students.length);
// console.log(classroom.students.at(classroom.students.length - 1));

// // 30.
// var arr =  [{ id: 1, title: "Pen", price: 10 },
//             { id: 2, title: "Book",price: 50 },
//             { id: 3, title: "Bag", price: 25 }] ;

// var newarr = arr.map(
//     function(a){
//             return a.title.toUpperCase();
//     }
// )
// console.log(newarr);
// var newarr1 = arr.map(
//     function(a){
//         if(a.price < 30){
//             return a;
//         }
//     }
// )
// console.log(newarr1);
// var sum = arr.reduce(
//     function(acc,n){
//         return acc + n.price;

//     }
//     ,0)
// console.log(sum);    