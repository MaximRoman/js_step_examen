const clothes = [
   {
        id: 1,
        name: "Unisex CVC Jersey Tee",
        description: "Unisex CVC Jersey Tee - BELLA + CANVAS 3001CVC",
        color: "white",
        type: "t-shirt",
        category: "men",
        image: "images/products images/id=1.jpg",
        stock: 50,
        price: 5.76, 
        quantity: 1
    },
    {
        id: 2,
        name: "Softstyle® T-Shirt",
        description: "Softstyle® T-Shirt - Gildan 64000",
        color: "dark gray",
        type: "t-shirt",
        category: "men",
        image: "images/products images/id=2.jpg",
        stock: 50,
        price: 2.17, 
        quantity: 1
    },
    {
        id: 3,
        name: "Unisex Jersey Tee",
        description: "Unisex Jersey Tee - BELLA + CANVAS 3001",
        color: "green",
        type: "t-shirt",
        category: "men",
        image: "images/products images/id=3.jpg",
        stock: 50,
        price: 5.63, 
        quantity: 1
    },
    {
        id: 4,
        name: "Heavy Cotton™ T-Shirt",
        description: "Heavy Cotton™ T-Shirt - Gildan 5000",
        color: "orange",
        type: "t-shirt",
        category: "men",
        image: "images/products images/id=4.jpg",
        stock: 50,
        price: 2.68, 
        quantity: 1
    },
    {
        id: 5,
        name: "DryBlend® 50/50 Long Sleeve T-Shirt",
        description: "DryBlend® 50/50 Long Sleeve T-Shirt - Gildan 8400",
        color: "blue",
        type: "long sleeve t-shirt",
        category: "men",
        image: "images/products images/id=5.jpg",
        stock: 50,
        price: 4.99, 
        quantity: 1
    },
    {
        id: 6,
        name: "Heavy Blend™ Hooded Sweatshirt",
        description: "Heavy Blend™ Hooded Sweatshirt - Gildan 18500",
        color: "black",
        type: "sweatshirt",
        category: "men",
        image: "images/products images/id=6.jpg",
        stock: 50,
        price: 7.55, 
        quantity: 1
    },
    {
        id: 7,
        name: "Heavy Blend™ Crewneck Sweatshirt",
        description: "Heavy Blend™ Crewneck Sweatshirt - Gildan 18000",
        color: "green",
        type: "sweatshirt",
        category: "men",
        image: "images/products images/id=7.jpg",
        stock: 50,
        price: 5.11, 
        quantity: 1
    },
    {
        id: 8,
        name: "Midweight Hooded Sweatshirt",
        description: "Midweight Hooded Sweatshirt - Independent Trading Co. SS4500",
        color: "white",
        type: "sweatshirt",
        category: "men",
        image: "images/products images/id=8.jpg",
        stock: 50,
        price: 8.37, 
        quantity: 1
    },
    {
        id: 9,
        name: "NuBlend® Hooded Sweatshirt",
        description: "NuBlend® Hooded Sweatshirt - JERZEES 996MR",
        color: "gray",
        type: "sweatshirt",
        category: "men",
        image: "images/products images/id=9.jpg",
        stock: 50,
        price: 12.81,
        quantity: 1
    },
    {
        id: 10,
        name: "Heavyweight Hooded Sweatshirt",
        description: "Heavyweight Hooded Sweatshirt - Independent Trading Co. IND4000",
        color: "blue",
        type: "sweatshirt",
        category: "men",
        image: "images/products images/id=10.jpg",
        stock: 50,
        price: 18.47,
        quantity: 1
    },
    {
        id: 11,
        name: "Unisex CVC Short Sleeve Crew",
        description: "Unisex CVC Short Sleeve Crew - Next Level 6210",
        color: "black",
        type: "crew",
        category: "women",
        image: "images/products images/id=11.jpg",
        stock: 50,
        price: 5.82, 
        quantity: 1
    },
    {
        id: 12,
        name: "Women's Ideal Racerback Tank",
        description: "Women's Ideal Racerback Tank - Next Level 1533",
        color: "white",
        type: "women's tank",
        category: "women",
        image: "images/products images/id=12.jpg",
        stock: 50,
        price: 2.04, 
        quantity: 1
    },
    {
        id: 13,
        name: "Women's Lightweight Cropped Hooded Sweatshirt",
        description: "Women's Lightweight Cropped Hooded Sweatshirt - Independent Trading Co. AFX64CRP",
        color: "pink",
        type: "sweatshirt",
        category: "women",
        image: "images/products images/id=13.jpg",
        stock: 50,
        price: 20.23,
        quantity: 1
    },
    {
        id: 14,
        name: "Women's CVC Short Sleeve Deep V",
        description: "Women's CVC Short Sleeve Deep V - Next Level 6640",
        color: "green",
        type: "t-shirt",
        category: "women",
        image: "images/products images/id=14.jpg",
        stock: 50,
        price: 3.21, 
        quantity: 1
    },
    {
        id: 15,
        name: "Women's Hooded Pullover",
        description: "Women's Omega Stretch Snap-Placket Hooded Pullover - J. America 8431",
        color: "gray",
        type: "pullover",
        category: "women",
        image: "images/products images/id=15.jpg",
        stock: 50,
        price: 13.62,
        quantity: 1
    },
    {
        id: 16,
        name: "Lightweight Hooded Sweatshirt",
        description: "Juniors' Heavenly Fleece Lightweight Hooded Sweatshirt - Independent Trading Co. SS650",
        color: "pink",
        type: "sweatshirt",
        category: "women",
        image: "images/products images/id=16.jpg",
        stock: 50,
        price: 7.85, 
        quantity: 1
    },
    {
        id: 17,
        name: "Women's Value Polyester Polo",
        description: "Women's Value Polyester Polo - FeatherLite 5100",
        color: "white",
        type: "shirt",
        category: "women",
        image: "images/products images/id=17.jpg",
        stock: 50,
        price: 10.06,
        quantity: 1
    },
    {
        id: 18,
        name: "Full-Zip Track Jacket",
        description: "Women's Poly-Tech Full-Zip Track Jacket - Independent Trading Co. EXP60PAZ",
        color: "black",
        type: "jacket",
        category: "women",
        image: "images/products images/id=18.jpg",
        stock: 50,
        price: 24.35,
        quantity: 1
    },
    {
        id: 19,
        name: "Women's Oxford Shirt",
        description: "Women's Oxford Shirt - Van Heusen 13V0002",
        color: "white",
        type: "shirt",
        category: "women",
        image: "images/products images/id=19.jpg",
        stock: 50,
        price: 12.23, 
        quantity: 1
    },
    {
        id: 20,
        name: "Women's Festival Muscle Tank",
        description: "Women's Festival Muscle Tank - Next Level 5013",
        color: "white",
        type: "women's tank",
        category: "women",
        image: "images/products images/id=20.jpg",
        stock: 50,
        price: 7.78, 
        quantity: 1
    },
    {
        id: 21,
        name: "Youth Unisex Jersey Tee",
        description: "Youth Unisex Jersey Tee - BELLA + CANVAS 3001Y",
        color: "white",
        type: "t-shirt",
        category: "boy",
        image: "images/products images/id=21.jpg",
        stock: 50,
        price: 2.79, 
        quantity: 1
    },
    {
        id: 22,
        name: "Heavy Cotton™ Youth T-Shirt",
        description: "Heavy Cotton™ Youth T-Shirt - Gildan 5000B",
        color: "black",
        type: "t-shirt",
        category: "boy",
        image: "images/products images/id=22.jpg",
        stock: 50,
        price: 2.55, 
        quantity: 1
    },
    {
        id: 23,
        name: "Youth Jersey Tank",
        description: "Youth Jersey Tank - BELLA + CANVAS 3480Y",
        color: "green",
        type: "Youth Tank",
        category: "boy",
        image: "images/products images/id=23.jpg",
        stock: 50,
        price: 3.40, 
        quantity: 1
    },
    {
        id: 24,
        name: "Youth Vat-Dyed Short Sleeve T-Shirt",
        description: "Youth Cyclone Vat-Dyed Pinwheel Short Sleeve T-Shirt - Dyenomite 20BCY",
        color: "blue",
        type: "t-shirt",
        category: "boy",
        image: "images/products images/id=24.jpg",
        stock: 50,
        price: 8.67, 
        quantity: 1
    },
    {
        id: 25,
        name: "Youth Classic Long Sleeve T-Shirt",
        description: "Youth Classic Long Sleeve T-Shirt - ALSTYLE 3384",
        color: "silver",
        type: "long sleeve t-shirt",
        category: "boy",
        image: "images/products images/id=25.jpg",
        stock: 50,
        price: 6.10, 
        quantity: 1
    },
    {
        id: 26,
        name: "SpotShield™ Youth Long Sleeve Polo",
        description: "SpotShield™ Youth Long Sleeve Polo - JERZEES 437YLR",
        color: "black",
        type: "long sleeve polo",
        category: "boy",
        image: "images/products images/id=26.jpg",
        stock: 50,
        price: 10.33,
        quantity: 1
    },
    {
        id: 27,
        name: "Youth Dri Power® Crewneck Sweatshirt",
        description: "Youth Dri Power® Crewneck Sweatshirt - Russell Athletic 998HBB",
        color: "black",
        type: "sweatshirt",
        category: "boy",
        image: "images/products images/id=27.jpg",
        stock: 50,
        price: 15,
        quantity: 1  
    },
    {
        id: 28,
        name: "HD Cotton Youth Short Sleeve T-Shirt",
        description: "HD Cotton Youth Short Sleeve T-Shirt - Fruit of the Loom 3930BR",
        color: "blue",
        type: "t-shirt",
        category: "boy",
        image: "images/products images/id=28.jpg",
        stock: 50,
        price: 3.14, 
        quantity: 1
    },
    {
        id: 29,
        name: "Youth Multi-Color Spiral Tie-Dyed T-Shirt",
        description: "Youth Multi-Color Spiral Tie-Dyed T-Shirt - Dyenomite 20BMS",
        color: "Michelangelo",
        type: "t-shirt",
        category: "boy",
        image: "images/products images/id=29.jpg",
        stock: 50,
        price: 9.14, 
        quantity: 1
    },
    {
        id: 30,
        name: "Youth Full-Zip Hoodie",
        description: "Youth Sponge Fleece Full-Zip Hoodie - BELLA + CANVAS 3739Y",
        color: "black",
        type: "hoodie",
        category: "boy",
        image: "images/products images/id=30.jpg",
        stock: 50,
        price: 19.86,
        quantity: 1
    },
    {
        id: 31,
        name: "Three-Quarter Sleeve Tee",
        description: "Youth Baseball Fine Jersey Three-Quarter Sleeve Tee - LAT 6130",
        color: "Black/ Storm Camo",
        type: "t-shirt",
        category: "girl",
        image: "images/products images/id=31.jpg",
        stock: 50,
        price: 6.35, 
        quantity: 1
    },
    {
        id: 32,
        name: "Youth Flowy Racerback Tank",
        description: "Youth Flowy Racerback Tank - BELLA + CANVAS 8800Y",
        color: "pink",
        type: "youth tank",
        category: "girl",
        image: "images/products images/id=32.jpg",
        stock: 50,
        price: 6.40, 
        quantity: 1
    },
    {
        id: 33,
        name: "Youth Fine Jersey Tee",
        description: "Youth Fine Jersey Tee - LAT 6101",
        color: "Black Leopard",
        type: "t-shirt",
        category: "girl",
        image: "images/products images/id=33.jpg",
        stock: 50,
        price: 6.28, 
        quantity: 1
    },
    {
        id: 34,
        name: "Girls' Fine Jersey Tank Top",
        description: "Girls' Fine Jersey Tank Top - LAT 2690",
        color: "black",
        type: "t-shirt",
        category: "girl",
        image: "images/products images/id=34.jpg",
        stock: 50,
        price: 5.47, 
        quantity: 1
    },
    {
        id: 35,
        name: "Girls' Practice Jacket",
        description: "Girls' Practice Jacket - Boxercraft S89Y",
        color: "black",
        type: "jacket",
        category: "girl",
        image: "images/products images/id=35.jpg",
        stock: 50,
        price: 28.85,
        quantity: 1
    },
    {
        id: 36,
        name: "Youth Football Fine Jersey Tee",
        description: "Youth Football Fine Jersey Tee - LAT 6137",
        color: "Black Solid/ White",
        type: "t-shirt",
        category: "girl",
        image: "images/products images/id=36.jpg",
        stock: 50,
        price: 9.44, 
        quantity: 1
    },
    {
        id: 37,
        name: "Youth Cosmic Fleece Hooded Sweatshirt",
        description: "Youth Cosmic Fleece Hooded Sweatshirt - J. America 8610",
        color: "Charcoal Fleck/ Black",
        type: "sweatshirt",
        category: "girl",
        image: "images/products images/id=37.jpg",
        stock: 50,
        price: 22.17,
        quantity: 1
    },
    {
        id: 38,
        name: "Girls' V-Notch Hooded Sweatshirt",
        description: "Girls' Courtney Burnout V-Notch Hooded Sweatshirt - MV Sport W1162Y",
        color: "Rainbow Stripe",
        type: "sweatshirt",
        category: "girl",
        image: "images/products images/id=38.jpg",
        stock: 50,
        price: 33.99,
        quantity: 1
    },
    {
        id: 39,
        name: "Girls' Fine Jersey Tee",
        description: "Girls' Fine Jersey Tee - LAT 2616",
        color: "black",
        type: "t-shirt",
        category: "girl",
        image: "images/products images/id=39.jpg",
        stock: 50,
        price: 5.33, 
        quantity: 1
    },
    {
        id: 40,
        name: "Girls' Princess Crew",
        description: "Girls' Princess Crew - Next Level 3710",
        color: "pink",
        type: "crew",
        category: "girl",
        image: "images/products images/id=40.jpg",
        stock: 50,
        price: 4.63, 
        quantity: 1
    },
    {
        id: 41,
        name: "Trucker Cap",
        description: "Herringbone Unstructured Contrast Stitch Trucker Cap - Mega Cap 6990B",
        color: "Black Denim/ White",
        type: "cap",
        category: "other",
        image: "images/products images/id=41.jpg",
        stock: 50,
        price: 5.64, 
        quantity: 1
    },
    {
        id: 42,
        name: "Pigment-Dyed Twill Cap",
        description: "Pigment-Dyed Twill Cap - Mega Cap 7601",
        color: "black",
        type: "cap",
        category: "other",
        image: "images/products images/id=42.jpg",
        stock: 50,
        price: 4.74, 
        quantity: 1
    },
    {
        id: 43,
        name: "Blanket Strap",
        description: "Blanket Strap - Alpine Fleece 8820",
        color: "black",
        type: "blanket strap",
        category: "other",
        image: "images/products images/id=43.jpg",
        stock: 50,
        price: 1.67, 
        quantity: 1
    },
    {
        id: 44,
        name: "Fleece Throw Blanket",
        description: "Fleece Throw Blanket - Alpine Fleece 8700",
        color: "blue",
        type: "blanket",
        category: "other",
        image: "images/products images/id=44.jpg",
        stock: 50,
        price: 11.50,
        quantity: 1
    },
    {
        id: 45,
        name: "Explorer Large Duffel Bag",
        description: '27" Explorer Large Duffel Bag - Liberty Bags 3906',
        color: "green",
        type: "duffel bag",
        category: "other",
        image: "images/products images/id=45.jpg",
        stock: 50,
        price: 32.19,
        quantity: 1
    },
    {
        id: 46,
        name: "Unisex Tee",
        description: 'Recycled 18" Small Duffel Bag - Liberty Bags 8805',
        color: "gray",
        type: "duffel bag",
        category: "other",
        image: "images/products images/id=46.jpg",
        stock: 50,
        price: 4.9,
        quantity: 1   
    },
    {
        id: 47,
        name: "Heritage Canvas Backpack",
        description: "Heritage Canvas Backpack - Hardware 3101",
        color: "Khaki",
        type: "backpack",
        category: "other",
        image: "images/products images/id=47.jpg",
        stock: 50,
        price: 51.22, 
        quantity: 1
    },
    {
        id: 48,
        name: "Basic Backpack",
        description: '16" Basic Backpack - Liberty Bags 7709',
        color: "red",
        type: "backpack",
        category: "other",
        image: "images/products images/id=48.jpg",
        stock: 50,
        price: 9.08, 
        quantity: 1
    },
    {
        id: 49,
        name: "25L Jumbo Tote",
        description: "25L Jumbo Tote - Q-Tees Q600",
        color: "lime",
        type: "tote",
        category: "other",
        image: "images/products images/id=49.jpg",
        stock: 50,
        price: 3.74, 
        quantity: 1
    },
    {
        id: 50,
        name: "Medium Canvas Tote",
        description: "Medium Canvas Tote - OAD OAD116",
        color: "black",
        type: "tote",
        category: "other",
        image: "images/products images/id=50.jpg",
        stock: 50,
        price: 1.73, 
        quantity: 1
    }
]
const rate = {}
const currencySimbols = { usd: "$" , eur: "€" , mdl: "Lei" }

