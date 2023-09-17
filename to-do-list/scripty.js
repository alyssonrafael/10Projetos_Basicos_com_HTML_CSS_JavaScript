
document.addEventListener('DOMContentLoaded', function() { //so será carregado quando o HTML estiver completamente carregado
    const taskInput = document.getElementById('taskInput'); // criando variaveis que receberam algo apartir do html o clique ou prenchimento de algo
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    function addTask() { //criando um fuction para adicionar as task
        const taskText = taskInput.value.trim(); // auqui e obtido o valor que foi passado na minha taskInput

        if (taskText !== '') { //verifica se o campo de entrada nao esta vazio
            const taskItem = document.createElement('li'); // cria um novo elemento da lista chmado taskItem
            taskItem.innerHTML = `
                <input type="checkbox" class="custom-checkbox"> 
                <span>${taskText}</span>
                <button class="deleteTask">Excluir</button>
            `;//nesse trcho do codigo e inserido no html um checkbox um span e um botao de exclusao para esse elemento e dentro do span vai estar o conteudo do tasktext
            taskList.appendChild(taskItem);//adiciona um novo elemenro a lista existente no documento
            taskInput.value = '';//limpa o campo de entrada novamente
        }
    } // fim da fuction

    addTaskButton.addEventListener('click', addTask); //chamo a funçao se o botao dor clicado 

    taskInput.addEventListener('keydown', function(event) { //evento que ouve se a tecla foi precionada dentro do espaço de entrada de texto
        if (event.key === 'Enter') { // verifica se foi a tecla enter que foi precionada
            event.preventDefault();//Isso previne o comportamento padrão associado à tecla "Enter" dentro de um formulário. Em formulários HTML, a tecla "Enter" geralmente envia o formulário, mas aqui queremos evitar isso para que a página não seja recarregada.
            addTask();//adicionamos a nova tarefa
        }
    });

    taskList.addEventListener('click', function(event) { //evento de clique na lista de tarefas
        const target = event.target //armazena o elemento que foi clicado
        if (event.target.classList.contains('deleteTask')) { //verifica se o botao clicado foi o de exclusao 
            event.target.parentElement.remove(); // se foi ele vai remover o elemento da lista
        } else if (target.type === 'checkbox') { // se foi po chekbox que foi clicado
            const taskText = target.nextElementSibling;//obtendo o elemento do span que essa chekbox referencia
            taskText.style.textDecoration = target.checked ? 'line-through' : 'none' ; // e aqui estamos colocando o traço que corta as palavras quando a chekbox e celecionada
        }
    });
});
