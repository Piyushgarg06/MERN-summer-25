//what we are trying to do is remove the image we clicked on using events
const images = document.querySelectorAll("li");
console.log(images);
images.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e);
    // e.remove() // this will not work because e is an event object, not a DOM element
    e.target.remove(); // this will work because e.target refers to the clicked DOM element
  });
});
const parent = document.querySelector(".images");
parent.addEventListener(
  "click",
  (e) => {
    console.log("clicked the parent");
  },
  true
);
const child = document.querySelector("li");
child.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
  },
  true
);