let cart = JSON.parse(localStorage.getItem("clothesCart")) || []
let cartOnScreen = false
let filtersContainer = false
let changedCategory = []
let changedTypes = []
let changedColors = []
const ascDesc = { value: "", }
const maxPrice = { value: 0, }
const minPrice = { value: 0, }
let tempArr = clothes.map(item => item)
let isShearch = false

extractFromLocalStorage()

// Extrag cursul valutar pentru EUR si MDL din USD
async function getCurrencyData() {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
    const data = await response.json()
    const result = await data
    
    rate.usd = 1
    rate.eur = parseFloat(result.usd.eur.toFixed(2))
    rate.mdl = parseFloat(result.usd.mdl.toFixed(2))
    setCurrencyInfo()
    if (!cartOnScreen) {    
        filterProducts()
    } else {
        filterProducts()
    }
}

// afisarea la ecran a cursului valutar in header
function setCurrencyInfo(){
    $("#navbar-2").html("")
    $("#navbar-2").append(`
        <div class="currency-info row">
            <h3 class="col-sm-12 col-4">[ 1$ => ${rate.eur}€ ]</h3>
            <h3 class="col-sm-12 col-4">[ 1$ => ${rate.mdl}Lei ]</h3>
        </div>
    `)
}

// afisarea produselor
function showProducts(arr, rateValue) {
    $("#main").html("")
    $("#quantity-in-cart").attr("value", `${cart.length}`)
    $("#quantity-in-cart").html(`${cart.length}`)
    if (cartOnScreen) {
        if(arr.length > 0) {
            arr.forEach(item => {
                let price = item.price * rate[$("#currency").val()]
                $("#main").append(`
                    <div class="products-cart col-md-12 col-8 row border border-light p-4">
                        <div class="col-md-4 d-flex jsutify-content-center" >
                            <img src="${item.image}" alt="${item.color} ${item.type}" class="img-in-cart p-0 m-0"/>
                        </div>
                        <div class="description col-md-4 d-flex flex-column justify-content-around">
                            <div class="d-flex flex-column align-items-start">
                                <h4 class="text-light">${item.name}</h4>
                                <p class="text-light">${item.description}</p>
                            </div>
                            <div class="d-flex flex-column align-items-start">
                                <small class="stock text-danger">In Stock: ${item.stock}</small>
                                <h1 class="price text-success">Price: <span id="price-${item.id}">${price.toFixed(2)}</span> ${currencySimbols[$("#currency").val()]}</h1>
                            </div>
                        </div>
                        <div class="control-buy col-md-4 d-flex flex-column justify-content-around">
                            <button class="buy btn btn-outline-danger" onclick=deleteFromCart(${item.id})>Delete from Cart</button>
                            <div class="set-quantity row p-2">
                                <button class="decr btn btn-danger col-2 rounded-0"  onclick=decrement(${item.id})>-</button>
                                <label id="quantity-${item.id}" class="input-group-text col-8 rounded-0">1</label>   
                                <button class="incr btn btn-success col-2 rounded-0" onclick=increment(${item.id})>+</button>
                            </div>
                            <div class="d-flex flex-column">
                                <h3 class="text-success">Total Price: <span id="total-${item.id}">${price.toFixed(2)}</span> ${currencySimbols[$("#currency").val()]}</h3>
                                <button class="buy btn btn-outline-success" onclick=buyProducts(${item.id})>Buy now</button>
                            </div>
                        </div>
                    </div>
                `)
                $(`#quantity-${item.id}`).change(() => {
                    let value = $(`#quantity-${item.id}`).val()
                    if(parseInt(value) >= item.stock) {
                        alert("Stock is too low!!!")
                    }
                    if(value.length = 0) {
                        $(`#quantity-${item.id}`).attr("value",1)
                    } 
                })
            })
        } else {
            $("#main").html(`
            <div class="product row">
                <h1 class="error-message col-12 text-center text-danger p-5">Your cart is empty!</h1>
            </div>
            `)
        }
    } else {
        if (arr.length > 0) {
            arr.forEach(item => {
                // calcularea pretului intr-o anumita valuta
                let price = item.price * rateValue
                if (item.stock > 0) {
                    $("#main").append(`
                        <div class="product col-sm-3 d-flex flex-column justify-content-around align-items-center text-light border border-light p-3">
                            <img src="${item.image}" alt="${item.color} ${item.type}" class="img pb-2"/>
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                            <small class="stock text-danger"><span>In Stock:</span> ${item.stock}</small>
                            <h1 class="price text-success">${price.toFixed(2)} ${currencySimbols[$("#currency").val()]}</h1>
                            <button id="btn-${item.id}" class="btn btn-outline-success container" onclick=addToCart(${item.id})>Add to Cart</button>
                        </div>
                    `)
                }
            })
        } else {
            $("#main").append(`
                <h1 class="text-danger col-12 text-center">Products are not found!</h1> 
            `)
        }
        cart.forEach(item => {
            $(`#btn-${item.id}`).html(`<i class="fa-solid fa-check" style="font-weight: bold;"></i> In Cart!`)
            $(`#btn-${item.id}`).removeClass("btn-outline-success")
            $(`#btn-${item.id}`).addClass("btn-success") 
        })
    }
    
}

