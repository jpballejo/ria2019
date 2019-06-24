(function (global) {

  global.Template = function (str) {
    var self = this;


    this.template = str || '';

    this.apply =  function(obj) {

      var temporaryTemp = self.template;
      Object.keys(obj).forEach(function(key){
        temporaryTemp = temporaryTemp.replace( `##${key}##`, obj[key]);
      });

      return temporaryTemp;
    }

    return this;
  }

}(window));