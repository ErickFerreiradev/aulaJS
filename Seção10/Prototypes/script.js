class cachorro{
    constructor(raca, cor){
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("Au au")
    }
}

cachorro.prototype.raca = "SRD"

let patas = Symbol();

cachorro.prototype[patas] = 4

let labrador = new cachorro("labrador", "preto")
 
labrador.latir()

//acessando symbol

console.log(cachorro.prototype[patas]);
console.log(labrador.prototype[patas])