function calcularIMC(event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (!peso || !altura || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    var imc = peso / (altura * altura);
    var resultado;

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
}

