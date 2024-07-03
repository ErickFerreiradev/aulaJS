// let p = new Promise.resolve((resolve, reject) => {
//     if(num == 2){
//         resolve(`o número pe ${num}`)
//     } else{
//         reject(new Error("Falhou"))
//     }
// })

function verificarNumero(num){
 return new Promise((resolve, reject) => {
    if(num == 2){
        resolve(console.log(`o número é ${num}`))
    } else{
        reject(console.log(new Error("Falhou")))
    }
})
}

verificarNumero(2)
verificarNumero(3)