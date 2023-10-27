 var titulo = window.document.getElementById('titulo');
 var paragrafo = window.document.getElementById('paragrafo');

function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = 19 //data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var minutosFormatados = String(minutos).padStart(2, '0');
    var segundosFormatados = String(segundos).padStart(2, '0');
    msg.style.font = 'bold 22pt Arial';
    msg.innerHTML = `Agora são ${hora}:${minutosFormatados}:${segundosFormatados}`;
    

    if (hora >= 0 && hora < 12) {
        img.src = '/PaginaDinamica/imagens/manha.png';
        document.body.style.backgroundImage = 'url(/PaginaDinamica/imagens/amanhecer.jpg)'
        document.body.style.backgroundSize = 'cover';
        titulo.style.color = 'white';
        paragrafo.style.color = 'white';

    } else if (hora >= 12 && hora <= 18) {
        img.src = '/PaginaDinamica/imagens/tarde.png'
        document.body.style.backgroundImage = 'url(/PaginaDinamica/imagens/atardecer.jpg)'
        document.body.style.backgroundSize = 'cover';
    } else {
        img.src = '/PaginaDinamica/imagens/noite.png';
        document.body.style.backgroundImage = 'url(/PaginaDinamica/imagens/estrelado.jpg)';
        document.body.style.backgroundSize = 'cover';
        titulo.style.color = 'white';
        paragrafo.style.color = 'white';
    }
}

setInterval(carregar, 1000);

