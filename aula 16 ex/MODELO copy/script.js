
 var num=document.querySelector('input#txtn')
 var lista=document.querySelector('select#res')
 var fim=document.getElementById('final')
 let valores = []//O VETOR ONDE SERÃO ARMAZENADOS OS VALORES

 function isNumero(n){
    if(Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
 }

 function inLista(n, l){
     if (l.indexOf(Number(n)) !=-1){
         return true
     }else{
         return false
     }

 }

 function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) 
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado`
        lista.appendChild(item)
        fim.innerHTML=''//QUANDO ADICIONAR UM ELEMENTO ELE LIMPA O RESULTADO
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value=''
    num.focar()
 }

function finalizar (){
    if (valores.length ==0){
        alert('Adicione valores antes finalizar')
    }else{
        let tot=valores.length
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        for (let pos in valores){
            soma +=valores[pos]
            if(valores[pos]>maior)
                maior=valores[pos]
            if(valores[pos] < menor)
                menor=valores[pos]
            
            }
        fim.innerHTML=''
        fim.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        fim.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
        fim.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`

        fim.innerHTML+=`<p>Somando todos os valores, temos ${soma}</p>`
        fim.innerHTML+=`<p>A média de todos os valores é igual a  ${soma/tot}</p>`
        

        }

        
    }
