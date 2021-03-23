const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(23, 24); // Using GPIO17 & GPIO18

myEncoder.on('rotation', (direction, value) => {
  if (direction == 'R') {
    console.log('Encoder rotated right');
  } else {
    console.log('Encoder rotated left');
  }

  console.log('Value is', value);
});

process.on('SIGINT', exit);
