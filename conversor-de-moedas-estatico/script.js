function calcularValor() {
    // Obtenção do valor do campo de entrada
    const inputValor = document.getElementById('inputReais').value.trim();

    // Verificação se há algo digitado no campo
    if (inputValor === '') {
        alert('Por favor, insira um valor para realizar a conversão.');
        return; // Encerra a função caso não haja valor digitado
    }

    // Converte o valor para um número decimal
    const valorParaConverter = parseFloat(inputValor);

    // Obtenção das moedas selecionadas
    const moedaInicial = document.getElementById('moeda_a_ser_convertida').value;
    const moedaConvertida = document.getElementById('moeda_convertida').value;

    // Taxas de conversão
    const taxaRealDolar = 5.30; // Exemplo de taxa de conversão de Real para Dólar
    const taxaRealEuro = 6.20; // Exemplo de taxa de conversão de Real para Euro
    const taxaDolarEuro = 0.92; // Exemplo de taxa de conversão de Dólar para Euro
    const taxaEuroDolar = 1.08; // Exemplo de taxa de conversão de Euro para Dólar

    let valorConvertido;

    // Lógica para calcular o valor convertido baseado nas moedas selecionadas
    if (moedaInicial === 'real' && moedaConvertida === 'dolar') {
        valorConvertido = valorParaConverter / taxaRealDolar;
    } else if (moedaInicial === 'real' && moedaConvertida === 'euro') {
        valorConvertido = valorParaConverter / taxaRealEuro;
    } else if (moedaInicial === 'dolar' && moedaConvertida === 'real') {
        valorConvertido = valorParaConverter * taxaRealDolar;
    } else if (moedaInicial === 'dolar' && moedaConvertida === 'euro') {
        valorConvertido = valorParaConverter * taxaDolarEuro;
    } else if (moedaInicial === 'euro' && moedaConvertida === 'real') {
        valorConvertido = valorParaConverter * taxaRealEuro;
    } else if (moedaInicial === 'euro' && moedaConvertida === 'dolar') {
        valorConvertido = valorParaConverter * taxaEuroDolar;
    } else {
        valorConvertido = valorParaConverter; // Caso as moedas sejam as mesmas, mantém o valor original
    }

    // Exibição do resultado no parágrafo "valorConvertido"
    const paragrafoValor = document.getElementById('valorConvertido');
    paragrafoValor.textContent = `O valor inserido equivale a: ${valorConvertido.toFixed(2)} ${moedaConvertida.toUpperCase()}`;
}