function extractFromLocalStorage() {    
    if(localStorage.getItem("rate") != null) {
        $("#currency").change().val(localStorage.getItem("rate"))
    }
    getCurrencyData()
}

// Alege valuta
$("#currency").change(() => {
    localStorage.setItem("rate", $("#currency").val())
    getCurrencyData()
})

// adaugarea in Cart
function addToCart(id) {
    const item = clothes.filter(item => item.id === id)[0]
    const itemIsInCart = cart.filter(cartItem => cartItem.id === id)

    if(itemIsInCart.length === 0) {
        cart.push(item)
        $(`#btn-${id}`).html(`<i class="fa-solid fa-check" style="font-weight: bold;"></i> In Cart!`)
        $(`#btn-${item.id}`).removeClass("btn-outline-success")
        $(`#btn-${item.id}`).addClass("btn-success") 
        localStorage.setItem("clothesCart", JSON.stringify(cart))
        $("#quantity-in-cart").attr("value", `${cart.length}`)
        $("#quantity-in-cart").html(`${cart.length}`)
    }
}

// adauga inca un produs la produselor spre achitare si calcularea pretului total a acestora
function increment(id) {
    let item = cart.filter(cartItem => cartItem.id === id)[0]
    let newQnt = parseInt($(`#quantity-${id}`).html()) + 1
    let price = parseFloat($(`#price-${id}`).html())
    let total =  newQnt * price
    if(item.stock > parseInt($(`#quantity-${id}`).html())) {
        $(`#total-${id}`).html(total.toFixed(2))
        $(`#quantity-${id}`).html(newQnt)
    }
}

