const { isPlainObject } = require('./objects/isPlain');
const { makePairs3 } = require('./objects/makePairs');

const app = 'App';
console.log(app);

const data = { a: 1 };
console.log(isPlainObject(data));
console.log('Added isPlain func'); 

const data = { a: 1, b: 2 };
console.log(makePairs3(data));
console.log('Added makePairs3 func'); 