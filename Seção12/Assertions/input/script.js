const reg1 = new RegExp("Bola")

console.log(reg1.test("tem bola?"))
console.log(reg1.test("não tem"))

const reg2 = /bola/

console.log(reg1.test("tem bola?"))
console.log(reg1.test("não tem"))
 
let text = "bola mansa"

console.log(reg2.teste(text))

const reg3 = /[0-9]/  //facil pra ver se uma string tem números

console.log(reg3.teste("4"))