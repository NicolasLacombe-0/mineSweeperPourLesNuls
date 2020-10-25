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
            div.id = `${i} ${j}`;
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
            let nbMinesAdjacentes = compteNbMineAdjacentes(ele);
            ele.innerHTML = `<p>${nbMinesAdjacentes}</p>`;
            let classe = `nb${nbMinesAdjacentes}`;
            ele.classList.add(classe);
        };
    })
}

// fonction pour compter les mines adjacentes
function compteNbMineAdjacentes(ele) {
    let nbMinesAdjacentes = 0;
    let coordonne = ele.id;
    let x = parseInt(coordonne[0]);
    let y = parseInt(coordonne[2]);
    console.log(x, y);
    if (x >= 1 && y >= 1) {
        let id = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1], [x - 1, y - 1], [x + 1, y + 1], [x - 1, y + 1], [x + 1, y - 1]];
        let caseAdjacentes = [];
        id.forEach(el => {
            let caseAdjacente = document.getElementById(`${el[0]} ${el[1]}`);
            caseAdjacentes.push(caseAdjacente);
        });
        caseAdjacentes.forEach(el => {
            if (el.className == 'item bomb') {
                nbMinesAdjacentes += 1;
            }
        })
        return nbMinesAdjacentes;
    }
}
