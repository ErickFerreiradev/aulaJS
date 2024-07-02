let p = Promise.resolve(5 + 1)

console.log("Outro código")

console.log(p)

// p.then((value) => {console.log(`O valor é ${value} `)})
p.then((value) => {return value + 4 })
.then((value) => {console.log(value)})


// falha promisse

let pro = Promise.resolve(new Error ("Não deu certo"))

console.log("lalala")

pro.then((value) => console.log(value))
.catch(reason => console.log("Falhou" + reason))