// elimina un produs de la produselor spre achitare si calcularea pretului total a acestora
function decrement(id) {
    let item = cart.filter(cartItem => cartItem.id === id)[0]
    let newQnt = parseInt($(`#quantity-${id}`).html()) - 1
    let price = parseFloat($(`#price-${id}`).html())
    let total =  newQnt * price
    if(parseInt($(`#quantity-${id}`).html()) > 1) {
        $(`#total-${id}`).html(total.toFixed(2))
        $(`#quantity-${id}`).html(newQnt)
    }
}
    
// procurarea unui anumit produs
function buyProducts(id) {
    clothes.filter(item => {
        if(item.id === id) {
            item.stock -= parseInt($(`#quantity-${id}`).html())
            alert("Thank you for your purchase")
            deleteFromCart(id)
        }
    })
}

// eliminarea unui anumit produs din lista
function deleteFromCart(id) {
    cart = cart.filter(item => item.id != id)
    let finalQuantity = parseInt($("#quantity-in-cart").val()) - 1
    $("#quantity-in-cart").attr("value", `${finalQuantity}`)
    $("#quantity-in-cart").html(`${finalQuantity}`)
    localStorage.setItem("clothesCart", JSON.stringify(cart))
    filterProducts()
}

// crearea filtrelor
function createFilterByCategory() {
    $("#filter-by-category").html(`
        <h3 id="category-title" class="filter-title">Category <i id="display-filters-arrow" class="fa-solid fa-angle-down"></i></h3>
        <div id="category-items"></div>
    `)
    let categories = []
    clothes.forEach(item => {
        if (categories.filter(catItem => catItem === item.category).length === 0) {
            categories.push(item.category)
            $("#category-items").append(`
                <div id="filter-${item.category}" class="filter d-flex gap-2">
                    <input type="checkbox" name="category" id="${item.category}" value="${item.category}">
                    <label for="${item.category}">${item.category.toLowerCase()}</label>
                </div>
            `)
        }
    })
    
    $("#category-items").hide()

    $("#category-title").click(() => closeOpenFilter("category"))
}

