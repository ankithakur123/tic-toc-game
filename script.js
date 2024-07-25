let boxes = document.querySelectorAll(".box");
let restsetBtn = document.querySelectorAll("#rest-btn");

let turn0 = true;
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("boxes was click");
    if (turn0) {
      box.innerText = "x";
      turn0 = false;
    } else {
      box.innerText = "o";
      turn0 = true;
    }
  });
});
