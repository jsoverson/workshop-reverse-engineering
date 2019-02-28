
/* rename a to first and b to second */
const a = "Hello";
const b = "World";

function join(a, b) {
  /* these should not be renamed */
  return a + b;
}

module.exports = function() {
  /* these should be renamed */
  return join(a, b);
}
