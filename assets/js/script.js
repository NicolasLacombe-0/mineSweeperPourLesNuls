// config
const NBMINE = 10;
const GRIDSIZE = 600;
const NBCASE = 10;


let grid = document.getElementsByClassName('grid-container')[0];

//  function pour créer la grille (paramètre range nb de case, size taille en pixel)
function createSquareGrid(range, size) {
    grid.style.width = size;
    grid.style.gridTemplateRows = `repeat(${range}, ${size / range}px)`;
    grid.style.gridTemplateColumns = `repeat(${range}, ${size / range}px)`;
    for (let i = 0; i < range; i++) {
        for (let j = 0; j < range; j++) {
            let div = document.createElement("div");
            div.className = "item";
            //placement des divs avec leur coordonnés en id
            div.id = `x=${i} y=${j}`;
            grid.append(div);
        }
    };
}

createSquareGrid(NBCASE, GRIDSIZE);

// fonction qui génère un entier aléatoire
// fonction qui place les mines. (nb nombre de mines)
function placeMine(nb) {
    let items = document.getElementsByClassName('item');
    let randomNumber;
    for (let i = 0; i < nb; i++) {
        randomNumber = getRandomInt(items.length)
        items[randomNumber].className = 'item bomb';
    }
}

placeMine(NBMINE);

let arrayCase = grid.children;

// add event listener click on each "case" nice alert on miss
for (const ele of arrayCase) {
    ele.addEventListener("click", function() {
        if (ele.className == 'item bomb') {
            alert("SURPRISE MOTHER FUCkER!!");
        } else {
            let coordonnée = ele.id
            console.log(coordonnée);
        };
    })
}
