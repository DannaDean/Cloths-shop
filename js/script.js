//hamburger

const menuBtn = document.getElementById('lines-container')
const menu = document.getElementById('nav')
let menuOpen = false

menu.style.opacity = '0'

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menu.style.opacity = '1'
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menu.style.opacity = '0'
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})

//slider ---------------------------------------

const slider = document.getElementById('slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const data = document.getElementById('data')
const sliderBg = document.getElementById('slider-container')
const sliderDots = document.querySelector(".dots")

let id = 0

const images = [
    "slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg"
]

const captions = [
    "20% of almost everything", "Spring Season", "New Arivals", "Get ready for vacation"
]

function slideShow(id) {
    slider.style.backgroundImage = `linear-gradient(rgba(31, 39, 68, 0.3),rgba(31, 39, 68, 0.3)),url(img/${images[id]})`
    slider.style.backgroundSize = 'cover'
    data.innerHTML = captions[id]
}

arrowLeft.addEventListener('click', () => {
    if (id <= 0) {
        id = images.length - 1
    } else {
        id -= 1
    }

    slideShow(id)
})

arrowRight.addEventListener('click', () => {

    if (id >= images.length - 1) {
        id = 0
    } else {
        id += 1
    }

    slideShow(id)
})

slideShow(0)

Array.from(images).forEach(image => {
    sliderDots.innerHTML += `
        <div class="dot"></div>    
    `
})

const dot = document.getElementsByClassName('dot')

Array.from(dot).forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        id = idx

        slider.style.backgroundImage = `linear-gradient(rgba(31, 39, 68, 0.3),rgba(31, 39, 68, 0.3)),url(img/${images[id]})`
        slider.style.backgroundSize = 'cover'
        data.innerHTML = captions[id]
    })
})


// shop products --------------------------------------------

const clothes = [
    {
        name: "Colourblock Brush Print Patched Pocket Drop Shoulder Belted Shirt Dress",
        price: 19.49,
        image: "https://img.ltwebstatic.com/images3_pi/2021/11/22/1637564770290ee2b2ef109c012145a1bfc1fc5e0d_thumbnail_600x.webp"
    },
    {
        name: "SHEIN Frenchy Solid Keyhole Back Elastic Waist Jumpsuit",
        price: 19.99,
        image: "https://img.ltwebstatic.com/images3_pi/2021/07/26/16272692872ae8233030d9aad38e56be852bfb1a52_thumbnail_600x.webp"
    },
    {
        name: "Floral Print Butterfly Sleeve Belted Dress",
        price: 15.49,
        image: "https://img.ltwebstatic.com/images3_pi/2023/01/30/1675062591a2abbdc73d0a98760edaa3e50198079d_thumbnail_600x.webp"
    },
    {
        name: "Boys Slant Pocket Denim Dungarees",
        price: 18.49,
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/01/167523552170661bfff6b16c9b69f61df73fe3cf78_thumbnail_600x.webp"
    },
    {
        name: "Boys Solid Fold Pleated Trousers",
        price: 8.99,
        image: "https://img.ltwebstatic.com/images3_pi/2022/01/13/1642051709b5cfb1eae05546adc1613bf24f7a8284_thumbnail_600x.webp"
    },
    {
        name: "Square Neck Knot Cuff Button Front Dress",
        price: 16.49,
        image: "https://img.ltwebstatic.com/images3_pi/2023/02/02/16753078886ed9c97788172305633279e6d6df7b66_thumbnail_600x.webp"
    },
]

const cartContainer = document.getElementById('clothes-content')
const shoppingCart = document.getElementById('shop')
const viewBag = document.getElementById('check')

clothes.forEach(product => {
    cartContainer.innerHTML +=  `
    <div class="product">
        <div class="img-btn">
            <img src='${product.image}'>
            <h2>${product.name}</h2>
            <p>GBP£ ${product.price}</p>
            <button class="cart-btn">Add To Bag</button>
        </div>
    </div>
    `
})

