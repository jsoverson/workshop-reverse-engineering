
(function(){
  function randomSeed() {
    const seed = Math.random();
    return seed;
  }
  const el = document.getElementById('output');
  el.innerHTML = `I am hosted at ${document.location} and my magic number is ${randomSeed()}`;
}());
