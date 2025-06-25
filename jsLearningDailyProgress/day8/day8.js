const parent = document.querySelector(".parent");
console.log(parent); //we are accessing the parent div
console.log(parent.children); //we are accessing all the children of the parent div
console.log(parent.children[1]); //we are accessign the second child of the parent div
console.log(parent.lastElementChild); //another method bt which we can access first and last child
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
let firstChild = document.querySelector(".child"); //we are accessing first element with class child
console.log(firstChild.innerHTML); //printing the innerHTML of first child
console.log(firstChild.parentElement); //printing the parent of firstchild
console.log(firstChild.nextElementSibling.innerText); //method of accessing sibling of an element
console.log(parent.childNodes); //printing the family tree of parent

const div = document.createElement("div"); //creating an element div
console.log(div);
div.className = "main"; //adding class main to div
div.id = "mainId"; //adding id mainId to div
div.setAttribute("title", "givenAttribute"); //using this method we can give any attribute we want to give to any element
// div.innerText = "this is a created div"; //method one of adding a text but it overwrites everytime we run it
const add = document.createTextNode("this is a div"); //creating a text node and storing in in add variable
div.appendChild(add); //appending text node to div
document.body.appendChild(div); //appening div to body or to the document
