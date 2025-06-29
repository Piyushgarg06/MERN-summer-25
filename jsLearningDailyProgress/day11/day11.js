// const changeHeading = () => {
//   document.querySelector("#heading").innerHTML =
//     "Learning how async function in js";
// };
// const changedHeading = setTimeout(changeHeading, 5000);
// stop.addEventListener("click", (e) => {
//   clearTimeout(changedHeading);
//   console.log("button clicked the heading isnt gonna change now");
// });
// let interval;
// // const sayTime = (str) => {
// //   console.log(`hi ${str} the current date right now is ${Date.now()}`);
// // };
// // const greet = () => {
// //   interval = setInterval(sayTime, 2000, "Piyush Garg");
// // };
// // start.addEventListener("click", (e) => {
// //   if (!interval) {
// //     greet();
// //     console.log("start initiated");
// //   }
// // });
// // stop.addEventListener("click", (e) => {
// //   clearInterval(interval);
// //   interval = null;
// //   console.log("stop initiated");
// // });
// // now what we are trying to do is clicking start generates a color and clicking stop stops the color generation
let intervalId;
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const changeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const div = document.querySelector("#infiniteColors");
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
const colors = () => {
  intervalId = setInterval(changeColor, 100);
};
start.addEventListener("click", (e) => {
  if (intervalId == null) {
    colors();
    console.log("color change initiated");
  }
});
stop.addEventListener("click", (e) => {
  clearInterval(intervalId);
  intervalId = null;
  console.log("stop has initiated");
});