function createFilterByType() {
    $("#filter-by-type").html(`
        <h3 id="type-title" class="filter-title">Type <i id="display-filters-arrow" class="fa-solid fa-angle-down"></i></h3>
        <div id="type-items"></div>
    `)
    let types = []
    clothes.forEach(item => {
        if (types.filter(typeItem => typeItem === item.type).length === 0) {
            types.push(item.type)
            $("#type-items").append(`
                <div id="filter-${item.type}" class="filter d-flex gap-2">
                    <input type="checkbox" name="type" id="${item.type}" value="${item.type}">
                    <label for="${item.type}">${item.type.toLowerCase()}</label>
                </div>
            `)
        }
    })
    
    $("#type-items").hide()

    $("#type-title").click(() => closeOpenFilter("type"))
}

function createFilterByColor() {
    $("#filter-by-color").html(`
        <h3 id="color-title" class="filter-title">Color <i id="display-filters-arrow" class="fa-solid fa-angle-down"></i></h3>
        <div id="color-items"></div>
    `)
    let colors = []
    clothes.forEach(item => {
        if (colors.filter(colorItem => colorItem === item.color).length === 0) {
            colors.push(item.color)
            $("#color-items").append(`
                <div id="filter-${item.color}" class="filter d-flex gap-2">
                    <input type="checkbox" name="color" id="${item.color}" value="${item.color}">
                    <label for="${item.color}">${item.color.toLowerCase()}</label>
                </div>
            `)
        }
    })

    $("#color-items").hide()

    $("#color-title").click(() => closeOpenFilter("color"))
}

