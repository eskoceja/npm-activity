console.log("My application just ran");

const Moment = require("moment");

const a = new Moment();
console.log(a.format("h:mm: a") + " is the current time")