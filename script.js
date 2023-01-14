const grid = document.querySelector(".grid")
window.addEventListener("load", createGrid(16)) //on load, create a 16x16 blank grid

function createGrid(size){
    const cellSize = 640/size;
    for(let row = 0; row < size; row++){
        const row = document.createElement("div")
        row.style.display = "flex"
        for(let column = 0; column < size; column++){
            const cell = document.createElement("div")
            cell.classList.add("cell")
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            row.appendChild(cell);
        }
        grid.appendChild(row)
    }
    const cells = grid.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => cell.classList.add("hovered"))
    })
}


const button = document.querySelector("button")
button.addEventListener("click", () => {
    let newSize = prompt("Enter the new grid size")
    const cells = grid.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.remove()
    })
    createGrid(newSize)
})