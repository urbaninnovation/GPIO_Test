const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(23, 24); // orginal hat  GPIO17 & GPIO18 genutzt
var value_alt;
//var value = 4;

console.log('zweimal clicken und der Zähler geht einen hoch oder herunter. ');

function exit() {
  process.exit();
}


myEncoder.on('rotation', (direction, value) => {
if (value != value_alt){
  console.log('Wert ist: ', value);
  value_alt = value;
  }
});

process.on('SIGINT', exit);
