const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
genereteBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

genereteBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        alert("insira um texto para gerar o qr code")
        return;
    }
    genereteBtn.innerText = "gerando o Qr code....";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener('load', () =>{
        genereteBtn.innerText = "Gerar Qr code";
        container.classList.add('active');
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
});