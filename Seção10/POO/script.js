const cachorro = {
    raca: 'SRD',
    latir: function(){
        console.log("Au Au");
    },
    rosnar: function(){
        console.log("Grrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}

cachorro.setRaca("Pastor Alemão")
console.log(cachorro.raca)
console.log(cachorro.getRaca())