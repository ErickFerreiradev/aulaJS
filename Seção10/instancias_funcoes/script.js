function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro
}
 let maltes = criarCachorro("Maltes", 4, "Branco");

 console.log(maltes);