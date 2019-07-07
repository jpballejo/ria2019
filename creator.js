//creator.js
//
/**
 * Creator: clase encargada de crear objetos papu...
 */
//
/**
 * [crearTarea funcion que crea un objeto tarea]
 * @param  {[String]} id      [identificador para la tarea]
 * @param  {[String]} tarea   [la tarea el texto]
 * @param  {[Boolean]} checked [representa si la tarea fue echa o no]
 * @return {[Object]}         [la tarea creada!]
 */
function crearTarea(id,tarea,checked){

	var myTarea= new Object();
		myTarea.id=id;
		myTarea.tarea=tarea;
		myTarea.completed=checked;
	return myTarea;

}

function crearNodoLista(idTarea){

	var nuevoNodoLi = document.createElement("li");
		nuevoNodoLi.setAttribute("id",idTarea);
	
	return nuevoNodoLi;


}

function crearNodoDiv(idTarea){

	var nuevoContenedor = document.createElement("div");
		nuevoContenedor.setAttribute("id",createId("contenedor"));
		nuevoContenedor.setAttribute("data-value",idTarea);
		nuevoContenedor.setAttribute("class","contenedor");
	return nuevoContenedor;
}

function crearNodoCheckbox(idNodoLista,estado){

	var nuevoCheckbox= document.createElement("input");
		nuevoCheckbox.setAttribute("id",createId("checkbox"));
		nuevoCheckbox.setAttribute("type","checkbox");
		nuevoCheckbox.setAttribute("value", idNodoLista);
		nuevoCheckbox.setAttribute("class","estado");
		if(estado==true){	nuevoCheckbox.setAttribute("checked",true);}
	return nuevoCheckbox;
}

function crearNodoEnlace(){

	var nuevoEnlace = document.createElement("a");
		nuevoEnlace.setAttribute("id",createId("enlace"));
		nuevoEnlace.setAttribute("href","#");
	return nuevoEnlace;
}

function crearNodoParrafo(){

	var nuevoParrafo = document.createElement("p");
		nuevoParrafo.setAttribute("id",createId("parrafo"));

	return nuevoParrafo;

}

function crearNodoTexto(texto){

	var nuevoNodoTexto = document.createTextNode(texto);
	//nuevoNodoTexto.setAttribute("id",createId(texto));
	return nuevoNodoTexto;

}

function crearNodoBoton(){

	var nuevoBoton = document.createElement("input");
		nuevoBoton.setAttribute("id",createId("botonBorrar"));
		nuevoBoton.setAttribute("type","button");
		nuevoBoton.setAttribute("value","Borrar Tarea");
		nuevoBoton.setAttribute("class","btnDel");
	return nuevoBoton;
}

function crearNodoInputText(){

	var nuevoInputText = document.createElement("input");
		nuevoInputText.setAttribute("id",createId("text"));
		nuevoInputText.setAttribute("type","text");

	return nuevoInputText;
}




//////////////FUNCION CREA ID////////////
//
/**
 * [Crea un id random para los objetos en funcion de un prefijo:"nombre"]
 * @param  {String} ) {               var map [lleva el prefijo]
 * @return {[String]}   [id autogenerado]
 */
var createId = (function() {
    var map = {};
    return function(prefix) {
        prefix = prefix || 'generated';
        map[prefix] = map[prefix] || 0;
        
        var id = prefix + '-' + map[prefix]++;
 
        // Valida que no exista un elemento con 
        // el mismo id
        if(document.getElementById(id)) {
            return createId(prefix);
        }
        return id;
    }
})();