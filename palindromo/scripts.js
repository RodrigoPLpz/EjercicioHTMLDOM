
function valPal (){
	var datoIngreso = prompt("Ingrese su texto, sin acenton:");
	var pal = datoIngreso.toLowerCase();
	var tdi = pal.length; //tdi = tamañoDatoIngreso
	var palInverso="";
	var pal1="";
	for(var count = 0;count<tdi;count++){ // .replace()
		if(pal[count] === " "|| pal[count] === "¿"|| pal[count] === "?" ){
			pal1 = pal1 + "";
		} else {
			pal1 = pal1 + pal[count];
		}
	}
//	console.log(pal1);
	var tpal1= pal1.length;
	for(var i= tpal1-1;i>=0;i--){  // .split(), reverse() y join ()
		palInverso = palInverso + pal1[i];
	}
	if (pal1 === palInverso){
		console.log("Excelente, has ingresado un palíndrmo:");
		console.log(datoIngreso + " = "+ palInverso);
	} else {
		console.log("¡Intentalo de nuevo!");
		console.log(datoIngreso+ " no es igual que "+ palInverso);
	}
}

/* .remplace();  Método*/
/*
No subas, abusón"

Oí lo de mamá: me dolió

Sometamos o matemos

Yo dono rosas, oro no doy

Isaac no ronca así

Lavan esa base naval

No traces en ese cartón

¿Será lodo o dólares?
*/

/*  
	
}
//valPal(datoIngreso); Llamado a la funcion desde js

//var titulo = document.querySelector("h1");
//titulo.innerHTML = "cambio a etiqueta h1";

*/