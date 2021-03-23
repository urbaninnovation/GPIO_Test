const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(23, 24); // Using GPIO17 & GPIO18
var value_alt
function exit() {
  //button1.unexport();
  //button2.unexport();
  process.exit();
}

myEncoder.on('rotation', (direction, value) => {
if (value != value_alt){
  console.log('Value is', value);
  value_alt=value;
  }
});

process.on('SIGINT', exit);
