// Implement event emitter
// problem: https://bigfrontend.dev/problem/create-an-Event-Emitter
// youtube solution: https://www.youtube.com/watch?v=LudDrekDRVk&ab_channel=JSer

class EventEmitter {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(eventName, callback) {
    // Create a new array for the event if it doesn't exist
    if (!(eventName in this.subscriptions)) {
      this.subscriptions[eventName] = [];
    }

    const callbacks = this.subscriptions[eventName];
    callbacks.push(callback);

    // Return an object with a release method to unsubscribe
    return {
      release: () => {
        if (!(eventName in this.subscriptions)) return;

        const callbacks = this.subscriptions[eventName];
        const index = callbacks.indexOf(callback);
        if (index < 0) return;

        callbacks.splice(index, 1);

        // Clean up if no more listeners for the event
        if (callbacks.length === 0) {
          delete this.subscriptions[eventName];
        }
      }
    };
  }

  emit(eventName, ...args) {
    if (!(eventName in this.subscriptions)) return;

    for (const callback of this.subscriptions[eventName]) {
      callback(...args);
    }
  }
}
