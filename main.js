function carregar() {
const msg = document.querySelector('#msg')
const img = document.querySelector('#foto')
const data = new Date()
const dataM = new Date()
let hora = data.getHours()
let Minutos = dataM.getMinutes()

msg.innerHTML = `Agora são ${hora}:${Minutos} 🕒`

if (hora >= 0 && hora < 12) {
    img.innerHTML = '<p>Bom dia!</p>' + '<img src="img/fotomanha.png" alt="foto do dia">'
    document.body.style.background = 'rgb(70, 142, 236)'
} else if (hora < 18) {
    img.innerHTML = '<p>Boa Tarde!</p>' + '<img src="img/fototarde.png" alt="foto do tarde">'
    document.body.style.background = 'orange'
} else {
    img.innerHTML = '<p>Boa Noite!</p>' + '<img src="img/fotonoite.png" alt="foto da noite">'
    document.body.style.background = 'black'
}
}