function exibiAnosCopa() {
	var campoAnoInicial = document.getElementById("ano-inicial");
	var campoAnoFinal = document.getElementById("ano-final");
	
	var anoInicial = campoAnoInicial.value;
	var anoFinal = campoAnoFinal.value;

	anoInicial = parseInt(anoInicial);
	anoFinal = parseInt(anoFinal);

	var ano = anoInicial;

	while (ano <= anoFinal) {
		document.write(ano);
		document.write("<br>");
		ano = ano + 4;
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", exibiAnosCopa);