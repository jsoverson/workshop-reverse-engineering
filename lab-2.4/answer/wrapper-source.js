(function(){
  const originalDocument = window.document;
  const document = new Proxy(originalDocument, {
    get: function(target, property) {
      if (property === 'location') {
        return 'http://google.com';
      }

      const originalProperty = target[property];

      if (typeof originalProperty === 'function') {
        return function (...args) {
          return originalProperty.apply(target, args);
        };
      } else {
        return originalProperty;
      }
    }
  });

  /*# injectedScript # Block #*/ { /* Injected source goes here */ }

}())

// This shows how we've rewritten the source to expose a magic seed
// for use elsewhere in our code.
console.log(`The magic seed is ${window.magicSeed};`)
