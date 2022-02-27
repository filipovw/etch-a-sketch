const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

function genGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
    squareListener();
  }
}

genGrid();

resetButton.addEventListener("click", function () {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
  genGrid();
});

function squareListener() {
  const square = document.querySelectorAll(".square");
  square.forEach((a) =>
    a.addEventListener("mouseover", () => {
      a.classList.replace("square", "color");
    })
  );
}

function updateGrid() {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );

  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  squareListener();
}

userInput.addEventListener("change", updateGrid);
