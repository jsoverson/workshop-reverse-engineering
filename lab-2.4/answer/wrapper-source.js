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

  { /* wrapped source here */ }

}())
