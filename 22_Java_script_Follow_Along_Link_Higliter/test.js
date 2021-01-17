var products_Page = function products_Page() {
    document.querySelector('div.Image-boxify.Product-image.js-boxify-image').click()
};

var products_Show_Page = function products_Show_Page() {
    document.querySelector('[ng-click="addItemToCart()"]').click()
    document.querySelector('#btn-checkout').click()
};

var cart_Page = function cart_Page() {
    document.getElementById('#btn-checkout').click();
}

var checkout_Page = function checkout_Page() {
    document.querySelector('input[id="order-customer-name"]').value = 'test';
    document.querySelector('input[id="order-customer-email"]').value = 'testuser@shoplineapp.com';
    document.querySelector('input[id="order-customer-phone"]').value = '0987654321';
    document.querySelector('[name="order[delivery_data][recipient_is_customer]"]').click();
    document.querySelector('input[name="policy"]').click();
    document.querySelector('input[name="saveFields[marketing]"]').click();
    document.querySelector('.btn.btn-success').click()

}


(function() {
    products_Page();
    setTimeout(() => { products_Show_Page() }, 2000)
    setTimeout(() => { cart_Page() }, 20000)
    setTimeout(() => { checkout_Page() }, 20000)
}());