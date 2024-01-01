//seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//funções
const getLetterLowerCase = () =>{
    return(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
};
const getLetterUpperCase = () =>{
    return(String.fromCharCode(Math.floor(Math.random() * 26) + 65 ));
};
const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString();
};
const getSymbol = () =>{
    const symbols = "(){}[]=<>/.,!@#$%=-"
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => { //funçao que ira gerar a senha e conforme o usuario indicar os tipos de caracteres que eole deseja 
    let password = "";
    const passwordLength = 10;
    const generators = [];

    const checkboxLower = document.querySelector("#letras").checked;
    const checkboxNumber = document.querySelector("#numeros").checked;
    const checkboxSymbol = document.querySelector("#simbolos").checked;

    if (checkboxLower) generators.push(getLetterLowerCase, getLetterUpperCase);
    if (checkboxNumber) generators.push(getNumber);
    if (checkboxSymbol) generators.push(getSymbol);

    const selectedGeneratorsCount = generators.length;

    if (selectedGeneratorsCount === 0) {
        alert("Selecione pelo menos um tipo de caractere para gerar a senha.");
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedGeneratorsCount);
        const randomValue = generators[randomIndex]();

        password += randomValue;
    }

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

//eventos
generatePasswordButton.addEventListener("click",()=>{
    generatePassword(      
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});

// Evento do botão de cadastro
const botaoCadastro = document.querySelector('input[type="submit"]');

// Adiciona um evento de clique ao botão
botaoCadastro.addEventListener('click', function(event) {
    // Recarrega a página
    window.location.reload();

    // Evita o comportamento padrão do botão (submit do formulário)
    event.preventDefault();
});

// Evento do botão de copiar senha
const botaoCopiarSenha = document.getElementById('copy-password');
const campoSenha = document.getElementById('password-display');

// Adiciona um evento de clique ao botão de copiar senha
botaoCopiarSenha.addEventListener('click', function() {
    // Seleciona o texto da senha
    const senha = campoSenha.innerText;

    // Cria um elemento de área de texto temporário para copiar a senha
    const campoTemporario = document.createElement('textarea');
    campoTemporario.value = senha;

    // Adiciona o campo temporário à página
    document.body.appendChild(campoTemporario);

    // Seleciona e copia o texto da senha
    campoTemporario.select();
    document.execCommand('copy');

    // Remove o campo temporário da página
    document.body.removeChild(campoTemporario);

    // Exibe uma mensagem informando que a senha foi copiada
    alert('Senha copiada para a área de transferência!');
});