function createFilterByPrice() {
    $("#filter-by-price").html(`
        <h3 id="price-title" class="filter-title">Price <i id="display-filters-arrow" class="fa-solid fa-angle-down"></i></h3>
        <div id="price-items"></div>
    `)

    $("#price-items").append(`
        <div id="asc-desc" class="filter">
            <div class="filter">
                <input type="radio" id="asc" name="asc-desc" value="asc">
                <label for="asc">Cheaper</label>
            </div>
            <div class="filter">
                <input type="radio" id="desc" name="asc-desc" value="desc">
                <label for="desc">Expensiver</label>
            </div>
        </div>
        <br>
        <div id="between" class="filter">
            <label for="min-price" class="h5">Minimal Price</label>
            <br>
            <input type="number" id="min-price" class="input-group-text">
            <label for="max-price" class="h5">Maximal Price</label>
            <br>
            <input type="number" id="max-price" class="input-group-text">
        </div>
    `)

    $("#price-items").hide()

    $("#price-title").click(() => closeOpenFilter("price"))
}

// deschide, inchide un filtru
function closeOpenFilter(title) {
    $(`#${title}-items`).toggle()
    $(`#${title}-title`).children("i").toggleClass("fa-angle-down")
    $(`#${title}-title`).children("i").toggleClass("fa-angle-up")
}

