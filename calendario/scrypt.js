const dataAtual = new Date()

prencher_dias:{
    let el = document.querySelector('.numeros-dos-dias');
    for(i=1; i <= 31; i++){
            if(i == dataAtual.getDate()){
                el.innerHTML+='<span class="day-selected">'+i+'</span>'
            }else{
                el.innerHTML+='<span>'+i+'</span>';
            }
    }
}

