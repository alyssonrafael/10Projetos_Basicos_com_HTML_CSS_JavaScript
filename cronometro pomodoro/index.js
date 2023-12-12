// Variáveis para armazenar referências aos elementos HTML e configurações do temporizador
let workTittle = document.getElementById('work'); // Elemento HTML com o ID 'work'
let breakTittle = document.getElementById('break'); // Elemento HTML com o ID 'break'

let workTime = 25; // Tempo de trabalho em minutos
let breakTime = 5; // Tempo de intervalo em minutos

let seconds = '00'; // Inicialização dos segundos como string '00'

// Função para exibir os valores iniciais na interface quando a página carregar
window.onload = () => {
    document.getElementById('minutos').innerHTML = workTime; // Exibir o tempo de trabalho inicial
    document.getElementById('segundos').innerHTML = seconds; // Exibir os segundos iniciais

    workTittle.classList.add('active'); // Adicionar a classe 'active' ao título 'work'
}

// Função para reproduzir o som quando o temporizador atingir zero
function playSound() {
    let audio = document.getElementById('audio');
    audio.play();
}

// Função para iniciar o temporizador
function start() {
    // Alterar a visibilidade dos botões 'Iniciar' e 'Reiniciar'
    document.getElementById('iniciar').style.display = "none"; // Esconder o botão 'Iniciar'
    document.getElementById('reiniciar').style.display = "block"; // Mostrar o botão 'Reiniciar'

    seconds = 59; // Configurar os segundos para 59 (um minuto)

    let workMinutes = workTime - 1; // Tempo de trabalho menos um minuto
    let breakMinutes = breakTime - 1; // Tempo de intervalo menos um minuto

    let breakCount = 0; // Contador para controlar o número de intervalos

    // Função que realiza a contagem regressiva
    let timerFunction = () => {
        // Atualizar a exibição dos minutos e segundos
        document.getElementById('minutos').innerHTML = workMinutes; // Exibir os minutos restantes
        document.getElementById('segundos').innerHTML = seconds; // Exibir os segundos restantes

        seconds = seconds - 1; // Reduzir um segundo


        if(seconds < 10){ //pequena verificaçao para adicionar um 0 se for menor que 10 para ficar mais bonito
            seconds = "0" + seconds
        }

        // Verificar se os segundos chegaram a zero
        if (seconds === "0"+0) {
            workMinutes = workMinutes - 1; // Reduzir um minuto do tempo de trabalho

            if(workMinutes < 10 ){ // pequena verificaçao para adicionar um 0 se for menor que 10 para ficar mais bonito
                workMinutes = "0" + workMinutes

            }

            // Verificar se o tempo de trabalho acabou
            if (workMinutes === "0" + -1) {
                if (breakCount % 2 === 0) {
                    // Iniciar o tempo de intervalo
                    workMinutes = "0" + breakMinutes; // Configurar os minutos para o tempo de intervalo
                    breakCount++; // Incrementar o contador de intervalos

                    // Alterar a classe dos títulos para refletir o intervalo
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');

                    playSound();
                } else {
                    // Continuar o tempo de trabalho
                    workMinutes = workTime; // Configurar os minutos para o tempo de trabalho
                    breakCount++; // Incrementar o contador de intervalos

                    // Alterar a classe dos títulos para refletir o trabalho
                    workTittle.classList.add('active');
                    breakTittle.classList.remove('active');

                    playSound();
                }
            }
            seconds = 59; // Reiniciar os segundos para 59
        }
    }

    // Iniciar a contagem regressiva com setInterval (a cada segundo)
    setInterval(timerFunction, 1000); // 1000ms = 1 segundo
}
