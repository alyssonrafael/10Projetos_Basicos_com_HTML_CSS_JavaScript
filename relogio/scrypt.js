
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();


    if(hr<10) hr = '0' + hr;
    if(min<10) min = '0' + min;
    if(seg<10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

function atualizaData(){
    let dateToday = new Date();
    let diadehj = dateToday.getDate();
    let mesdehj = dateToday.getMonth() +1;
    let anodehj = dateToday.getFullYear();

    if(diadehj<10) diadehj = '0' + diadehj;
    if(mesdehj<10) mesdehj = '0' + mesdehj;

    dia.textContent = diadehj;
    mes.textContent = mesdehj;
    ano.textContent = anodehj;

}
//chamando a funçao da data
atualizaData();



