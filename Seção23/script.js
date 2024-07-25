//  filter

const arr = [1, 2, 3 , 4, 5]

const high = arr.filter((n) =>{

if( n >= 3){
    return n
}
    
})

// console.log(high)

const users = [
    {name: 'Erick', available: true},
    {name: 'Pedro', available: false},
    {name: 'Maria', available: false},
    {name: 'Kety', available: true},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

// console.log(availableUsers)
// console.log(notAvailableUsers)

// Map

const products = [
    {name: 'Camisa', price: 10, category: 'Roupas'},
    {name: 'Calça', price: 20, category: 'Roupas'},
    {name: 'Fogão', price: 13, category: 'Eletro'},
    {name: 'Cafeteira', price: 25, category: 'Eletro'},
]

products.map((product) =>{
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

// console.log(products)

// Destructuring

const fruits = ['maça', 'banana', 'laranja']

const[f1, f2, f3] = fruits

const productDetails = {
    name: 'Mouse',
    price: 40,
    category: 'Periféricos',
    color: 'Cinza'
}

const {name: productName, price, category: productCategory, color} = productDetails

// console.log(`O nome do procuto é ${productName}`)

// Spread operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

// console.log(a3)


// Classes

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }


    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const camisa = new Product('camisa gola V', 20)

// console.log(camisa.name)

// console.log(camisa.productWithDiscount(20))

// Herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log('As cores são:')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapeu', 30, ['Preto', 'Azul', 'Verde'])

hat.showColors()