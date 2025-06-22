for (let index = 0; index <= 10; index++) {
  console.log(index);
}
let myArr = ["batman", "ironman", "thor", "captain"];
for (let i = 0; i <= myArr.length - 1; i++) {
  console.log(myArr[i]);
}
const locate = 5;
for (let j = 1; j <= 1000000; j++) {
  if (j == locate) {
    console.log(`found ${locate} in the loop`);
    break;
  }
  console.log(`index ${j} is not equal to ${locate}`);
}
let k = 1;
while (k <= 10) {
  console.log(k);
  k++;
}
let l = 1;
do {
  console.log(l);
  l++;
} while (l <= 10);
const myArr2 = ["python", "javascript", "ruby", "c++"];
const myObj = {
  py: "python",
  js: "javascript",
  rb: "ruby",
  cpp: "c++",
};
const myMap = new Map();
myMap.set("py", "python");
myMap.set("js", "javascript");
myMap.set("rb", "ruby");
myMap.set("cpp", "c++");

for (const value of myArr2) {
  //returns all the element in array
  console.log(value);
}
//for (const object of myObj) {
//does not work on object
//console.log(object);
//}
for (const element of myMap) {
  //returns map as an array
  console.log(element);
}
for (const [key, value] of myMap) {
  //key is for key and value is for value in myMap
  console.log(key, value);
}
const arrObj = [
  { languagename: "python", extension: "py" },
  { languagename: "javascript", extension: "js" },
  { languagename: "ruby", extension: "rb" },
  { languagename: "c++", extension: "cpp" },
];
myArr2.forEach((items, index, arr) => {
  //items store element, index stores index of each element, arr stores whole array
  console.log(items, index, arr);
});
arrObj.forEach((items) => {
  //here items store each element which is an object inside the array
  console.log(items.languagename); //suppose we want to print name of each coding language so we
  console.log(items.extension);
});
