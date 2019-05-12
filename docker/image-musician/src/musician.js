/**
 * UDP client
 */

var MULTICAST_ADDRESS = '239.255.36.36';
var UDP_PORT = 8888

var dgram = require("dgram");
var uuid = require("uuid/v4");
var UUID = uuid();

arg = process.argv[2];
var instrument = new Map();
instrument.set("piano", "ti-ta-ti");
instrument.set("trumpet", "pouet");
instrument.set("flute", "trulu");
instrument.set("violin", "gzi-gzi");
instrument.set("drum", "boum-boum");

function send(){
    var udp = dgram.createSocket("udp4");
    message = JSON.stringify({id : UUID, name : arg, sound : instrument.get(arg)})
    udp.send(message,0,message.length,UDP_PORT,MULTICAST_ADDRESS,function(err,byte){
        if(err) throw err;
        udp.close;
    })
}

setInterval(send,1000);