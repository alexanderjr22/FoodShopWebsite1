const product = [
    {
        id: 0,
        image: "image/pasta.jpg",
        title: 'Pasta',
        prize: 70,
    },
    {
        id: 1,
        image: "image/lasagna.webp",
        title: 'lasagna',
        price: 160,
    },
    {
        id: 2,
        image: "image/chocolate_Drink.jpg",
        title: 'Chocolate Drink',
        price: 50,
    },
    {
        id: 3,
        image: "image/pizza.jpg",
        title: 'Pizza',
        price: 170,
    },
    {
        id: 4,
        image: "image/Hot_dog.jpg",
        title: 'Hot dog',
        price: 60,
    },
    {
        id: 5,
        image: "image/juse.jpg",
        title: 'Juse',
        price: 50,
    },
    {
        id: 6,
        image: "image/biryani.webp",
        title: 'Biryani',
        price: 370,
    },
    {
        id: 7,
        image: "image/chocolate.jpg",
        title: 'Chocolate',
        price: 120,
    },
    {
        id: 8,
        image: "image/Spanchi.jpg",
        title: 'Spanchi',
        price: 60,
    },
    {
        id: 9,
        image: "image/sandwich.jpg",
        title: 'Sandwich',
        price: 70,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                     <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>$ ${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
}).join('')

var cart =[];

function Order(){
    cart.push({...categories[a]});
    displaycart();
}
// Function to handle "Order Now" button click
function orderNowClicked(productName) {
    // Set the product name as the placeholder of the input field
    document.getElementById('product-name-input').placeholder = productName;
}

function displaycart(){
    let j = 0;
    if(cart.length==0){
    document.getElementById('cartitem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2> style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
        cart.push({...product[i]});
    }
    
}