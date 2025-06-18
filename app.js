let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let timestamp = Date.now();
let myDate2 = new Date();
console.log(myDate2.getTime());
console.log(timestamp);

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr.slice(1, 3));
console.log(myArr);
console.log(myArr.splice(1, 3));
console.log(myArr);

const arr1 = [0, 1, 2, 3];
const arr2 = [4, 5, 6, 7];
arr1.push(arr2);
console.log(arr1); //.push changes the array and takes array as one single element making a nested array or 2D array
let newArr = arr1.concat(arr2);
console.log(newArr); //.concat creates a new array and also does not take array as one element but the is not ideal to use this method
let newArr2 = [...arr1, ...arr2];
console.log(newArr2); //this method is called spread method and is ideal way of doing it eventhough both this and concat does the same thing

const userData = {
  name: "piyush", //key is a string we just dont have to use "" even if we do its fine
  email: "piyush@gmail.com",
  fullName: "Piyush Garg", //if we use "" while defining an key it is impossible to now use userData.fullName we can only use userData["fullName"] to access the value of email but we should avoid it
  isLoggedIn: true,
};
console.log(userData.email);
console.log(userData["email"]);

const mySym = Symbol("key1");
const symObject = {
  name: "mySym",
  type: "Symbol",
  [mySym]: "this is a symbol", //while using a symbol in an object we use brackets []
};
console.log(symObject[mySym]);
console.log(symObject);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj = Object.assign({}, obj1, obj2); //if we do not include {} which is a target eveything go under both obj1 and obj3 but as now a target is defined and obj 1 is intact
console.log(obj1);
console.log(obj3);
const obj4 = { ...obj1, ...obj2 }; //spread method can also be used beside assign operator
console.log(obj4);
console.log(Object.keys(obj4)); //returns all the keys as an array
console.log(Object.values(obj4)); //returns all the values as an array
console.log(Object.entries(obj4)); //returns an array of key value pairs
console.log(obj4.hasOwnProperty(1)); //returns true if this key or property exist in our object

const arrObj = [
  { id: 1, email: "1@gmail.com" },
  { id: 2, email: "2@gmail.com" },
  { id: 3, email: "3@gmail.com" },
];
console.log(arrObj[1].email);
