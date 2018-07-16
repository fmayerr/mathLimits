
function firstFunction(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var x = parseInt(document.getElementById('x').value);
	var result = (a*x)+b;
	document.getElementById('resultado').innerHTML = result;
}

function secondFunction(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = parseInt(document.getElementById('c').value);
	var d = parseInt(document.getElementById('d').value);
	var x = parseInt(document.getElementById('x').value);
	var divisor = (c*(Math.pow(x,2)))-d;
	var dividendo = (a*x)+b;
	if ( divisor == 0){
		document.getElementById('resultado').innerHTML = "No existe el limite";
	} else {
		var resultado = parseInt(dividendo) / parseInt(divisor);
		document.getElementById('resultado').innerHTML = resultado;
	}
}

function thirdFunction(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var x = parseInt(document.getElementById('x').value);
	var resta = (a*x)-b;
	if (resta<0) {
		document.getElementById('resultado').innerHTML = "No existe el limite";
	} else {
		var resultado = Math.sqrt(resta);
		document.getElementById('resultado').innerHTML = resultado;
	}
}