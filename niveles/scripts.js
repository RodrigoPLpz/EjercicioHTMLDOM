function niveles(){
	var nivel = parseInt(prompt(" Digita tu nivel:"));
	var h2 = document.querySelector("h2"); //busca en  tu html h2
	var img = document.querySelector("img");
	if(nivel>0 && nivel<10){
		h2.innerHTML = "Estatus: Aprendiz";
		document.getElementById("changeImg").src="img/aprendiz.jpg";
	} else if(nivel >= 10 && nivel <20){
		h2.innerHTML = "Estatus: Acrobata";
		document.getElementById("changeImg").src="img/acrobata.jpg";
	} else if (nivel>= 20){
		h2.innerHTML = "Estatus: Ninja";
		document.getElementById("changeImg").src="img/ninja.jpg";
	} else {
		h2.innerHTML = "Sigue entrenando para subir de nivel";
		document.getElementById("changeImg").src="img/lol.gif";
	} 
}

/*
document.querySelector("h2").innerHTML= "hola"; y este:

var h2 = document.querySelector("h2"); 
		h2.innerHTML= "hola";

HACEN LO MISMO


"Acrobata"
*/