var idade=12
console.log(`Sua idade é ${idade}`)
if (idade<16){
    console.log('Não vota')
}else if(idade <18 || idade >65){
    console.log('voto opicional')
}else { 
    console.log('voto obrigatório')
}