var events = require('events');

//create Event Emmiter object for creating, fire and listening events
var eventEmitter = new events.EventEmitter();



//Handle the event thorugh event handler
var handleEvent = function (){
	console.log('event was handled');
}

//Assign the eventhandler to the custom event
eventEmitter.on('customEvent', handleEvent);

//Fire the custom event
eventEmitter.emit('customEvent');