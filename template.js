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

/*function cargarDatos(dato) {

    function templateApply(objData) {
      var temp = new Template(`
        <li data-id="##id##" class="##completed##">
          <div class="view">
            <input class="toggle" type="checkbox" ##checked##>
            <label >##title##</label>
            <span class="destroy">X</span>
            </div>
        </li>
      `);

      return temp.apply(objData);
    };

    var completed = '';
    var checked = '';

    dato.checked = dato.completed ? "checked": '';
    dato.title = decodeURI(dato.title);

    return templateApply(dato); 
  };*/