const cartBtn = document.getElementsByClassName('cart-btn')
const cartContainerItself = document.getElementById('shop-card')
const countProduct = document.getElementById('count')
const total = document.getElementById('total-sum')
let countp = 0
let cart = []

function addToCart() {
    cartContainerItself.innerHTML = ''
    cart.forEach(item => {
        cartContainerItself.innerHTML += `
            <div class="cart-product">
                <div class="cart-text">
                    <img id="cart-img" src="${item.image}">
                    <div class="text">
                        <h2>${item.name}</h2>
                        <p>GBP£ ${item.price}</p> 
                    </div>               
                </div>
                <button class="remove-product">X</button>
            </div>
        `  
    })

    const removeBtn = document.getElementsByClassName('remove-product')

    Array.from(removeBtn).forEach((btn, id) => {
        btn.addEventListener('click', () => {
            cart = cart.filter((item, idx) => id !== idx)
            countProduct.innerText = countp -= 1
            if(cart == 0) {
                 emptyBag.style.display = "block"
                 emptyBagImg.style.display = "block"
                 total.style.display = "none"
                 viewBag.style.display = "none"
            }
               
            
            addToCart()
        })
        
    })

    let totalSum = cart.reduce((s, prod) => s + prod.price, 0)
    total.innerHTML = `Total: GBP£ ${Math.round((totalSum * 100))/100}`
    console.log(total)
}

const emptyBag = document.getElementById('empty-bag')
const emptyBagImg = document.getElementById('shopping-img')

Array.from(cartBtn).forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        if(!cart.includes(clothes[idx])) {
            cart.push(clothes[idx])
            countProduct.innerText = countp += 1
        }
           emptyBag.style.display = "none"
           emptyBagImg.style.display = "none"
           total.style.display = "block"
           viewBag.style.display = "block"

        addToCart()
        
    })
})


//Light Mode / Dark Mode -----------------------------------

const header = document.getElementById('header')
const modeBtn = document.getElementById('mode-icon')
const footer = document.getElementById('footer')
const modeCart = document.querySelector('.cart-content')
const body = document.querySelector('body')
const heart = document.getElementById('heart')

if(localStorage.getItem("mode") == "light") {
    modeBtn.src = "img/sun.png"
    body.classList.add('dark-mode')
    header.style.backgroundColor = "#353434"
    footer.style.backgroundColor = "#353434"
    modeCart.style.backgroundColor = "#353434"
    menu.style.backgroundColor = "#353434"
    shoppingCart.src = "/img/white-shop.png"
    heart.src = "/img/light-heart.png"
    emptyBagImg.src = "/img/shopgrey.png"
} else {
    modeBtn.src = "/img/moon.png"
    body.classList.remove('dark-mode')
    body.style.transition = "0.5s"
    header.style.backgroundColor = "#fff"
    modeCart.style.backgroundColor = "#fff"
    menu.style.backgroundColor = "#fff"
    shoppingCart.src = "/img/dark-shop.png"
    heart.src = "/img/dark-heart.png"
    emptyBagImg.src = "/img/shopblue.png"
}

modeBtn.addEventListener('click', () => {

    if(body.classList == "") {
        modeBtn.src = "img/sun.png"
        body.classList.add('dark-mode')
        header.style.backgroundColor = "#353434"
        footer.style.backgroundColor = "#353434"
        modeCart.style.backgroundColor = "#353434"
        menu.style.backgroundColor = "#353434"
        shoppingCart.src = "/img/white-shop.png"
        heart.src = "/img/light-heart.png"
        emptyBagImg.src = "/img/shopgrey.png"
        localStorage.setItem("mode", "light")
    } else {
        modeBtn.src = "/img/moon.png"
        body.classList.remove('dark-mode')
        body.style.transition = "0.5s"
        header.style.backgroundColor = "#fff"
        modeCart.style.backgroundColor = "#fff"
        menu.style.backgroundColor = "#fff"
        shoppingCart.src = "/img/dark-shop.png"
        heart.src = "/img/dark-heart.png"
        emptyBagImg.src = "/img/shopblue.png"
        localStorage.setItem("mode", "dark")
    }
})