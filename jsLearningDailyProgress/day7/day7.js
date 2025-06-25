const myDiv = document.querySelector("div"); //access div and stores div in myDiv
myDiv.style.backgroundColor = "grey"; //div color changes to grey
myDiv.style.border = "2px solid black";
myDiv.style.borderRadius = "5px";

myList = document.querySelectorAll("ul"); //query selector all returns a node list which is not an array bur behaves like one
myList.forEach((li) => {
  li.style.backgroundColor = "grey";
});
