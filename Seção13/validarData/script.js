const validarEmail = /\w+@\w+\.\w+/

console.log(validarEmail.test("erick@gmail.com"))
console.log(validarEmail.test("erick@gmail"))
console.log(validarEmail.test("gmail.com"))