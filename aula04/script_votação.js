
function eleitor(){
    let old = window.document.getElementById('idade')
    let stts = Number(old.value)
    let msg = window.document.querySelector('div#stat')
    if (stts < 16) {
        msg.innerHTML = `Voce tem apenas ${stts} anos. <strong>Não</strong> pode votar.`
    } 
    else if  (stts < 18 || stts > 65) {
        msg.innerHTML = `Voce tem ${stts} anos. Voto facultativo.`
    }
    else {
        msg.innerHTML = `Voce possui ${stts} anos e é <strong>OBRIGATÓRIO</strong> seu voto.`
    }
}

function carregar(){
    let msg2 = window.document.getElementById('msg2')
    let img = window.document.getElementById('imagem')
    let data = new Date()
let hora = data.getHours()
    let minutos = data.getMinutes()
    msg2.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora <= 11) {
        img.src = 'manhã.jpg'
        posMsg.innerHTML = 'Bom Dia! 🤗'
    }
    else if (hora == 12) {
        img.src = 'meiodia.jpg'
        posMsg.innerHTML = 'Bom Almoço! 😋'
    }
    else if (hora <= 19) {
        img.src = 'tarde.jpg'
        posMsg.innerHTML = 'Boa Tarde! 😄'
    }
    else  {
        img.src = 'noite.jpg'
        posMsg.innerHTML = 'Boa Noite! 😴'
    }
}