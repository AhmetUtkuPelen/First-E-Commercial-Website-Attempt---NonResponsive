const openShopiing = document.querySelector('.shopping')
const closeShopping = document.querySelector('.closeShopping')
const list = document.querySelector('.list')
const listCard = document.querySelector('.listCard')
const total = document.querySelector('.total')
const body = document.querySelector('.body')
const quantity = document.querySelector('.quantity')



openShopiing.addEventListener('click', () =>{
    body.classList.add('active')
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})

let products = [

{
    id:1,
    name:'URUN1',
    images : '1.png',
    price : 1
},

{
    id:2,
    name:'URUN2',
    images : '1.png',
    price : 1
},

{
    id:3,
    name:'URUN3',
    images : '1.png',
    price : 1
},

{
    id:4,
    name:'URUN4',
    images : '1.png',
    price : 1
},

{
    id:5,
    name:'URUN5',
    images : '1.png',
    price : 1
},

{
    id:6,
    name:'URUN6',
    images : '1.png',
    price : 1
},

{
    id:7,
    name:'URUN7',
    images : '1.png',
    price : 1
},

{
    id:8,
    name:'URUN8',
    images : '1.png',
    price : 1
},

]


let listCards = []

const App = () => {

    products.forEach((value,key) => {

        let newDiv = document.createElement('div')
        newDiv.classList.add('item')

        newDiv.innerHTML = `
        
            <img src = '${value.images}'>
            <div class ='title'>${value.name}<div>
            <div class='price'>${value.price.toLocaleString()}</div>
            <button onclick='addToCard(${key})'> Add To Card </button>
        `
        list.appendChild(newDiv)
    })
}
App()


const addToCard = (key) => {

if(listCards[key] == null ){
    
    listCards[key] = JSON.parse(JSON.stringify(products[key]))
    listCards[key].quantity = 1

}

    reloadCard()

}

const reloadCard = () => {

listCard.innerHTML = ''

let count = 0

let totalPrice = 0

listCards.forEach((value,key) => {

totalPrice = totalPrice + value.price

count = count + value.quantity

if(value != null){

let newDiv = document.createElement('li') 

newDiv.innerHTML = `

<div><img src = '${value.images}'><div>
<div class='cardTitle'>${value.name}<div>
<div class ='cardPrice'>${value.price.toLocaleString()}</div>
<div><button style='background-color:black' class='cardButton' onclick='changeQuantity(${key},${value.quantity - 1})'>-<button></div>
<div><button style='background-color:black' class='cardButton' onclick='changeQuantity(${key},${value.quantity + 1})'>+<button></div>

`
listCard.appendChild(newDiv)

}

    total.innerText = totalPrice.toLocaleString()
    quantity.innerText = count

})

}





















































































































































































const changeQuantity = (key , quantity) =>  {

if (quantity == 0){
    delete listCards[key]
}else{
    listCards[key].quantity = quantity
    listCards[key].price = quantity*products[key].price
}
reloadCard()

}