
 var num=document.querySelector('input#txtn')
 var res=document.querySelector('select#res')
 var fim=document.getElementById('final')


 function adicionar(){
    
    if (num.value.length==0){
        alert('[ERRO] Favor Adicione um número')
    }else{
        var n=Number(num.value)
        var item=document.createElement('option')
        item.innerHTML=`Valor ${n} foi adicionado`
        res.appendChild(item)

        if(n>100){
            alert('Valor inválido ou já encontrado na lista')
            c.innerText=''
        }
        if(c.value.length==0 ){
            c.remove(c.push)
        }
      if(item==n){
          alert('erro')
          c.remove(c.push)
      }
     }
}

function finalizar(){
   
    
        var n=Number(num.value)
        fim.innerHTML=`Ao todo temos ${res.length} números cadastrados`
  
        fim.innerHTML+=`O maior número foi ${n}`
}

    


