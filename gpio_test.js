var Gpio = require('onoff').Gpio;
var RotaryEncoder = require('raspi-rotary-encoder').RoraryEncoder: //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 990); //run the blinkLED function every 250ms
var count = 0;


raspi.init(function(){
  var encoder = new RotaryEncoder({
    pins: { a: 33, b: 31},
    pullResistors: {a: "up", b: "up"}
  });

  encoder.addListener('change', function (evt){
    console.log('count', evt.value);
  })

});


function blinkLED() { //function to start blinking
  ++count;
  console.log(count);
  if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 10000); //stop blinking after 5 seconds
