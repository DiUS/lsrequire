var LSRequireCore = require('lsrequire-core').LSRequireCore;

module.exports = {
  init: function(config){
    var lsrequire = new LSRequireCore(config);
    return function(requestedFile){
      return require(lsrequire.resolve(requestedFile, __filename));
    }
  }  
};


