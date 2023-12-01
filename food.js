

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';



const supabase_url = 'https://todxjbqzlxjjdiccyzuu.supabase.co';
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZHhqYnF6bHhqamRpY2N5enV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NDgwMzUsImV4cCI6MjAxNjEyNDAzNX0.PyducfY0_Qo3vvOZHJ7CMllHMbymQZs-Sg61A3ZkgHc";


const supabase = createClient(supabase_url, anon_key);






let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
let cartItemsList = [];
var amount = 0;


cartIcon.onclick = () =>{
    cart.classList.add("active");
}
closeCart.onclick = () =>{
    cart.classList.remove("active");
}

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
} else{
    ready();
}

function ready(){
    var removeCartButton = document.getElementsByClassName('cart-remove')
    console.log(removeCartButton);
    for (var  i = 0; i < removeCartButton.length ;i++){
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length;i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    var addCart = document.getElementsByClassName("add-cart")
    for (var i = 0; i < addCart.length;i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }

    document.getElementsByClassName("btn-buy")[0].addEventListener("click",buybuttonClicked);
}

function buybuttonClicked(){
    alert("Your Order has been Placed")
    storeCartItemsToCSV();
    window.location.href = "checkout.html";
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}



function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value)|| input.value <= 0){
        input.value = 1;
    }
    updatetotal()
}
function addCartClicked(event){
    var buttonclick = event.target;
    var shopProduct = buttonclick.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var productimg = shopProduct.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productimg);
    updatetotal();
}
function addProductToCart(title, price,productimg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItem = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItem.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert('You have already added this item to the cart');
            return;
        }
    cartItemsList.push({ title, price, quantity: 1 });
    updatetotal();
    }
    
    var cartBoxContent = `
                        <img src="${productimg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class='bx bxs-trash cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItem.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);
    updatetotal();
}

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        total = Math.round(total*100)/100;
        amount = total;
        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    
}


function storeCartItemsToCSV() {

    async function inserter(items){
        console.log("dddddddddddddddddddddddd");

        const { data, error } = await supabase.auth.getSession()

        console.log(data["session"]["user"]["id"]);

        let userid = data["session"]["user"]["id"];

        try {
            const { data, error } = await supabase
              .from('current_orders')
              .insert([
                //{ , cost: items.price, , user_id: userid},
                {user_id: userid, cost: items.price, item: items.title,}
              ])
              .select()
          
            } catch (error) {
              
        }
    }
 
    console.log(cartItemsList);

    const csvContent =  cartItemsList.map(item => `${item.title},${item.price},${amount},${item.quantity},${inserter(item)}`).join("\n");


        




    // const blob = new Blob([csvContent], { type: "text/csv" });
    // const formData = new FormData();
    // formData.append('cartData', blob, 'cart_items.csv');
    // fetch('https://example.com/upload', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log('Server response:', data);
    // })
    // .catch(error => {
    //     console.error('Error during fetch operation:', error);
    // });

    // var cartContent = document.getElementsByClassName("cart-content")[0];
    // while (cartContent.hasChildNodes()) {
    //     cartContent.removeChild(cartContent.firstChild);
    // }
    // updatetotal();
/*
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "cart_items.csv";
    link.click();*/
}