
function firstFunction(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var x = parseInt(document.getElementById('x').value);
	var result = (a*x)+b;
	document.getElementById('resultado').innerHTML = result;
	// alert((a*x)+b);
}