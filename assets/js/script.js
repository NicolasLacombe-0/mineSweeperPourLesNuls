//fonction génération de rows/cols

const container = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 1; c < (rows * cols) + 1; c++) { //  Changé depuis for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c); //changé depuis cell.innerText = (c+1); 
    container.appendChild(cell).className = "grid-item case"+c+"";
  };
};

makeRows(10, 10);

// fonction hover des cases (en noir pour l'instant)

$( "div" )
  .mouseenter(function() {
    $(this).css("background-color","black");
  })
  .mouseleave(function() {
    $( this ).css("background-color","white");
  });
   

// Variables 
var totalTiles = 10 * 10;
var totalBomb = Math.round(totalTiles / 10);
var flag = 0; 
var counter = 1;


// Attribution aléatoire de la classe 'bomb'
for(var bomb=0; bomb < totalBomb; bomb++) {
var bombTile = Math.floor(Math.random() * totalTiles) + 1;
console.log('Bombe à la case '+bombTile);
$('.case'+bombTile).addClass('bomb');
}