// script.js for Care & Cradle website

// Functionality for product interactions
function handleProductInteraction(productId) {
    // Logic for interacting with the product
    console.log('Interacting with product:', productId);
}

// WhatsApp order button functionality
function handleWhatsAppOrder(productId) {
    const message = `I would like to order product ${productId}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Cart features
let cart = [];

function addToCart(productId) {
    cart.push(productId);
    console.log('Product added to cart:', productId);
}

function viewCart() {
    console.log('Items in cart:', cart);
}