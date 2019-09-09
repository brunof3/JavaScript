function carregar() {

var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var men=window.document.getElementById('mensagem')

var data=new Date
var hora=data.getHours()
var min=data.getMinutes()
var hora=8
msg.innerHTML=`Agora são ${hora} horas e ${min} minutos`


if (hora <=6){
    //BOA NOITE
    img.src = "fotonoite.png"
    document.body.style.background="#142442"
    men.innerHTML='Boa Noite!'
}else if (hora>=6 && hora<=12){
    //BOM DIA
    img.src= 'fotomanha.png'
    document.body.style.background='#fffbd5'
    men.innerHTML='Bom Dia!'
}else if (hora>=12 && hora <=18){
    //BOA TARDE
    img.src='fototarde.png'
    document.body.style.background='#e79966'
    men.innerHTML="Boa Tarde!"

}else if (hora>=18 && hora <=24 ) {
    //BOA NOITE
    img.src='fotonoite.png'
    document.body.style.background='#142442'
    men.innerHTML="Boa Noite!"
}else {
    men.innerHTML='[ERRO] hora inválida!'
    alert('[ERRO] Hora Inválida!!')
}

}

