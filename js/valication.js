document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // chặn gửi form nếu lỗi
    
    let isValid = true;

    // Lấy các input
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Reset error
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

    // Kiểm tra Name
    if (name.value.trim() === "") {
        setError(name, "Name cannot be empty");
        isValid = false;
    }

    // Kiểm tra Email
    if (email.value.trim() === "") {
        setError(email, "Email cannot be empty");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        setError(email, "Invalid email format");
        isValid = false;
    }

    // Kiểm tra Subject (cho phép rỗng, nhưng nếu nhập thì phải tối thiểu 3 ký tự)
    if (subject.value.trim() !== "" && subject.value.trim().length < 3) {
        setError(subject, "Subject must be at least 3 characters");
        isValid = false;
    }

    // Kiểm tra Message
    if (message.value.trim() === "") {
        setError(message, "Message cannot be empty");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        this.submit(); // gửi form thật sự
    }
});

// Hàm hiển thị lỗi
function setError(input, message) {
    const parent = input.parentElement;
    const errorMsg = parent.querySelector(".error-msg");
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
}

