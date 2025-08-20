 // Load header
      // Gắn sự kiện sau khi header đã được chèn
      const cartBtn = document.getElementById('cartBtn');
      const cartSidebar = document.getElementById('cartSidebar');
      const closeCart = document.getElementById('closeCart');

      if (cartBtn && cartSidebar && closeCart) {
        cartBtn.addEventListener('click', () => {
          cartSidebar.classList.add('active');
        });
        closeCart.addEventListener('click', () => {
          cartSidebar.classList.remove('active');
        });
      }