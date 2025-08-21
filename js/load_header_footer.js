 // Tải header
    fetch("header.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });
       // Gắn sự kiện sau khi header đã được chè  
    // Tải footer
    fetch("footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });