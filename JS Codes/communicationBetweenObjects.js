// create a custom event to communicate the data between components in React


// an object of the custom event should be created and used in both the components
// and in one component, the event is triggered with the eventName and data, and in other component, 
// the object calls e.on(eventName, callback) to receive the data 

class CustomEvent {
    
    eventNames = {};

    trigger(name, data) {
        if(this.eventNames[name]) {
            const cb = this.eventNames[name];
            cb(data);
        }
    }

    on(name, callback) {
        this.eventNames[name] = callback; 
    }
}