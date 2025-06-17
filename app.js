let thisIsString = "abc";
let stringToNumber = Number(thisIsString);
console.log(typeof stringToNumber);
console.log(stringToNumber); //string to number return NaN

let thisIsNumber = 33;
let numberToString = String(thisIsNumber);
console.log(typeof numberToString);
console.log(numberToString); //number to string number which is actually a string

let myobj = {
  email: "user@gmail.com",
  name: "user1",
  upi: "user@ybl",
};
let myobj2 = myobj;
myobj2.email = "user@mata.co";
console.log(myobj);
console.log(myobj2); //changing in original as well the new object result in changes to both the objects due to heap memory

const myName = "Piyush"; //this creates a primitive string literal
console.log(myName.length);

const myName1 = new String("Piyush"); //this creates a string which is actually an object
console.log(myName1);
console.log(typeof myName1);
console.log(myName1[0]);
