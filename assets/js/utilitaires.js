
for (var a = [], i = 0; i < 40; ++i) a[i] = i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
    for (var a = [], i = 0; i < 40; ++i) a[i] = i;
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
console.log(a);


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
