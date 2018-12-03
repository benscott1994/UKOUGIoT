var WioNode = require(<WioPathFile>);
var wioConfig = require(<sensorConfigFile>).wio_iot;

// construct a Wio board
var board = new WioNode({
    "debug": true,
    "token": wioConfig.access_token,
    "location": wioConfig.location
});


// continuous reading, once every 1 seconds
board.stream(<pin>, <property>, <readingInterval>, function(data, error){
    if( data != null ) {
        // console.log(data);

        if( data[<pin>] < <PropertyValue> ) {
            // write once to buzzer/speaker, to make a sound
            board.write(null, <BuzzerPin>, <buzzerProperty>, '443', '1000');            
        }
    }
});

// stop continuous reading after 22 seconds
setTimeout(function(){
    board.stopStream('GroveLuminanceA0', 'luminance');
}, 22000);