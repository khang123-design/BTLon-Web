 // Danh sách ảnh nền
      const heroImages = [
        './image/Hero.jpg',
        './image/product4.jpg',
        './image/setup4.png'
      ];

      let currentIndex = 0;
      const heroSection = document.querySelector('.hero');

      // Gán ảnh đầu tiên
      heroSection.style.backgroundImage = `url(${heroImages[currentIndex]})`;

      // Hàm chuyển ảnh
      function changeHeroImage() {
        currentIndex = (currentIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = `url(${heroImages[currentIndex]})`;
      }
      // Chạy tự động mỗi 3 giây
      setInterval(changeHeroImage, 3000);