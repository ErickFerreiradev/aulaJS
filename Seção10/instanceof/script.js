class mamifero{
    constructor(patas){
        this.patas = patas
    }
}

let coiote = new mamifero(4)

console.log(coiote.patas)

class cachorro extends mamifero{
    constructor(patas, raca){
        super(patas,patas)
        this.raca = raca
    }

    latir(){
        console.log("Au au")
    }
}

let pug = new cachorro(4, "pug")

pug.latir()

console.log(new cachorro instanceof mamifero)