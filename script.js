let initialGridSize = 16;
let actualGridSize = initialGridSize;

const gridContainer = document.querySelector("#grid-container");
const btnGridSize = document.querySelector("#size-selector");
const btnResetGrid = document.querySelector("#reset-button");


function creategrid(gridSize) { 
    gridContainer.innerHTML = "";
    gridContainer.setAttribute("style",`grid-template-columns: repeat(${gridSize}, 1fr );
                                        grid-template-rows: repeat(${gridSize}, 1fr)`);
    for(i=0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);

        gridSquare.addEventListener("mousedown", () => {
            isMouseDown = true;
            gridSquare.setAttribute("style", `background-color: black;`);
          });
      
          gridSquare.addEventListener("mousemove", () => {
            if (isMouseDown) {
              gridSquare.setAttribute("style", `background-color: black;`);
            }
          });
      
          gridContainer.addEventListener("mouseup", () => {
            isMouseDown = false;
          });
    }
}

btnGridSize.addEventListener("click", () => {
    const newSize = prompt("Enter a new size (e.g., 24):");
    if (newSize !== null && newSize !== "") {
      const parsedSize = parseInt(newSize);
      if (!isNaN(parsedSize)) {
        actualGridSize = parsedSize;
        creategrid(parsedSize);
      } else {
        alert("Please enter a valid number.");
      }
    }
  });

  btnResetGrid.addEventListener("click", () => {
    creategrid(actualGridSize);

  })

creategrid(initialGridSize);