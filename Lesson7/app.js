var sanaandgui = [];
for (i = 0; i < 10; i++) {
    var too = Math.random() * 100;
    var floorToo = Math.floor(too)
    sanaandgui.push(floorToo);
}
console.log(sanaandgui);

var minToo = 100;
var minIndex = -1;

for (i = 0; i < sanaandgui.length; i++){
    if (sanaandgui[i] < minToo){
        minToo = sanaandgui[i];
        minIndex = i;
    }
}
console.log('Хамгийн бага тоо нь ' + minToo + ' Индекс нь ' + minIndex)

var  maxToo = 0;
var maxIndex = -1;

for (i = 0; i < sanaandgui.length; i++) {
    if (sanaandgui[i] > maxToo) {
        maxToo = sanaandgui[i];
        maxIndex = i;
    }
}
console.log('Хамгийн их тоо нь ' + maxToo + ' Индекс нь ' + maxIndex);