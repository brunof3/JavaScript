function parimp (n){
    if(n%2==0){
        console.log('par')
    }else{
        console.log('impar')
    }
}
let res1 = parimp(39)

//---------------------------------------------------------------

function parimp1(n){
    if (n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
console.log(parimp1(22))

//----------------------------------------------------------------

function parimpar (n){
    if(n%2==0){
        return 'Par'    
    }else{
        return 'ìmpar'
    }
}
let res = parimpar(39)
console.log(res)