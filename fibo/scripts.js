function fibo(){
	var n = parseInt(prompt("Qué número quieres concoer:"));
	//var h3 = document.querySelector("h3");
	var x=0;
	var y=1;
	var i=0;
	var sfp=0;
	while(i<=n){
		//console.log(sfp);
		//h3.innerHTML = sfp;
		sfp =x+y;
		x = sfp;
		y = sfp-y;
		i++;
	}
}