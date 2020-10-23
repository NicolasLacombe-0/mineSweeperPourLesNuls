//fonction génération de rows/cols

const container = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
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
   