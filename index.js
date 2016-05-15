window.onload = function(){

// AGREGAR ELEMENTOS

	botonAgregar = function(){
		// encontrar valor
		var itemInfo = document.getElementById("inputAddItem").value;
		var cantidadInfo = document.getElementById("inputAddCantidad").value;
		var cantidadTd1 = document.createElement("td");
		var itemTd1 = document.createElement("td");
		// crear id con el valor
		cantidadTd1.setAttribute("id", itemInfo +"N");
		itemTd1.setAttribute("id", itemInfo);		
		var tr1 = document.createElement("tr");
		itemTd1.innerHTML = itemInfo;
		cantidadTd1.innerHTML = cantidadInfo;
		tr1.appendChild(cantidadTd1);
		tr1.appendChild(itemTd1);
		document.getElementsByTagName("table")[0].appendChild(tr1);
	}



// QUITAR ELEMENTOS

	botonQuitar = function(){

		if (true) {}
		// identificar valor de quitar en input
		var quitarItemInfo = document.getElementById("inputQuitarItem").value;
		var quitarItem = document.getElementById(quitarItemInfo);
		quitarItem.parentNode.removeChild(quitarItem);
		// quitar cantidad
		var quitarCantidadInfo = document.getElementById("inputQuitarItem").value;
		quitarCantidadInfoN = quitarCantidadInfo+"N";
		var cantidadTabla = document.getElementById(quitarCantidadInfoN).innerHTML
		
		// // encontrar ID del elemento
		// var quitarCantidad = document.getElementById(quitarCantidadInfoN);

		// resta de elementos
		var inputCantidad = document.getElementById("inputQuitarCantidad").value;
		var cantidad = parseInt(inputCantidad);
		if(cantidad < cantidadTabla){
			var resta = cantidadTabla - inputCantidad;
			document.getElementById(quitarCantidadInfoN).innerHTML = resta;
 		} else {
			alert("inserte un número correcto");
		}


		// var quitarCantidadValue = document.getElementById("quitarCantidadInfoN");
		// // if(resta < ){}

	}


}