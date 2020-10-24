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


let items = document.getElementsByClassName('item');
// création d'un tableau avec des nb aléatoire unique
for (var a = [], i = 0; i < items.length; ++i) a[i] = i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
    for (var a = [], i = 0; i < items.length; ++i) a[i] = i;
    var tmp, current, top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

a = shuffle(a);

// fonction qui place les mines. (nb nombre de mines)
function placeMine(nb) {
    let alea;
    for (let i = 0; i < nb; i++) {
        alea = a[i];
        items[alea].className = 'item bomb';
    }
}

placeMine(NBMINE);

let arrayCase = grid.children;

// add event listener click on each "case" nice alert on miss
for (const ele of arrayCase) {
    ele.addEventListener("click", function () {
        if (ele.className == 'item bomb') {
            alert("oups you died !");
        } else {
            let coordonnée = ele.id
            console.log(coordonnée);
        };
    })
}
