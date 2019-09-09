function gerar(){
    var num=document.getElementById('txtn')
    var res=document.getElementById('seltab')

    if(num.value.length==0){
        window.alert('Por Favor escreva um número')
    
    }else{  
        var n=Number(num.value)
        var c=1
        res.innerHTML=''
        
        while(c<=10){
            var item=document.createElement('option')
            item.innerHTML=`${n}x${c}=${n*c}`
            item.value=`${c}`
            res.appendChild(item)
            c++
        }

    }
    
}