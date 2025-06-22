const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums = myNums.filter((element) => {
  return element > 4;
});
console.log(nums);
const newNums = myNums.map((num) => {
  return num + 10;
});
console.log(newNums);

const totalNums = myNums.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);
console.log(totalNums);
const productNums = myNums.reduce((acc, currVal) => {
  return acc * currVal;
}, 1);
console.log(productNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const newBook = books.filter((book) => book.genre === "Fiction");
console.log(newBook);
const newBook2 = books.filter((book2) => book2.publish >= 1999);
console.log(newBook2);
