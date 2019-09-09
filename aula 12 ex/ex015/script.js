function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=window.document.getElementById('res')
    
    if(fano.value.lenght == 0 || fano.value>ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')

    }else{
        var fsex=document.getElementsByName('radsex')
        var idade=ano - Number(fano.value)
        res.innerHTML=`A idade calculada foi ${idade}`
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')        
        if (fsex==[0]){
            genero='Masculino'
        
        }
}