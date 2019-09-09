let amigo = {nome:'José',
sexo:'M',
 peso:85.4,
 engordar(p=0){
     console.log('Engordou')
     this.peso += p
    
 } 
}
if (sexo='M'){
    console.log('masculino')
}else{
    console.log('feminino')
}
amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg, é do sexo ${amigo.sexo}`)
