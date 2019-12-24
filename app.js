const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

//load the board
defaultGrid();

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}


function makeColumns(cellNum) {
    //create cells for each row
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

function draw() {
    let celll = document.querySelectorAll(".cell");;
    celll.forEach((item) => {
        item.addEventListener('mouseenter', function (event) {
            //Create random colors

            let r = Math.floor(Math.random() * 225);
            let g = Math.floor(Math.random() * 225);
            let b = Math.floor(Math.random() * 225);

            event.target.style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';;
        });
    });
}

document.getElementById('btn-reset').addEventListener('click', function () {
    let celll = document.querySelectorAll(".cell");;
    celll.forEach((item) => {
        item.style.background = 'white';
    });
});

//start drawing on the board
document.getElementById('btn-start').addEventListener('click', function () {
    draw();
});