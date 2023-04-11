function exibiAnosCopa() {
	var campoAnoInicial = document.getElementById("ano-inicial");
	var campoAnoFinal = document.getElementById("ano-final");
	var mensagem = document.getElementById("mensagem");

	var anoInicial = campoAnoInicial.value;
	var anoFinal = campoAnoFinal.value;
	console.log(anoInicial);

	anoInicial = parseInt(anoInicial);
	anoFinal = parseInt(anoFinal);

	if (isNaN(anoInicial) || isNaN(anoFinal)) {
		mensagem.textContent = "Digite somente números!";
	} else if (anoInicial > 9999 || anoFinal > 9999) {
		mensagem.textContent = "Digite os anos em quatro dígitos!";
	} else if (anoInicial < 1930) {
		mensagem.textContent = "A Copa do Mundo começou em 1930!";
	} else if (anoFinal <= anoInicial){
		mensagem.textContent = "Ano final tem que ser maior que o ano incial!";
	} else {
		var ano = anoInicial;

		while (ano <= anoFinal) {
			document.write(ano);
			document.write("<br>");
			ano = ano + 4;
		}
	}
}

var botao = document.querySelector("button");
botao.addEventListener("click", exibiAnosCopa);