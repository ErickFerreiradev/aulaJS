// const validarDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1900-2024]{4}/

console.log(validarDataNasc.test("05/03/2000"))
console.log(validarDataNasc.test("05/03/20"))
console.log(validarDataNasc.test("05-03-2000"))
console.log(validarDataNasc.test("99-03-2000"))