// recrearea filtrelor pentru a reseta valorile acestora
function resetFilters() {    
    changedCategory = []
    changedTypes = []
    changedColors = []
    ascDesc.value = ""
    maxPrice.value = 0
    minPrice.value = 0
    createFilterByCategory()
    createFilterByType()
    createFilterByColor()
    createFilterByPrice()
    setEventsForCategory()
    setEventsForType()
    setEventsForColor()
    setEventsForPrice()
    filterProducts()
}

resetFilters()

// filtrarea produselor dupa categorie 
function filterByCategory(categories) {
    let result = []
    if (categories.length > 0) {
        categories.forEach(catItem => {
            tempArr.forEach(item => {
                if (item.category === catItem && result !== item) {
                    result.push(item)
                }
            })
        })
        tempArr = result.map(item => item)
    }
}

// filtrarea dupa tip
function filterByType(types) {
    let result = []
    if (types.length > 0) {
        types.forEach(typeItem => {
            tempArr.forEach(item => {
                if (item.type === typeItem && result !== item) {
                    result.push(item)
                }
            })
        })
        tempArr = result.map(item => item)
    }
}

// filtrarea dupa culoare
function filterByColor(colors) {
    let result = []
    if (colors.length > 0) {
        colors.forEach(colorItem => {
            tempArr.forEach(item => {
                if (item.color === colorItem && result !== item) {
                    result.push(item)
                }
            })
        })
        tempArr = result.map(item => item)
    }
    
}

