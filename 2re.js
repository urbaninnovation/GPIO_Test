const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(23, 24); // Using GPIO17 & GPIO18

function exit() {
  //button1.unexport();
  //button2.unexport();
  process.exit();
}

myEncoder.on('rotation', (direction, value) => {

  console.log('Value is', value);
});

process.on('SIGINT', exit);
