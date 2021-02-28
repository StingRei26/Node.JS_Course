// Object property shorthand

const name = 'Rei'; 
const age = 31; 

const user  = {
    name,
    age: age, 
    location: 'Jersey',  
}

console.log(user); 

// Object destructuring

const product = {
    label : "This is the lable", 
    price : 3, 
    stock : 201, 
    salesPerson : undefined
}

// const label = product.label; 
// const stock = product.stock; 


//New way 

// const {label, stock} = product;

// To nename

// const {label:NewLabel, stock, rating = 5} = product;

// console.log(NewLabel, stock, rating); 


// console.log(product); 

const transaction = (type, { label, stock}) => {
    console.log(type, label, stock)
}


transaction('order', product)


