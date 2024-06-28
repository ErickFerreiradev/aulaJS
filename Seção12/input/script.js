function checarNumero(num){
    let number = Number(number);
    if(Number.isNan(number)){
        console.log("Favor, digitar somente números")
    } else{
        return number
    }
}

checarNumero(5)
checarNumero("saff")
