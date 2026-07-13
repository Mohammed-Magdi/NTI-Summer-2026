var name = window.prompt("Enter Your Name.");
var birthYear = window.prompt("Enter Your Birth Year.");
var isStudent = window.confirm("Are You a Student?");

var currentYear = new Date().getFullYear();
var age = currentYear -  Number(birthYear)
console.log("Hello " + name + ", " + " your are " + age + "years old");

var cage;
if(age < 13){
    cage = "Kid";
}
else if(age >= 13 && age <= 17){
    cage = "Teen";
}
else if(age < 60 && age > 17){
    cage = "Adult";
}
else{
    cage = "Senior";
}
console.log("Your are a/an " + cage)
if(isStudent){
    console.log("Don't forget to study hard!")
}



window.alert("Hello " + name + ", " + " your are " + age + "years old");
window.alert("Your are a/an " + cage);
if(isStudent){
    window.alert("Don't forget to study hard!");
}

if(isStudent){
    var title = document.getElementById("aa");
    title.innerText = "Hello " + name + ", " + "your are " + age + "  years old Your are a/an " + cage + " Don't forget to study hard!"
}
else{
    var title = document.getElementById("aa");
    title.innerText = "Hello " + name + ", " + "your are " + age + "  years old Your are a/an " + cage
}