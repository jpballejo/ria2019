//script1.js
/**
 * Clase que administra el localStorage 
 * |Jp|
 */
///////////////////LOCALSTORAGE/////////////////
function existe(key){

	if(localStorage.getItem(key)!=null){return true;}
	return false;
}

function agregar(key, dato){

	if(!existe(key)){

		localStorage.setItem(key,JSON.stringify(dato));
	console.log("Agrege: ",dato);
	}else{console.log("Ya existe",get(key));}
}

function borrar(key){
		console.log("Borre: " + key);
		console.log(get(key));	
	localStorage.removeItem(key);
	
}

function get(key){
return localStorage.getItem(key);

}

function modEnAlmacenamiento(valorNuevo,key){

	var tareaAMod= JSON.parse(get(key));
	borrar(key);
	tareaAMod.tarea=String(valorNuevo);
	agregar(key,tareaAMod);
	//console.log("Modifique tarea: ",key," nuevo valor: ",tareaAMod.tarea);
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
///////////////////////////////////////////////
///