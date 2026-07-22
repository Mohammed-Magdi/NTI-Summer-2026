// Part A


// 1.
function fun1() {
  undeclaredVar = "Test";
}

fun1();
console.log(undeclaredVar); 



// 2.

function fun2() {
  "use strict";
  try {
    strictvar = "Test2";
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

setGlobalValueStrict();


// 3.

function Test3() {
  "use strict";

  var localVar = "test";
  try {
    delete localVar;
  } catch (error) {
    console.error(error.message);
  }

  
  const user = { name: "Ahemed", age: 25 };
  console.log("Before delete:", user); 

  delete user.age; 
  console.log("After delete:", user); 
}

testDeleteInStrict();
// Output:
// Delete variable error: Delete of an unqualified identifier in strict mode.
// Before delete: { name: 'Alice', age: 25 }
// After delete: { name: 'Alice' }
// Reason: The `delete` operator is designed to remove configurable properties from OBJECTS. 
// Deleting standalone variables (unqualified identifiers) is bad practice and throws an error in strict mode.