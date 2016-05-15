window.onload = function(){

// AGREGAR ELEMENTOS

	botonAgregar = function(){
		// encontrar valor
		var itemInfo = document.getElementById("inputAddItem").value;
		//convertir string a lower case
		var itemInfoLC = itemInfo.toLowerCase()
		var itemInfoAC = itemInfo.toUpperCase()
		var cantidadInfo = document.getElementById("inputAddCantidad").value;
		var cantidadTd1 = document.createElement("td");
		var itemTd1 = document.createElement("td");
		// crear id con el valor numérico
		cantidadTd1.setAttribute("id", itemInfoLC +"N");
		// crear ir con la cantidad
		itemTd1.setAttribute("id", itemInfoLC);		
		var tr1 = document.createElement("tr");
		itemTd1.innerHTML = itemInfoAC;
		cantidadTd1.innerHTML = cantidadInfo;
		tr1.appendChild(cantidadTd1);
		tr1.appendChild(itemTd1);
		document.getElementsByTagName("table")[0].appendChild(tr1);
	}



// QUITAR ELEMENTOS

	botonQuitar = function(){

		
		var valor = 0;


		// quitar cantidad
		var quitarCantidadInfo = document.getElementById("inputQuitarItem").value;
		quitarCantidadInfoUC = quitarCantidadInfo.toLowerCase();
		quitarCantidadInfoN = quitarCantidadInfoUC+"N";
		var cantidadTabla = document.getElementById(quitarCantidadInfoN).innerHTML
		

		// // encontrar ID del elemento
		// var quitarCantidad = document.getElementById(quitarCantidadInfoN);

		// resta de elementos
		var inputCantidad = document.getElementById("inputQuitarCantidad").value;
		var cantidad = parseInt(inputCantidad);
		var cantidadTablaI = parseInt(cantidadTabla);

		if(cantidad <= cantidadTablaI){
			var resta = cantidadTablaI - inputCantidad;
			document.getElementById(quitarCantidadInfoN).innerHTML = resta;
		} else {
			alert("Inserte un número menor a la cantidad de elementos que tiene en el carrito de compras");
		}

		if(cantidadTabla == valor){
			alert("Entró");
			// identificar valor de quitar en input
			var quitarItemInfo = document.getElementById("inputQuitarItem").value;
			var quitarItemInfoLC = quitarItemInfo.toLowerCase();
			document.getElementById(quitarItemInfoLC).innerHTML = " ";
			////quitar item
			//quitarItem.parentNode.removeChild(quitarItem);
		} else {
			alert("no entró")
		}
			

		

		// var quitarCantidadValue = document.getElementById("quitarCantidadInfoN");
		// // if(resta < ){}
		

	}

}