// filtrarea dupa pret
function filterByPrice(minPrice, maxPrice, ascDesc) {    
    if (maxPrice > 0) {    
        tempArr = tempArr.filter(item => parseFloat((item.price * rate[$("#currency").val()]).toFixed(2)) >= minPrice && parseFloat((item.price * rate[$("#currency").val()]).toFixed(2)) <= maxPrice)
    } else {
        tempArr = tempArr.filter(item => parseFloat((item.price * rate[$("#currency").val()]).toFixed(2)) >= minPrice)
    }
    switch (ascDesc) {
        case "desc":
            tempArr.sort((item, prevItem) => {
                return prevItem.price - item.price
            })
            break
        case "asc":
            tempArr.sort((item, prevItem) => {
                return item.price - prevItem.price
            })
            break
    }
}

// filtrarea produselor
function filterProducts() {
    if (!isShearch) {
        if (cartOnScreen) {
            tempArr = cart.map(item => item)
        } else {
            tempArr = clothes.map(item => item)
        }
    }
    isShearch = false
    filterByCategory(changedCategory)
    filterByType(changedTypes)
    filterByColor(changedColors)
    filterByPrice(minPrice.value, maxPrice.value, ascDesc.value)
    showProducts(tempArr, rate[$("#currency").val()])
}

// setarea evenimentelor pentru toate filtrele
function setEventsForCategory() {
    const categoryNames = document.getElementsByName("category")
    changedCategory = []
    Array.from(categoryNames).forEach(item => {
        item.addEventListener("change", () => {
            if(item.checked && !changedCategory.includes(item.value)) {
                changedCategory.push(item.value)
            } else {
                changedCategory.splice(changedCategory.indexOf(item.value), 1)
            }
            filterProducts()
        })
    })
}

function setEventsForType() {
    const typeNames = document.getElementsByName("type")
    changedTypes = []
    Array.from(typeNames).forEach(item => {
        item.addEventListener("change", () => {
            if(item.checked && !changedTypes.includes(item.value)) {
                changedTypes.push(item.value)
            } else {
                changedTypes.splice(changedTypes.indexOf(item.value), 1)
            }
            filterProducts()
        })
    })
}

function setEventsForColor() {
    const colorNames = document.getElementsByName("color")
    changedColors = []
    Array.from(colorNames).forEach(item => {
        item.addEventListener("change", () => {
            if(item.checked && !changedColors.includes(item.value)) {
                changedColors.push(item.value)
            } else {
                changedColors.splice(changedColors.indexOf(item.value), 1)
            }
            filterProducts()
        })
    })
}

function setEventsForPrice() {
    ascDesc.value = ""
    maxPrice.value = 0
    minPrice.value = 0
    $("#min-price").change((e) => {
        if (e.target.value == "") {
            $("#min-price").val("")
            minPrice.value = 0
        } else {
            minPrice.value = parseFloat(e.target.value)
        }
        filterProducts()
    })
    $("#max-price").change((e) => {
        if (e.target.value == "") {
            $("#max-price").val("")
            maxPrice.value = 0
        } else {
            maxPrice.value = parseFloat(e.target.value)
        }
        filterProducts()
    })
    $("#min-price").click(() => {
        if ($("#min-price").val() == 0) {
            $("#min-price").val("")
        }
    })
    $("#max-price").click(() => {
        if ($("#max-price").val() == 0) {
            $("#max-price").val("")
        }
    })
    
    Array.from(document.getElementsByName("asc-desc")).forEach(item => {
        item.addEventListener("change", () => {
            ascDesc.value = item.value
            filterProducts()
        })
    })
}

// cautarea produselor
function shearhProducts(val) {
    filterProducts()
    if (val.length > 1) {
        tempArr = tempArr.filter(item => item.name.toLowerCase().includes(val) || item.description.toLowerCase().includes(val))
    isShearch = true
    }
    filterProducts()
}

$("#cart").click(() => {
    if(!cartOnScreen) {
        cartOnScreen = true
    } else {
        cartOnScreen = false
    }
    resetFilters()
})

$("#display-filters").click(() => {
    $("#filters").toggleClass("hide-filters-container")
    $("#display-filters-arrow").toggleClass("fa-angle-down")
    $("#display-filters-arrow").toggleClass("fa-angle-up")
    if (!$("#filters").hasClass("hide-filters-container")) {
        scroll(0, 0)
    }
})

$("#btn-reset-filters").click(() => {
    resetFilters()
})

$("#search-input").keydown((e) => {
    if (e.key === "Enter") {
        document.getElementById("search-btn").click()
    }
})
$("#search-input").blur(() => {
    if ($("#search-input").val().length === 0) {
        document.getElementById("search-btn").click()
    }
})
$("#search-btn").click(() => {
    shearhProducts($("#search-input").val())
})