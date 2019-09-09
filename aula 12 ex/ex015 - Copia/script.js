
function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.querySelector('div#res')
        
    if(fano.value.length == 0||Number(fano.value) >ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex=document.getElementsByName('radsex')
        var idade = ano-Number(fano.value)
        var genero=''

        var img=document.createElement('img')//CRIA UMA TAG IMG
        img.setAttribute('id','foto')//COLOCA UMA TAG NA IMG CRIADA ACIMA

        if (fsex[0].checked){//CASO MASCULINO ESTEJA MARCADO
            genero='Homem'
            if(idade>=0&&idade<13){
                img.setAttribute('src','foto-bebe-m.png')//COLOCA UM SRC NA TAG IMG PARA ENCONTRAR A IMAGEM PARA SER EXECUTADA
            }else if(idade>=13&&idade<21){
                img.setAttribute('src','foto-jovem-m.png')//COLOCA UM SRC NA TAG IMG  
            }else if(idade<50){
                img.setAttribute('src','foto-adulto-m.png')//COLOCA UM SRC NA TAG IMG  
            }else if(idade>50){
                img.src='foto-idoso-m.png'//TAMBÉM SE PODE USAR ESSA FÓRMULA
            }
        }else if (fsex[1].checked){//CASO FEMININO ESTEJA MARCADO
            genero='Mulher'
            if(idade>=0&&idade<13){
                img.setAttribute('src','foto-bebe-f.png')//COLOCA UM SRC NA TAG IMG PARA ENCONTRAR A IMAGEM PARA SER EXECUTADA
            }else if(idade>=13&&idade<21){
                img.setAttribute('src','foto-jovem-f.png')//COLOCA UM SRC NA TAG IMG PARA ENCONTRAR A IMAGEM PARA SER EXECUTADA
            }else if(idade<50){
                img.setAttribute('src','foto-adulto-f.png')//COLOCA UM SRC NA TAG IMG PARA ENCONTRAR A IMAGEM PARA SER EXECUTADA
            }else if(idade>50){
                img.src='foto-idoso-f.png'//TAMBÉM SE PODE USAR ESSA FÓRMULA
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)  //ADICIONAR UM ELEMENTO
    }
}
