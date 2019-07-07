var defaultTemplate;

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  recibe(myJson);
  });

function recibe(datos){
	var lista = document.getElementById("lista");
	localStorage.clear();
  	for(var i=0;i<10;i++){
    	console.log(datos[i]);
 		addAlmacenamientoLocal(datos[i])
    }

	cargarLista();

};



function cargarLista(){for (var e =0;e<localStorage.length;e++){

	agregarT(JSON.parse(localStorage.getItem(localStorage.key(e))));

}}
//nota: modificar la funcion del input y agregar la modificacion con algo modal
//o sino con un input en lugar del texto 
//jp
function borrar(key,clave){
	console.log(key);
	removeAlmacenamientoLocal(key,clave);
	//cargarLista();
};

function agregarT(dato){
	var lista= document.getElementById("lista"),
	nuevaTarea = document.createElement("li"),
	contenedor=document.createElement("div"),
	check=document.createElement("input"),
	enlace = document.createElement("a"),
	texto=document.createElement("p"),
	contenido = document.createTextNode(dato.title),
	botonDel= document.createElement("input");
	botonDel.setAttribute("type", "button");//boton
	botonDel.setAttribute("value", "Borrar Tarea");//valor
	botonDel.addEventListener("click",function(){//en el evento click digo que borre la tarea
		console.log(this.parentNode.parentNode);
		if(this.parentNode.previousSibling.checked==true){console.log("es true");

			if(this.parentNode.previousSibling.checked==true){
				var id=this.parentNode.getAttribute("id");
				var clave= this.parentNode.previousSibling.value;
				borrar(id,clave);
		
			}
		}

	});
	nuevaTarea.setAttribute("id",createId("lista"));//seteo un id autogenerado a la lista
	check.setAttribute("type", "checkbox");//check le digo que va a ser checkbox
	check.setAttribute("value", nuevaTarea.id);
	if(dato.completed){check.setAttribute("checked",true);}
	texto.setAttribute("id",dato.id);
	texto.appendChild(contenido);
	texto.addEventListener("dblclick",function(){
	if(this.parentNode.firstChild.checked!=true){
		console.log("es false");
		var inText = document.createElement("input");
		inText.setAttribute("id","textoInput");
		inText.setAttribute("type","text");
		inText.addEventListener("keypress",function(e){
			var keycode = (e.keyCode ? e.keyCode : e.which);
		   	if (keycode == '13') {
		    	console.log("enter");
		    	if(this.value!=null){
					var nodoText = document.createTextNode(this.value);
					var botonDel = document.createElement("input");
					botonDel.setAttribute("type", "button");//boton
					botonDel.setAttribute("value", "Borrar Tarea");//valor
					botonDel.addEventListener("click",function(){//en el evento click digo que borre la tarea
					

					if(this.parentNode.previousSibling.checked==true){console.log("es true");

						if(this.parentNode.previousSibling.checked==true){
							var id=this.parentNode.getAttribute("id");
							var clave= this.parentNode.previousSibling.value;
							borrar(id,clave);
				
						}
					}	

					});
					
					this.parentNode.replaceChild(nodoText,document.getElementById(this.id))
					
		    	}
		    }

    	});
		console.log(this.id);
		console.log(document.getElementById(this.id));
		this.parentNode.replaceChild(inText,document.getElementById(this.id));
	}	

	

	});
	contenedor.appendChild(check);
	texto.appendChild(botonDel);
	contenedor.appendChild(texto);
	enlace.appendChild(contenedor);
	enlace.setAttribute("href","#");
	nuevaTarea.appendChild(enlace);
	lista.appendChild(nuevaTarea);
	
	}


(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		crearTarea();

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
	}
	
());


	
/**
 * [Funcion que agrega un objeto JSON al localStorage]
 * @param {[type]} dato [objeto JSON]
 */
function addAlmacenamientoLocal(dato){
		dato.id=createId("tarea");
		localStorage.setItem(dato.id,JSON.stringify(dato));
		console.log("lo agrege papu!!");

	}
/**
 * [removeAlmacenamientoLocal description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
function removeAlmacenamientoLocal(key,clave){
		console.log("ID= "+key);
		
		var lista =document.getElementById("lista");

		for (var i = 0;i<lista.children.length; i++) {//itero sobre la lista

			console.log(lista.children[i].getAttribute("id"));
			console.log(clave);
			if(lista.children[i].getAttribute("id")==clave){//pregunto si id del hijo es igual a key

				console.log("Encontre");

				lista.removeChild(lista.children[i]);//si el id coincide con la key
					
				console.log("Has sido terminado");
			}
		}

		console.log("Lo borro del localStorage");
		return localStorage.removeItem(key);
	}

		
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

function obtenerKEY(cadena){
	cadenaRetorno=cadena.split("-");

	return cadenaRetorno[1];
}


function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

(function(){
	if (storageAvailable('localStorage')) {
 	 	console.log("ok almacenamiento");
		}else {
 			 // Too bad, no localStorage for us
		}
}());