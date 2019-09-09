function verificar (){
    var ini=document.getElementById('txti')
    var fim=document.getElementById('txtf')
    var passo=document.getElementById('txtp')
    var res=document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length== 0 || passo.value.length == 0) {
        alert('erro')
        res.innerHTML='Impossível Contar'
    }else{
        res.innerHTML='contando<br>'
        var i=Number(ini.value)
        var f=Number(fim.value)
        var p=Number(passo.value)
         if (p<=0){
             alert('Passo inválido, considerando PASSO =1')
             p=1
         } 
        if(i<f){
            for(var c=i; c<f;c+=p){
            res.innerHTML+=`${c} `
            c++
            }
            }else{
           
           for(var c=i;c>f;c-=p){
           res.innerHTML+=`${c} `
                
                c++
            }
         }      
    }
} 