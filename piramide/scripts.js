function piramide (){
	var tpi = parseInt(prompt("El tamaño de su piramide es:"));
	//console.log(tpi);
	var piramide = "";	
	var ladrillo = "*";
	for(var i=1;i<=tpi;i++){
		piramide = piramide +ladrillo;
		console.log(piramide);
	}
}

