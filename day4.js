function addTwoNumber(a, b) {
  //initializing a function where a and b are parameters
  return a + b;
}
a = 3;
b = 4;
result = addTwoNumber(a, b); //passing a and b to the function here a and b are arguments and storing the returned value in a variable named as result
console.log(result); //printing the value that is stored in result

let user = {
  username: "Piyush Garg",
  userId: "Piyush123",
  userEmail: "piyush@gmail.com",
};
function objectUser(anyobject) {
  //here we are passing anyobject as an parameter which means function is taking some parameter which is a object
  return `hello ${anyobject.username} your userId is ${anyobject.userId} and email is ${anyobject.userEmail}`;
}
console.log(objectUser(user)); //but we pass actual object name as argument

let cartPrice = [100, 500, 9000];
function cartPrice1(getarray) {
  //for accesing an array inside a function we specify the functiion parameter to getarray which corresponds to us working on an array which is later consfirmed based on our argument
  return `the price of first item in cart is ${getarray[0]}`;
}
console.log(cartPrice1(cartPrice)); //and we pass the actual name of array in argument
function shoppingCart(...itemsPrice) {
  //here we are using rest operator which is similar to the spread opreator
  return itemsPrice;
}
console.log(shoppingCart(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)); //we can pass as many values we want and the returned value will be a array
//in the case the returned value is [1,2,3,4,5,6,7,8,9,0]

const userObj = {
  username: "Piyush",
  userId: "piyush123",
  userEmail: "piyush123@gmail.com",
  welcomeMessage: function welcomeUser() {
    return `${this.username}, welcome to the website`; //we use this we are currently referring to the current context or scope
  },
};
console.log(userObj.welcomeMessage()); //here we include () because welcomeMessage is now a method

const differenceOfTwoNumber = (num1, num2) => num1 - num2;
console.log(differenceOfTwoNumber(4, 3)); // would stillreturns 1

(welcomeMessage = (name) => {
  console.log(`welcome ${name}`);
})("piyush");
