document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Đăng nhập thành công!");
     
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
    
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        alert("Đăng nhập thành công!");
        
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
});
