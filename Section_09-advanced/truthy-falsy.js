const products = [{food: 'hamburger'}]
const product = products[0]

/*
if (product !== undefined) {
    console.log('Product found!')
} else {
    console.log('Product not found')
}
*/

// truthy - values that resolve to true in a boolean context
// falsy - values that resolve to false in a boolean context

/* 
It is easiest to define what is falsy, and everything else is truthy:
Falsy - false, 0, '', null, undefined, NaN

- WATCH OUT: An empty array or object is truthy!
- Truthy-Falsy is best used to search for the presence of something
*/

if (product) {
    console.log('Product found!')
} else {
    console.log('Product not found')
}

