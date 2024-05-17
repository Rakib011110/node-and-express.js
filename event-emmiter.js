const EventEmitter = require("events")
const myEmitter = new EventEmitter()

// listerNer 
myEmitter.on('brithday', () => {
    console.log(`Happy birth day too you`);
})
myEmitter.on('brithday', (gift) => {
    console.log(`I will send you give ${gift} `);
})


myEmitter.emit("brithday", "bike")