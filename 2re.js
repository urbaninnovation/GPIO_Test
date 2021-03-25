const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(23, 24); // Using GPIO17 & GPIO18
var value_alt
console.log('zwei Click und der Zähler geht einen hoch oder herunter. ');

function exit() {
  //button1.unexport();
  //button2.unexport();
  process.exit();
}

myEncoder.on('rotation', (direction, value) => {
if (value != value_alt){
  console.log('Wert ist: ', value);
  value_alt=value;
  }
});

process.on('SIGINT', exit);
