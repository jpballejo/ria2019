//armar.js
//

/**
 * 
 */

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  recibe(myJson);
  });


function recibe(dato){
var lista = document.getElementById("lista-tareas");
  for(var i = 0 ;i<10;i++){
  console.log(dato[i]);

  var T= crearTarea("tarea-"+dato[i].id,dato[i].title,dato[i].completed);

  agregar(T.id,T);
//lista.appendChild(armarNodoLista(T));
  }

  
}
cargarLista();
document.getElementById("btn-agregar").addEventListener("click",function(){

    var inputNuevaTarea = document.getElementById("tareaInput");

    if(inputNuevaTarea.value.length>0){

          var nueva= crearTarea(createId("tarea"),inputNuevaTarea.value,false);
          console.log(nueva);
          agregar(nueva.id,nueva);
          var lista = document.getElementById("lista-tareas");
          var nuevoNodo= armarNodoLista(nueva);
          console.log(nuevoNodo);
          lista.appendChild(nuevoNodo);
          inputNuevaTarea.value="";
          inputNuevaTarea.setAttribute("placeholder", "Agrega tu tarea");
      }else{alert("Tenes que agregar una tarea papu...")}

  });
/////////////////FUNCIONES PRINCIPALES/////////////
///
function armarNodoLista(dato){
  
  var nuevoHijoLista = crearNodoLista(dato.id);
  var nuevoHijoDiv = crearNodoDiv(dato.id);
  var nuevoHijoCheck= crearNodoCheckbox(nuevoHijoLista.id,dato.completed);
  var nuevoHijoEnlace = crearNodoEnlace();
  var nuevoNodoParrafo= crearNodoParrafo();
  var nuevoHijoTexto = crearNodoTexto(dato.tarea);
  var nuevoHijoBoton = crearNodoBoton();
  nuevoHijoDiv.appendChild(nuevoHijoCheck);
  nuevoNodoParrafo.appendChild(nuevoHijoTexto);
  nuevoHijoDiv.appendChild(nuevoNodoParrafo);
  nuevoHijoDiv.appendChild(nuevoHijoBoton);
  nuevoHijoEnlace.appendChild(nuevoHijoDiv);
  nuevoHijoLista.appendChild(nuevoHijoEnlace);
  setearEventoTexto(nuevoNodoParrafo);
  setearEventoBoton(nuevoHijoBoton);
  return nuevoHijoLista;

}

function setearEventoTexto(texto){
    texto.addEventListener("dblclick",function(){

    if(this.parentNode.firstChild.checked!=true){
        console.log("es false");
        var nuevoHijoInputText = crearNodoInputText();
        setearEventoKey(nuevoHijoInputText);
        this.parentNode.replaceChild(nuevoHijoInputText,document.getElementById(this.id));
    }

  });

}

function setearEventoKey(inputText){
    inputText.addEventListener("keypress",function(e){
      var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
          console.log("enter");
          if(this.value.length>0){
      
          modificarTarea(this.id,this.value);

        }else{alert("Ingresa una tarea papu...");}
        }
    });


}

function modificarTarea(idElementoHijo,valor){

    var inText = document.getElementById(idElementoHijo);
    var nuevoNodoTexto = crearNodoTexto(inText.value);
    var nuevoNodoParrafo = crearNodoParrafo();
    nuevoNodoParrafo.appendChild(nuevoNodoTexto);
    modEnAlmacenamiento(inText.value,inText.parentNode.dataset.value);
    setearEventoTexto(nuevoNodoParrafo);
    inText.parentNode.replaceChild(nuevoNodoParrafo,inText);


}

function setearEventoBoton(boton){
    boton.addEventListener("click",function(){

    if(this.parentNode.firstChild.checked==true){

        eliminarNodoLista(this.parentNode.firstChild.value);

    }


});

}

function eliminarNodoLista(idNodo){

    var lista = document.getElementById("lista-tareas");
    var hijoLista= document.getElementById(idNodo);
    borrar(idNodo);
    lista.removeChild(hijoLista);
    console.log(idNodo);

}















function cargarLista(){

  var lista = document.getElementById("lista-tareas");
  
  for (var e =0;e<localStorage.length;e++){

      var nuevoNodo= armarNodoLista(JSON.parse(localStorage.getItem(localStorage.key(e))));
      console.log(nuevoNodo);
      lista.appendChild(nuevoNodo);

      }

}

