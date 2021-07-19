const { isPlainObject } = require('./objects/isPlain')

const app = 'App';
console.log(app);

const data = { a: 1 };
console.log(isPlainObject(data));
console.log('Added isPlain func');