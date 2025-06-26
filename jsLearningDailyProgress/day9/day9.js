const addEl = (langName) => {
  const newEl = document.createElement("li");
  newEl.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(newEl);
};
addEl("ruby");
addEl("golang");
addEl("rust");
edit;
const editChild = prompt("Enter the child number you want to edit"); //asking which child to edit
const editFunc = (newLangName) => {
  //creating a function to do the editing part based on prompt
  const childToEdit = document.querySelector(`li:nth-child(${editChild})`); //used template literal and nth-child(editChild) method to access the particular child to edit based on our prompt
  const newChild = document.createElement("li"); //creating a new list element for optimization
  newChild.appendChild(document.createTextNode(newLangName)); //the most optimized method to add a text to created element
  childToEdit.replaceWith(newChild); //replacing the childToEdit with newChild simple
};
const newLangName = prompt(
  `Enter the new value for the ${editChild}th element in the list`
);
editFunc(newLangName);

const childToRemove = document.querySelector("li:last-child");
childToRemove.remove();
