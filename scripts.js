// إضافة المنتج إلى السلة
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('تمت إضافة المنتج إلى السلة!');
    });
});
