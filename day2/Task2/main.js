var name = window.prompt("Enter Your Name.");
var age = window.prompt("Enter The Age.");
var yearsOfExperience = window.prompt("Enter Your years of experience.");
var rate = window.prompt("Rate YourSelf Out of 10.");
var baseSalary = window.prompt("Enter The Base Salary.");

// Number(age);
// Number(yearsOfExperience);
// Number(rate);
// Number(baseSalary);

var jobCategoy;

if(yearsOfExperience < 2){
    jobCategoy = "Junior"
}
else if(yearsOfExperience >= 2 && yearsOfExperience < 5){
    jobCategoy = "Mid-Level"
}
else if(yearsOfExperience >= 5 && yearsOfExperience < 10){
    jobCategoy = "Senior"
}
else {
    jobCategoy = "Expert"
}
console.log("jobCategoy: " + jobCategoy);

var eperformance;

switch(rate){
    case ( rate >= 9):
            eperformance = "Excellent";
        case (rate >= 7): 
            eperformance =  "Good";
        case (rate >= 5): 
           eperformance = "Average";
        default:
            eperformance = "Needs Improvement"; 
}
console.log("performance: " + eperformance);

var bonus;

if(yearsOfExperience > 0 && yearsOfExperience <= 2){
    bonus = 0.1;
}
else if(yearsOfExperience >= 3 && yearsOfExperience <= 5){
    bonus = 0.15;
}
else{
    bonus = 0.2;
}

var finalSalary = +baseSalary + (+baseSalary * bonus) ;
console.log("Final saalary: " + finalSalary)


var currentHour = new Date();

if (currentHour >= 9 && currentHour < 18) {
        var shift = "Day shift"
        
    } 
else {
        var shift = "Night shift";
    }
console.log(shift);

window.alert("jobCategoy: " + jobCategoy);
window.alert("performance: " + eperformance);
window.alert("Final saalary: " + finalSalary);
window.alert(shift);

var title = document.getElementById("aa");
title.innerText = "Hello " + name + " You Are " + age + " jobCategoy: " + jobCategoy + " performance: " + eperformance + " " + shift + " Final saalary: " + finalSalary;



