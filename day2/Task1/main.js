var userName = window.prompt("Enter Your Name.");
var password = window.prompt("Enter The Password.");

if(userName == ''){
    window.alert("Username is required");
}
else if(password.length < 8 ){
    window.alert("Password must be at least 8 characters");
}
else{
    window.alert("Welcome!");
    console.log("usernaem: "+ userName + " password: " + password)
}

