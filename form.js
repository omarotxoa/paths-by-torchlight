// Login Form Logic

let loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value == "" || password.value == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      // perform operation with form input
      window.location.href = "./main.html";
    }
  });