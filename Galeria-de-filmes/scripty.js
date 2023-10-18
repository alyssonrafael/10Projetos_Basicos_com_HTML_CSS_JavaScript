function adicionarFilme() {
    var campoFilme = document.querySelector('#filme')
    var campoNomeFilme = document.querySelector('#nomeFilme'); // Adicionado campo para o nome do filme
    var nomeFilme = campoNomeFilme.value; // Obtendo o valor do campo do nome do filme
    var filmeFavorito = campoFilme.value

    if (filmeFavorito.endsWith('jpg')||filmeFavorito.endsWith('png')){
    listarFilmesNaTela(filmeFavorito, nomeFilme)
    } else {
      alert("imagem invalida")
    }
    campoFilme.value= ""
    campoNomeFilme.value=""
  }
  
  function listarFilmesNaTela(filme, nomeFilme) {
    var listaFilmes = document.querySelector('.lista-filmes');
    var novoElemento = document.createElement('div');
    novoElemento.classList.add('filme-container');

    var nomeElemento = document.createElement('div');
    nomeElemento.classList.add('filme-nome');
    nomeElemento.textContent = nomeFilme;
    novoElemento.appendChild(nomeElemento);

     // Adicionando um link <a> em volta da imagem
     var link = document.createElement('a');
     link.href = filme;
     link.target = "_blank";
     link.innerHTML = "<img src=" + filme + " alt='" + nomeFilme + "'>";
     novoElemento.appendChild(link);

    var botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('excluir-btn');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function() {
        novoElemento.remove();
    }

    novoElemento.appendChild(botaoExcluir);
    listaFilmes.appendChild(novoElemento);
}
  

  