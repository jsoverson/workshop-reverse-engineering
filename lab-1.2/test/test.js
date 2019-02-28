
const assert = require('assert');

// const { unhex } = require('../answer/answer-1.2');
const { unhex } = require('../work/lab-1.2');

assert.equal(unhex('48656c6c6f20576f726c64'), 'Hello World');

console.log('OK!');