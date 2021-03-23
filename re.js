var Gpio = require('onoff').Gpio
   ,button1 = new Gpio(24, 'in', 'both') //blue button
   ,button2 = new Gpio(23, 'in', 'both') //red button
   ,a = 0 //a value GPIO 24
   ,b = 0 //b value GPIO 23
	 ,v = 0 //value to increment/decrement

function exit() {
  button1.unexport();
  button2.unexport();
  process.exit();
}

//Watch for hardware interrupt of switch 1
button1.watch(function (err, value) {
  if (err) {
    throw err;
  }
  a = value;
  console.log("Schalterzustand a (gpio 24): ",value);

});

//Watch for hardware interrupt of switch 2
button2.watch(function (err, value) {
  if (err) {
    throw err;
  }
	b = value;
  console.log("Schalterzustand b (gpio 23): ",value);
	//only evaluate if a = 1
	if (a == 1 && b == 1) {
	  console.log(v++);
	} else if (a==1 && b==0) {
		console.log(v--);
	}
});

process.on('SIGINT', exit);
