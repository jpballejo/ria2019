
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

  for(var i=0;i<10;i++){
    console.log(datos[i]);
    lista.innerHTML +=  caragarDatos(datos[i]);
   }
 agregarT(datos[1]);
 for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
			//	this.parentNode.removeChild(this);
				});
			lista.children[i].nodeName
			//	this.parentNode.getElementById("borrarTarea").click(function(){console-log("click");});
			//	});
			
		}
};

function agregarT(dato){

	var lista= document.getElementById("lista"),
	nuevaTarea = document.createElement("li"),
	contenedor=document.createElement("div"),
	check=document.createElement("input"),
	enlace = document.createElement("a"),
	contenido = document.createTextNode(dato.title),
	spand= document.createElement("input");
	spand.setAttribute("type", "button");
	spand.setAttribute("value", "Click me");
  	spand.addEventListener("click",function(){this.parentNode.removeChild(this);});
	check.setAttribute("type", "checkbox");
	
	// Agregamos el contenido al enlace
	//enlace.appendChild(contenido);
	// Le establecemos un atributo href
	//enlace.setAttribute("href", "#");
	// Agrergamos el enlace (a) a la nueva tarea (li)
	//nuevaTarea.appendChild(enlace);
	// Agregamos la nueva tarea a la lista
	//lista.appendChild(nuevaTarea);
	contenedor.appendChild(check);
	contenedor.appendChild(contenido);
	contenedor.appendChild(spand);
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
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),

			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());


//<input type ="button" id="borrarTarea" class="destroy" value"Xfgghjfj"></input>
		
	function caragarDatos(dato) {

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
	};

	