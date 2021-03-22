/* This reads a rotary encoder with node.js
   The idea for the logic came from the
	 https://www.youtube.com/watch?v=hFpSwfKw5G0
*/
var Gpio = require('onoff').Gpio
   ,button1 = new Gpio(6, 'in', 'both') //DA button
   ,button2 = new Gpio(13, 'in', 'both') //clk button
   ,button3 = new Gpio(16, 'in', 'both') //druecken
   ,a = 0 //a value GPIO 17
   ,b = 0 //b value GPIO 18
	 ,v = 0 //value to increment/decrement

function exit() {
  button1.unexport();
  process.exit();
}

//Watch for hardware interrupt of switch 1
button1.watch(function (err, value) {
  if (err) {
    throw err;
  }
  a = value;
  console.log("Schalter 1")
});

//Watch for hardware interrupt of switch 2
button2.watch(function (err, value) {
  if (err) {
    throw err;
  }
	b = value;
  console.log("Schalter 2")

	//only evaluate if a = 1
	if (a == 1 && b == 1) {
	  console.log(v++);
	} else if (a==1 && b==0) {
		console.log(v--);
	}
});

//Watch for hardware interrupt of switch 1
button3.watch(function (err, value) {
  if (err) {
    throw err;
  }
  a = value;
  console.log("Schalter gedrueckt!")
});

process.on('SIGINT', exit);
