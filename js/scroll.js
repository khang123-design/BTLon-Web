// scroll-effect.js
document.addEventListener("DOMContentLoaded", function () {
    window.checkProducts = function () { // gắn vào window để file khác gọi được
        const products = document.querySelectorAll('.product');
        const triggerBottom = window.innerHeight - 100;

        products.forEach(product => {
            const boxTop = product.getBoundingClientRect().top;
            const boxBottom = product.getBoundingClientRect().bottom;

            if (boxTop < triggerBottom && boxBottom > 0) {
                product.classList.add('show');
            } else {
                product.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkProducts);
    window.addEventListener('load', checkProducts);
});
