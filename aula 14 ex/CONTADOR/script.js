function contar (){
    var ini = document.getElementById('txti') 
    var fim=document.getElementById('txtf')
    let passo=document.getElementById('txtp')
    let res=document.getElementById('res')
    if(ini.value.length == 0|| fim.value.length== 0|| passo.value.length == 0){
        window.alert('[ERRO]Faltam dados')
        res.innerHTML='Impossível contar'
    }else{
       res.innerHTML=`contando: <br>`
       var i=Number(ini.value)//COMO OS VALORES DE INPUT MESMO SENDO NÚMEROS SE TRANSFORMAM EM TEXTO É NECESSÁRIO FAZER A CONVERSÃO PARA NÚMERO
       var f=Number(fim.value)//COMO OS VALORES DE INPUT MESMO SENDO NÚMEROS SE TRANSFORMAM EM TEXTO É NECESSÁRIO FAZER A CONVERSÃO PARA NÚMERO
       var p=Number(passo.value)//COMO OS VALORES DE INPUT MESMO SENDO NÚMEROS SE TRANSFORMAM EM TEXTO É NECESSÁRIO FAZER A CONVERSÃO PARA NÚMERO
       if(p<=0){
           alert('Passo Inválido, considerando PASSO = 1')
           p=1
       } 
       if(i<f){
            //CONTAGEM CRESCENTE
        for(let c=i; c<=f;c+=p){
            res.innerHTML+=`${c} \u{1F449}`
        }
        } else {
            //CONTAGEM DESCRESCENTE
            for(let c=i; c>=f;c-=p){
            res.innerHTML+=`${c} \u{1f448}`
        }
        
       }
      res.innerHTML+=`\u{1f3c1}`
    }
}